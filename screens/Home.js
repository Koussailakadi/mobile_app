import { Button, Text, View } from 'react-native'
import React from 'react'
import AppStyles from '../styles/style/AppStyles'
import Colors from '../styles/style/Colors'

/*
{
	"navigation": 
		{
			"addListener": [Function addListener],
			"canGoBack": [Function canGoBack],
			"dispatch": [Function dispatch], 
			"getId": [Function getId], 
			"getParent": [Function getParent], 
			"getState": [Function anonymous], 
			"goBack": [Function anonymous], 
			"isFocused": [Function isFocused], 
			"navigate": [Function anonymous], 
			"pop": [Function anonymous], 
			"popToTop": [Function anonymous], 
			"push": [Function anonymous], 
			"removeListener": [Function removeListener], 
			"replace": [Function anonymous], 
			"reset": [Function anonymous], 
			"setOptions": [Function setOptions], 
			"setParams": [Function anonymous]
		}, 
		"route": 
			{
				"key": "HOME-ttscmDArF6UeSk2AxlHnw", 
				"name": "HOME", 
				"params": undefined
			}
	}
*/
export default Home = (props) => {
	return (
	<View style={{...AppStyles.container, backgroundColor:Colors.home}}>
		<Text style={AppStyles.textHome}>Home</Text>
		<Button
			title='Portfolio'
			onPress={()=>props.navigation.navigate('Portfolio')}
		/>
	</View>
	)
}



