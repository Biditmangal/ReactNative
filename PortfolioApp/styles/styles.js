import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontSize:36,
        marginBottom:16,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop:10,
    },
    container:{
        marginBottom: 16,
        textTransform:'uppercase',
    },
    contact:{
        flex:1,
        marginLeft: 10,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
    },
    contactHeader:{
        justifyContent:'center',
        fontSize: 30,
        fontColor: 'black',
        marginBottom: 20,
    },
    username:{
        marginTop:10,
        height: 40,
        width: '90%',
        borderWidth:1,
        borderColor: '#000',
        borderRadius:2,
        padding:10,
    },
    message:{
        marginTop:10,
        height: '30%',
        width: '90%',
        borderWidth:1,
        borderColor: '#000',
        borderRadius:2,
        padding:5,
    },
    submit:{
        marginTop:20,
        width:'45%',
        height: 40,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth:0.5,
        backgroundColor: 'cyan',
        justifyContent:'center',
        alignItems:'center',
        textTransform: 'uppercase',
    }
});
