import React, { Component } from 'react';
import user from './user.svg';
import order from './order.svg';
import edit from './edit.svg';
import money from './money.svg';
import help from './help.svg';
import avatar from './avatar.jpg';
import logout from './logout.svg';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';

export default class ProfileView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: order,  title:"Orders"},
         {image: user,   title:"Address"},
         {image: money,  title:"Payment Gateways"},
         {image: edit,   title:"Edit"},
         {image: help,   title:"HELP!"},
         {image: logout, title:"Logout"},
      ]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: avatar}}/>
                <Text style={styles.username}>Name</Text>
                <Text style={styles.name1}>Phone-Email</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.icon} source={{uri: user.image}}/>
                      <Text style={styles.title}>{user.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#000000",
    marginBottom:10,
  },
  icon:{
    width: 50,
    height: 50,
  },
  title:{
    fontSize:18,
    color:"#00BFFF",
    marginLeft:10,
    marignTop:10,
    alignSelf: 'center'
  },
  btn:{
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor :"#E6E6FA",
  },
  box: {
    padding:10,
    marginBottom:6,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#000000",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  name1:{
    color:"blue",
    marginTop: 10,
  }
});
