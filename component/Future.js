import React from 'react';
import {View,Text,StyleSheet ,TextInput,Button,ScrollView, Image} from 'react-native';
import moment from 'moment-timezone'

const Future=({data})=>{
	return(
		<View style={{flexDirection:"row"}}>
		   {
		   	data && data.length > 0 ?

		   	data.map((data,idx) =>(
		   		idx !==0  && <FutureItem  key={idx} forcastItem={data}/>
		   		
		   		))

		   		:

		   		<View/> 
		   }
		  
		   
		  
		  
		</View>
	);
}

const FutureItem=({forcastItem})=>{
	const img={uri:'http://openweathermap.org/img/wn/'+forcastItem.weather[0].icon+'@2x.png'}

	return(
	    <View  style={styles.futurecont}>
	      <Text style={styles.day}>{moment(forcastItem.dt * 1000).format('ddd')}</Text>
	      <Image source={img} style={styles.image}/>
	      <Text style={styles.temp}>Night - {forcastItem.temp.night}&#176;c</Text>
	      <Text style={styles.temp}>Day - {forcastItem.temp.day}&#176;c</Text>

	    </View>
	);
}
export default Future
const styles= StyleSheet.create({
	image:{width:100,height:100},
	futurecont:{ justifyContent:'center',backgroundColor:"#00000033",borderRadius:10,borderColor:"#eee",borderWidth:1,padding:20,marginLeft:10},
	day:{fontSize:20,color:"white",backgroundColor:"#3c3c44",padding:10,textAlign:"center",borderRadius:50,fontWeight:"200",marginBottom:15},
	temp:{fontSize:14,color:"white",fontWeight:"100",textAlign:"center"},


})
