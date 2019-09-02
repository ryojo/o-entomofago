import React from 'react';
import {SafeAreaView,TouchableOpacity,TextInput,StyleSheet,Image,Text} from 'react-native';
import Titulo from '../entomófago/titulo2.png';




export default function Login ({navigation}){
             
             botao =()=>{
              navigation.navigate('Main')   
             }
    
                 
                
                 
                


   
      

 return     <SafeAreaView style={estilo.container}>
    <Image source={Titulo} style={{alignItems:'center'}}/> 
    <TextInput style={estilo.TextInput}
    placeholder={"Seu nome"}
    placeholderTextColor={"black"}
    
 
    />
    <TouchableOpacity style={estilo.button} onPress={ this.botao}>
     <Text style={estilo.textbutton}>Entrar!</Text>   
    </TouchableOpacity>
    
    
    </SafeAreaView>



}


const estilo = StyleSheet.create({

container:{
flex:1,
backgroundColor: 'green',
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 15
    },

TextInput:{
 marginTop: 35,
    alignSelf:"stretch",
 height: 45,
 backgroundColor: "#ccc" ,
 fontSize: 12,
 fontWeight: 'bold',
 borderRadius: 3,
 borderWidth: 2,
 borderColor: "#ccc"  
},


button:{
 marginTop: 10,
 alignSelf: 'stretch',
 height:35,
 backgroundColor: "#005700",
 alignItems: 'center',
 justifyContent: 'center'

},

textbutton:{
 color: 'white',   
fontSize: 12,
fontWeight: "bold"
}


 





})



