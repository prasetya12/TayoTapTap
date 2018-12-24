import  React,{Component} from 'react'
import {List,Container, Left, Body, ListItem, Content, Right,Icon} from 'native-base'
import {Text,View,ImageBackground,Image} from 'react-native'

import axios from 'axios'



class Leaderboard extends Component{

    constructor(props){
        super(props)
        this.state={
            data :[]
        }

    }

    async componentDidMount(){
        await axios.get('http://192.168.0.8:3333/api/v1/players')
        .then(res=>{
            const data = res.data
            // console.warn(data)
            this.setState({data})

        }).catch((error)=>{
            console.warn('api call error')
            console.warn(error.message)
        })
    }

    render(){

        // alert(this.state.data)
        return(

        <Container>
            <Content >
                <View style={{backgroundColor:'purple',flex:1,width:'90%',alignSelf:'center',height:230,marginTop:10}}>
                <ImageBackground source={require('../assets/img/bg_crypto.png')} style={{height:230,width:'100%'}}>
                     <View style={{backgroundColor: 'rgba(41, 128, 185,0.9)',flex:1,alignItems:'center'}} >
                         <View style={{flexDirection:'row',marginTop:7}}>
                             <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>My Combos: </Text>
                             <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>100</Text>
                         </View>
                        
                         <View style={{borderRadius:150/2,width:90,height:90,backgroundColor:'white',borderWidth:4,borderColor:'#3b5998',justifyContent:'center',alignItems:'center',marginTop:10}}>
                             <Image source={require('../assets/img/profil.png')} style={{width:70,height:70}}/>
                         </View>
                         <View style={{flexDirection:'row',backgroundColor:'#363795',padding:5,marginTop:10}}>
                             <View>
                                 <Image source={require('../assets/img/fb.png')} style={{width:25,height:25}}/>
                             </View>
                             <View style={{justifyContent:'center',padding:5}}>
                                 <Text style={{color:'white',fontWeight:'300'}}>
                                     Connect to Claim Reward
                                 </Text>
                             </View> 
                         </View>
                         <View>
                                 <Text style={{color:'white',fontWeight:'500',fontSize:25,marginTop:5}}>
                                     #12112
                                 </Text>
                             </View>
                     </View>
                </ImageBackground>
                </View>
                <View style={{width:'90%',alignSelf:'center'}}>

                {this.state.data.map((data,key)=>(
                    <View style={{backgroundColor:'#005c97',padding:5,flexDirection:'row'}}key={key}>
                    <Left style={{flex:3}}>
                    <View style={{borderRadius:150/2,width:50,height:50,backgroundColor:'white',borderWidth:4,borderColor:'#3b5998',justifyContent:'center',alignItems:'center',marginTop:10}}>
                         <Image source={require('../assets/img/profil.png')} style={{width:30,height:30}}/>
                     </View>
                    </Left>
                    <Body style={{flex:8}} >
                        <Text style={{color:'white',textAlign:'left',alignSelf:'flex-start',marginLeft:10,fontWeight:'500'}}>
                            {data.name}
                        </Text>
                    </Body>
                    <Right style={{flex:5,alignItems:'flex-start',marginRight:5,flexDirection:'row',justifyContent:'center'}}>
                    <Icon name='md-trophy' style={{fontSize: 30, color: '#FFD700'}}/>
                    <Text style={{marginLeft:10,color:'white',fontSize:20,fontWeight:'500'}}>{data.score}</Text>
                    </Right>
                </View>
                ))}
                    {/* <View style={{backgroundColor:'#005c97',padding:5,flexDirection:'row'}}>
                        <Left style={{flex:3}}>
                        <View style={{borderRadius:150/2,width:50,height:50,backgroundColor:'white',borderWidth:4,borderColor:'#3b5998',justifyContent:'center',alignItems:'center',marginTop:10}}>
                             <Image source={require('../assets/img/profil.png')} style={{width:30,height:30}}/>
                         </View>
                        </Left>
                        <Body style={{flex:8}} >
                            <Text style={{color:'white',textAlign:'left',alignSelf:'flex-start',marginLeft:10,fontWeight:'500'}}>
                                Bambang
                            </Text>
                        </Body>
                        <Right style={{flex:5,alignItems:'flex-start',marginRight:5,flexDirection:'row',justifyContent:'center'}}>
                        <Icon name='md-trophy' style={{fontSize: 30, color: '#FFD700'}}/>
                        <Text style={{marginLeft:10,color:'white',fontSize:20,fontWeight:'500'}}>#1</Text>
                        </Right>
                    </View>
                    <View style={{backgroundColor:'#363795',padding:5,flexDirection:'row'}}>
                        <Left style={{flex:3}}>
                        <View style={{borderRadius:150/2,width:50,height:50,backgroundColor:'white',borderWidth:4,borderColor:'#3b5998',justifyContent:'center',alignItems:'center',marginTop:10}}>
                             <Image source={require('../assets/img/profil.png')} style={{width:30,height:30}}/>
                         </View>
                        </Left>
                        <Body style={{flex:8}} >
                            <Text style={{color:'white',textAlign:'left',alignSelf:'flex-start',marginLeft:10,fontWeight:'500'}}>
                                Supri
                            </Text>
                        </Body>
                        <Right style={{flex:5,alignItems:'flex-start',marginRight:5,flexDirection:'row',justifyContent:'center'}}>
                        <Icon name='md-trophy' style={{fontSize: 30,color:'#CCCCCC'}}/>
                        <Text style={{marginLeft:10,color:'white',fontSize:20,fontWeight:'500'}}>#2</Text>
                        </Right>
                    </View>
                    <View style={{backgroundColor:'#005c97',padding:5,flexDirection:'row'}}>
                        <Left style={{flex:3}}>
                        <View style={{borderRadius:150/2,width:50,height:50,backgroundColor:'white',borderWidth:4,borderColor:'#3b5998',justifyContent:'center',alignItems:'center',marginTop:10}}>
                             <Image source={require('../assets/img/profil.png')} style={{width:30,height:30}}/>
                         </View>
                        </Left>
                        <Body style={{flex:8}} >
                            <Text style={{color:'white',textAlign:'left',alignSelf:'flex-start',marginLeft:10,fontWeight:'500'}}>
                                Black
                            </Text>
                        </Body>
                        <Right style={{flex:5,alignItems:'flex-start',marginRight:5,flexDirection:'row',justifyContent:'center'}}>
                        <Icon name='md-trophy' style={{fontSize: 30,color:'#CD7F32'}}/>
                        <Text style={{marginLeft:10,color:'white',fontSize:20,fontWeight:'500'}}>#3</Text>
                        </Right>
                    </View> */}
                </View>
            </Content>
        </Container>
        )
    }
}

export default Leaderboard

