import React ,{useState,useEffect} from 'react';
import {View,Text,StyleSheet ,TextInput,Button,ImageBackground} from 'react-native';
import DateTime from './component/DateTime'
import Scroll from './component/Scroll'
const API_KEY ='bdd9f05e378729c9892f276a6c8a9160';

const img=require(`./assets/image.png`)

let App=()=>{
	const[data,setData]=useState({})

	useEffect(()=>{
		navigator.geolocation.getCurrentPosition((success) => {
			let {latitude,longitude}= success.coords;
			fetchDatafromApi(latitude,longitude)
		},(err)=>{
			if(err){
				fetchDatafromApi("40.7128","-74.0060")
			}
		})
	},[])

	const fetchDatafromApi =( latitude,longitude)=>{
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&
			lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}
			`).then(res=>res.json()).then(data =>{
				console.log(data)
				setData(data)
				
			})

	}
	
	return(
		<View style={styles.cont}>
		<ImageBackground source={img} style={styles.img}>
		<DateTime  timezone={data.timezone} current={data.current} lat={data.lat} lon={data.lon}/>
		<Scroll weatherData={data.daily}/>
		</ImageBackground>

		</View>
	);

}
export default App;
 const styles=StyleSheet.create({
 	img:{flex:1,resizeMode:"cover" ,justifyContent:"center"},
 	cont:{flex:1}
	
})