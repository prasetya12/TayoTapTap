import React,{Component} from 'react'
import {Text,View,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import {Container,Header, Content, Left, Body, Right,Icon} from 'native-base'
import Sound from 'react-native-sound'

import axios from 'axios'


const sound = new Sound('maintayo.mp3',Sound.MAIN_BUNDLE,null)
const open = new Sound('open.mp3',Sound.MAIN_BUNDLE,null)
class Mainscreen extends Component{
    constructor(props){
        super(props)
        this.state={
            combos:0,
            patern:[1,2,3,4],
            counter:0,

            cobaId:[],
            data :0,
            
            backgroundColor1:'#f1c40f',
            iconColor1:'white',

            backgroundColor2:'#2980b9',
            iconColor2:'white',

            backgroundColor3:'#27ae60',
            iconColor3:'white',
            
            backgroundColor4:'#c0392b',
            iconColor4:'white',

            background:0


         

            
            
        }
    }

    



    guideButton(value){
        const patternSec = this.state.patern.slice()
        const cont = this.state.counter

        
        if(patternSec[value]==1){
            this.setState({ backgroundColor1:'white',
                            iconColor1:'#f1c40f',

                            backgroundColor2:'#2980b9',
                            iconColor2:'white',

                            backgroundColor3:'#27ae60',
                            iconColor3:'white',
                            
                            backgroundColor4:'#c0392b',
                            iconColor4:'white'})
        }else if(patternSec[value] ==2 ){
            this.setState({
                            backgroundColor1:'#f1c40f',
                            iconColor1:'white',

                            backgroundColor2:'white',
                            iconColor2:'#2980b9',

                            backgroundColor3:'#27ae60',
                            iconColor3:'white',
                            
                            backgroundColor4:'#c0392b',
                            iconColor4:'white'   
            })
        }else if(patternSec[value] == 3){
            this.setState({
                            backgroundColor1:'#f1c40f',
                            iconColor1:'white',

                            backgroundColor2:'#2980b9',
                            iconColor2:'white',

                            backgroundColor3:'white',
                            iconColor3:'#27ae60',
                            
                            backgroundColor4:'#c0392b',
                            iconColor4:'white' 
            })
        }else if(patternSec[value] == 4){
            this.setState({
                            backgroundColor1:'#f1c40f',
                            iconColor1:'white',

                            backgroundColor2:'#2980b9',
                            iconColor2:'white',

                            backgroundColor3:'#27ae60',
                            iconColor3:'white',
                            
                            backgroundColor4:'white',
                            iconColor4:'#c0392b'   
            })
        }
    }

    async componentDidMount(){
        await axios.get('http://192.168.0.8:3333/api/v1/assets')
        .then(res=>{
            const data = res.data
            // console.warn(data)
            this.setState({data})

        }).catch((error)=>{
            console.warn('api call error')
            console.warn(error.message)
        })


        this.guideButton(this.state.counter)
    }

    handleClick(number){
        sound.pause()
        sound.play()
        
        
        if(number== this.state.patern[this.state.counter]){
            this.setState({counter:this.state.counter+1})


            if(this.state.counter+1== this.state.patern.length){
                this.setState({combos:this.state.combos+1})
                this.setState({counter:0})
               
            }


            this.guideButton(this.state.counter === 3 ?  0 : this.state.counter + 1 )
        }else{
            sound.stop()
            this.setState({counter:0})
            this.setState({combos:0})
            alert('GAME OVER \nScore Anda ' + this.state.combos)
        }
    }


    render(){
            
        // alert(this.state.data.id)

        return(
            <Container >
                
               
            
                <ImageBackground source={require('../assets/img/bg_tayo.jpg')} style={{ height: 700}}>
                    <View style={{height:80,flexDirection:'row',backgroundColor:'white'}}>
                        <Left style={{ flex:1,flexDirection:'row',marginLeft:10}}>
                            <View style={{flex:3,width:50,height:50,borderWidth:3,borderColor:'orange',justifyContent:'center',alignItems:'center'}}>
                                <View >
                                    <Image source={require('../assets/img/trophy.png') } style={{width:40,height:40}}/>
                                </View>
                            </View>
                            <View style={{flex:7}}>
                                <View style={{flexDirection:'row',marginLeft:10}}>
                                    <Text style={{flex:1,color:'orange',fontFamily:'OBELIXPROB-CYR',fontWeight:'500'}}>
                                        Rank : 
                                    </Text>
                                    <Text style={{flex:1,color:'orange',fontFamily:'OBELIXPROB-CYR',fontWeight:'500'}}> 
                                        1000 
                                    </Text>
                                </View>
                                <View >
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Leaderboard')}>
                                        <View style={{backgroundColor:'orange',width:100,height:30,justifyContent:'center',marginLeft:10,alignItems:'center',borderLeftWidth:2,borderBottomWidth:5,borderRightWidth:5,borderTopWidth:2}}>
                                            <Text style={{fontFamily:'OBELIXPROB-CYR',fontWeight:'500'}}>
                                                LeaderBoard
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                        </Left>
    
                        <Right style={{flex:1,flexDirection:'row',marginRight:10}}>
                            <View style={{flex:7}}>
                            <View >
                                    <Text style={{color:'#3b5998',marginRight:10 ,fontFamily:'OBELIXPROB-CYR',fontWeight:'500',textAlign:'right',}}>
                                        Bambang
                                    </Text>
                                </View>
                                <View >
                                    <View style={{backgroundColor:'#3b5998',width:100,height:30,borderLeftWidth:2,borderBottomWidth:5,borderRightWidth:5,borderTopWidth:2,alignSelf:'flex-end',marginRight:10,flexDirection:'row',justifyContent:'center'}}>
                                        <Text style={{flex:8, fontFamily:'OBELIXPROB-CYR',fontWeight:'500',color:'white',marginLeft:10,marginTop:2}}>
                                            Connect
                                        </Text>
                                        <Image source={require('../assets/img/fb.png')} style={{flex:2,width:20,height:20,marginRight:5,marginTop:2}}/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:3,width:50,height:50,borderWidth:3,borderColor:'#3b5998',justifyContent:'center',alignItems:'center'}}>
                                <View >
                                    <Image source={require('../assets/img/profil.png') } style={{width:40,height:40}}/>
                                </View>
                            </View>
                        </Right>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={{alignItems:'center',width:80}}>
                            <Text style={{fontSize:40,color:'#363795',fontWeight:'700'}}>{this.state.combos}</Text>
                            <Text style={{fontSize:16,color:'#363795',fontWeight:'500'}}>Combos</Text>
                        </View>
                    </View>
                    <View style={{height:300,alignItems:'center',marginTop:30}} >
                        <Image  source={require('../assets/img/ic-tayo.png')} style={{width:275,height:275}}/>

                    </View>
                    <View style={{height:120,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                        
                        <TouchableOpacity onPress={()=>{this.handleClick(1)}}>
                        <View style={{backgroundColor:this.state.backgroundColor1, borderRadius:150/2, borderWidth:5,borderColor:'#f39c12',width:80,height:80,marginRight:5,marginBottom:60,justifyContent:'center',alignItems:'center'}}>
                            {/* <Image source={this.state.iconbtn1} style={{width:this.state.width1,height:this.state.height1}}/> */}
                            <Icon name='ios-arrow-back' style={{color:this.state.iconColor1,fontSize:60}}/>
                        
                        </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>{this.handleClick(2)}}> 
                            <View style={{borderRadius:150/2, borderWidth:5,borderColor:'#3498db',backgroundColor:this.state.backgroundColor2,width:80,height:80,marginRight:5,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                            {/* <Image source={require('../assets/img/up_white.png')} style={{width:60,height:60}}/> */}
                                <Icon name='ios-arrow-up' style={{color:this.state.iconColor2,fontSize:60}}/>                            
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>{this.handleClick(3)}}>
                        <View style={{borderRadius:150/2, borderWidth:5,borderColor:'#2ecc71',backgroundColor:this.state.backgroundColor3,width:80,height:80,marginRight:5,marginBottom:60,justifyContent:'center',alignItems:'center'}}>
                            {/* <Image source={require('../assets/img/right_white.png')} style={{width:80,height:80}}/> */}
                            <Icon name='ios-arrow-forward' style={{color:this.state.iconColor3,fontSize:60}}/> 
                        </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>{this.handleClick(4)}}>
                            <View style={{borderRadius:150/2, borderWidth:5,borderColor:'#e74c3c',backgroundColor:this.state.backgroundColor4,width:80,height:80,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                                {/* <Image source={require('../assets/img/down_white.png')} style={{width:60,height:60}}/> */}
                                
                                <Icon name='ios-arrow-down' style={{color:this.state.iconColor4,fontSize:60}}/> 
                            
                            </View>
                        </TouchableOpacity>
                        

                    </View>
                

                </ImageBackground>
            </Container>
        )
    }
}

export default Mainscreen

const styles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        height:100
    }
})