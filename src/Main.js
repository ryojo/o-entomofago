import React from 'react';
import Slideshow from 'react-native-image-slider-show';
import {View,Text,ScrollView,StyleSheet,Image,StatusBar,SafeAreaView,TouchableOpacity} from 'react-native';
import jennifer1 from '../entomófago/jennifer1.gif'
import titulo from '../entomófago/titulo.png';
import Joao from '../entomófago/joao.png';
import Joao1 from '../entomófago/joao1.png';
import Post1 from '../entomófago/post1.png';
import Post2 from '../entomófago/post2.png';
import Icon from '../entomófago/icon.png';
import Menu from './Menu';
import { createDrawerNavigator } from 'react-navigation';

export default class Main extends React.Component{
 

  Postagem(props){
    return <View style={estilo.containertext}>
      <Text style={estilo.texto}>
      {props.texto} </Text>
  <View style={estilo.containerPostagem}><Image  style={estilo.Postagem}source={Post1}/>
  <Image source={Post2} style={estilo.Postagem}/></View>
  
  </View>
  }

   

 
  render(){


return (



<SafeAreaView style={estilo.container}>
<StatusBar backgroundColor='#005700' barStyle="light-content"/>

<SafeAreaView style={estilo.containerIcon}>
<TouchableOpacity onPress={this.Acao}><Image source={Icon} style={estilo.icon}/></TouchableOpacity>
<Image source={titulo} style={estilo.titulo} />

 </SafeAreaView>
<ScrollView style={estilo.scroo}>

<Image source={jennifer1} style={estilo.gif}/> 
<View style={estilo.barra}/>
<Slideshow
dataSource={[
{url: Joao},
{url: Joao1}




]}




/>
<View style={estilo.barra}/>
<this.Postagem texto={"Postagem "} />
<View style={estilo.barra}/>




</ScrollView>

</SafeAreaView>




);


 }   
}



const estilo = StyleSheet.create({

container:{
   flex:1,
 
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'green',

},

gif:{
height:355,
width:360,
borderRadius: 2
},

titulo:{
width:120,
height:50 ,
marginHorizontal: 70 
},

bar:{

backgroundColor:'green'
},

barra:{
backgroundColor: 'white',
width: 360,
height: 5,

},

texto:{
color: 'white',
fontWeight: 'bold',
fontSize: 30
},

containertext:{
marginTop: 15,
  alignItems: 'center',
justifyContent: 'center' ,

},

Postagem:{

  width: 301,
 height: 200 ,
 marginTop:15,
 paddingVertical: 15,
borderRadius: 2,
borderWidth: 2,
borderColor: 'white'
},



containerPostagem:{
marginTop: 15,
  backgroundColor: '#005700',
flex:1 ,
width:360,
alignItems: 'center',
borderRadius:2
},


containerIcon:{

  flexDirection: 'row',
marginTop: 10,
justifyContent: 'center',
alignItems: 'flex-start'



},

icon:{
width:50,
height: 50,
marginHorizontal:-20
}


    
});