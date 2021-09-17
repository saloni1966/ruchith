import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      text: "",
      displayText : ''
    };
  }
  render() {
    return (
      <View>
        <Header
          backgroundColor={"red"}
          centerComponent={{
            text: "Monkey Chunky",
            style: {
              color: "#fff",
              fontSize: 30,
              fontFamily: "Avenir",
              fontWeight: "bold",
            },
          }}
        />
        <TextInput
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
          style = {styles.inputBox}
          placeholder= "Enter any word"
        />

        <TouchableOpacity style ={styles.button} onPress={()=>{
          this.setState({
            displayText: this.state.text
          })
        }}>
          <Text style = {styles.buttonText}>Go</Text>
        </TouchableOpacity>

        <Text style={styles.displaytext}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox:{
    borderWidth : 4,
    width :'80%',
    alignSelf:'center',
    height: 50,
    marginTop : 200,
    alignItems: 'center',
    justifyContent:'center',
    textAlign:'center'
  },
  button : {
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'black',
    width : '30%',
    height:'10%',
    marginTop:'15%',

  },
  buttonText:{
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5
  },
  displaytext:{
    alignItems: 'center',
    alignSelf:'center',
    marginTop:40,
    fontSize: 40,
    fontWeight:'bold'
  }
});
