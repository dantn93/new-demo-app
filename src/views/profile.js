import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

export default Profile = ({ navigation }) => {
  const info = useSelector((state) => state.personalInfo);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ height: '8%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ height: '100%', aspectRatio: 1.7, alignItems: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Image source={require('../images/backbutton.png')} resizeMode="stretch" />
          <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 10 }}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Profile Screen</Text>
        <Text>EMAIL: {info.email}</Text>
        <Text>SCORE: {info.score}</Text>
        <Text>ID: {info.id}</Text>
        <Text>ADDRESS: {info.address}</Text>
      </View>
    </SafeAreaView>
  );
}