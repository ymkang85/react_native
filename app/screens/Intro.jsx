import React from 'react'
import { Image,
         View , 
         Text, 
         TextInput, 
         StatusBar, 
         StyleSheet,
         Dimensions } from 'react-native'
import colors from '../misc/colors'
import Memo from '../../assets/img/memo.png'

const Intro = () => {
  return (
    <>
        <StatusBar style="hidden" />
        <View style={styles.container}>
            <Image source={Memo} style={styles.logo} />
            <Text style={styles.inputTitle}>이름을 입력하세요.</Text>
            <TextInput 
               placeholder="이름"
               style={styles.textInput}
            />     
            
        </View>
    </>
  )
}
const width = Dimensions.get('window').width - 100;
console.log(width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput:{
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width,
        height:50,
        borderRadius: 10,
        paddingLeft:20,
        fontSize:25,
        marginTop:10,
        marginBottom:20 
    },
    inputTitle: {
       alignSelf: 'flex-start',
       paddingLeft:50,
       fontSize: 20,
       opacity:0.5
    },
    logo : { 
       width:100,
       height:100,
       position:'absolute' ,
       top: 100,
       left: width/2
    }
})

export default Intro