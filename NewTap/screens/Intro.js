import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'

import Sound from 'react-native-sound';




const styles = StyleSheet.create({
    image:{
        width:250,
        height:250,
    },
    mainContent:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    text:{
        color:'rgba(255,255,255,0.8)',
        backgroundColor:'transparent',
        textAlign:'center',
        paddingHorizontal:16,
        fontFamily:'OBELIXPROB-CYR'
    },
    secondTittle:{
        fontSize:20,
        color:'white',
        backgroundColor :'transparent',
        textAlign : 'center',
        marginBottom: 16,
        fontWeight:'500',
        fontFamily:'OBELIXPROB-CYR'

    },
    title:{
        fontSize:25,
        color:'white',
        backgroundColor :'transparent',
        textAlign : 'center',
        marginBottom: 16,
        fontWeight:'500',
        fontFamily:'OBELIXPROB-CYR'
    }
})

const slides = [{
    key: 'slide1',
    title : 'Fun Tap Tap',
    secondTittle:'Have Fun Tap Tap',
    text :'Tap Tap to gain more combos! Follow the light,\n melody or use your own instinct',
    image :require('../assets/img/ic-tayo.png'),
    colors:['#1e3c72','#2a5298']
},
{
    key: 'slide2',
    title : 'Fun Tap Tap',
    secondTittle:'Get Free Cryptocurency ',
    text :'be the top 10 to get Free Cryptocurrency',
    image :require('../assets/img/ic-crypto.png'),
    colors:['#005c97','#363795']
}
];



const open = new Sound('open.mp3',Sound.MAIN_BUNDLE,null)

class Intro extends Component{

   
    
    constructor(props){
        super(props)
        
    }
    
    componentWillMount(){
        open.play()
    }
    
    _renderItem = props =>(
        
        
        <LinearGradient
            style={[styles.mainContent,{
                paddingTop:props.topSpacer,
                paddingBottom:props.bottomSpacer,
                width:props.width,
                height:props.height
            }]}
            colors={props.colors}
            start={{x:0,y:1}} end={{x:1,y:1}}
        >
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <Image source={props.image} style={{width:150,height:150}}/>
        <View>
            <Text style={styles.secondTittle}>{props.secondTittle}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>

        </LinearGradient>
    )


    
    

    render(){   
        
        
        return(
            
            
            
            <AppIntroSlider
                
                slides={slides}
                renderItem = {this._renderItem}
                bottomButton
                nextLabel='Continue'
                doneLabel = 'Get Started'
                onDone={()=>{this.props.navigation.navigate('MainScreen'),open.stop()}}
                
            />
        )
    }
}

export default Intro