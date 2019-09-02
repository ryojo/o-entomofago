import React from 'react';
import {SafeAreaView,Text,TextInput,Touchable,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import Icon from '../entomófago/icon.png';
import titulo from '../entomófago/titulo.png';
import Formigas from '../entomófago/formigas.png';
function Texto (props){
return <Text style={cor.cortextp}>{props.texto} </Text>
}



const FaleConosco =()=>

 <SafeAreaView style={cor.container}>
<SafeAreaView style={cor.containerIcon}>
<TouchableOpacity onPress={this.Acao}><Image source={Icon} style={cor.icon}/></TouchableOpacity>
<Image source={titulo} style={cor.titulo} />

 </SafeAreaView>
<ScrollView>
<Texto texto=" Receba Noticias, 
  receitas especiais ou  
  tire suas Duvidas "/>

<SafeAreaView style={cor.containerCaixa}><TextInput style={cor.caixaTexto}
placeholder="Nome"
placeholderTextColor="black"
//onChangeText={}
/>
<TextInput 
placeholder="Email"
placeholderTextColor="black"
style={cor.caixaTexto}
//onChangeText={}
/>
<TextInput
style={cor.caixacomentario}


/>

</SafeAreaView>


  </ScrollView>



 </SafeAreaView>




 export default FaleConosco;

  
const cor = StyleSheet.create({

container:{
 backgroundColor: '#005700',
 flex:1,
alignItems: 'center',


},

cortextp:{
 color: 'white',
 fontWeight: 'bold',
 fontSize: 30,
 marginTop: 10
},



containerIcon:{
backgroundColor: 'green',
width: 360,
    flexDirection: 'row',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'flex-start'
  },

  icon:{
    width:50,
    height: 50,
    marginHorizontal:-20
    },

    titulo:{
        width:120,
        height:50 ,
        marginHorizontal: 70 
        },


        caixaTexto:{
marginTop: 30,
alignSelf: 'stretch',
paddingHorizontal:15, 
height: 45,
backgroundColor: 'white',
borderRadius: 4,
borderWidth: 2,
borderColor: '#808080'     
},

containerCaixa:{
 paddingHorizontal: 15   
},

caixacomentario:{
  marginTop: 30,
  alignSelf: 'stretch',
  paddingHorizontal:15, 
  height: 200,
  backgroundColor: 'white',
  borderRadius: 4,
  borderWidth: 2,
  borderColor: '#808080'      
}


})