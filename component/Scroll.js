import React from 'react';
import {View,Text,StyleSheet ,TextInput,Button,ScrollView, Image} from 'react-native';
import moment from 'moment-timezone'
import Future from './Future'

const Scroll=({weatherData})=>{
	return(
		<ScrollView style={styles.scrollview} horizontal={true}>
		<CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
		<Future data={weatherData}/>

		</ScrollView>
	);
}
const CurrentTempEl=({data})=>{
	if(data && data.weather){
		const img={uri:'http://openweathermap.org/img/wn/'+ data.weather[0].icon+'@4x.png'}
	return(
		<View style={styles.currenttempcont}>
		   <Image source={img} style={styles.image}/>
		   <View style={styles.othercont}>
		     <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
		     <Text style={styles.temp}>Night - {data.temp.night}&#176;c</Text>
		     <Text style={styles.temp}>Day - {data.temp.day}&#176;c</Text>
            </View>

		</View>
	)


	}else{
		return(
			<View>

			</View>
			)
	}
	

}

export default Scroll
const styles=StyleSheet.create({
	scrollview:{flex:0.4,backgroundColor:'#18181bcc',padding:30},
	image:{width:150,height:150},
	currenttempcont:{flexDirection:"row",backgroundColor:"#00000033", padding:15,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#eee",borderWidth:1},
	day:{fontSize:20,color:"white",backgroundColor:"#3c3c44",padding:7,textAlign:"center",borderRadius:50,fontWeight:"200",marginBottom:15},
	temp:{fontSize:16,color:"white",fontWeight:"100",textAlign:"center"},
	othercont:{paddingRight:40}

})