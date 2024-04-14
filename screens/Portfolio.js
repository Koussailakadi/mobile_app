import {Button, Text, View } from 'react-native';
import React from 'react';
import AppStyles from '../styles/style/AppStyles';
import Colors from '../styles/style/Colors'

export default Portfolio = (props) => {
	return (
	<View style={{...AppStyles.container,backgroundColor:Colors.portfolio}}>
		<Text style={AppStyles.textHome}>Portfolio</Text>
		<Button
			title='vers Photo'
			onPress={()=>props.navigation.replace('Photo')}
		/>
	</View>
	)
}


