import {Button, Text, View } from 'react-native';
import React from 'react';
import AppStyles from '../styles/style/AppStyles'
import Colors from '../styles/style/Colors'

export default Photo = (props) => {
	return (
	<View style={{...AppStyles.container, backgroundColor:Colors.photo}}>
		<Text style={AppStyles.textHome}>Photo</Text>
		<Button
			title='back Portfolio'
			onPress={()=>props.navigation.goBack()}
		/>
	</View>
	)
}


