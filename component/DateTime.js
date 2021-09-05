import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet ,TextInput,Button,ImageBackground} from 'react-native';
import moment from 'moment-timezone'

const days= ['Sunday','Monday','Tursday','Wednesday','Thursday','Friday','Saturday']
const months= ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

const WheatherItem = ({title,value,unit}) => {
	return(
		<View style={styles.wheather}>
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.title}>{value}{unit}</Text>
		</View>


		);
}

const DateTime = ({current,lat,lon,timezone}) => {
	const [date,setDate]=useState("")
	const [time,setTime]=useState("")

	useEffect(() => {
		setInterval(()=>{
			const time=new Date();
			const month=time.getMonth();
			const date=time.getDate();
			const day=time.getDay();
			const hour=time.getHours();
			const hourIn12HrFormat =hour >=13 ?hour%12:hour
			const minutes= time.getMinutes();
			const ampm=hour>=12 ? 'pm':'am'

			setTime((hourIn12HrFormat < 10? '0'+hourIn12HrFormat :hourIn12HrFormat) + ':' +(minutes <10? '0'+minutes:minutes)+''+ampm)

			setDate(days[day] + ', ' + date+' '+months[month])




		},1000);
		
	},[])

	return(
		<View style={styles.cont}>
		  <View>
		    <View>
		      <Text style={styles.heading}> {time}</Text>
		    </View>
		    <View>
		      <Text  style={styles.subheading}> {date}</Text>
		    </View>
		    <View style={styles.tnt}>
		      <WheatherItem title='humidity' value={current? current.humidity :""} unit="%"/>
		      <WheatherItem title='pressure' value={current? current.pressure :""} unit="hpa"/>
		      <WheatherItem title='sunrise' value={ current? moment.tz(current.sunrise * 1000, timezone).format('HH:mm'):""} unit="am"/>
		      <WheatherItem title='sunset' value={current? moment.tz(current.sunset * 1000, timezone).format('HH:mm') :""} unit="pm"/>
            </View>
		  </View>
		  <View style={styles.right}>
		    <Text style={styles.timezone}>{timezone}</Text>
		    <Text style={styles.latlog}>{lat}N {lon}E</Text>

		  </View>

		</View>

	);

}
export default DateTime
const styles=StyleSheet.create({
	cont:{flex:1.5,flexDirection:"row",justifyContent:"space-between",padding:15},
	heading:{fontSize:45,color:"white",fontWeight:'bold'},
	subheading:{fontSize:25,color:'#eee',fontWeight:'bold'},
	right:{textAlign:"right",marginTop:20},
	timezone:{fontSize:20,color:"white"},
	latlog:{fontSize:16,color:"white",fontWeight:'bold'},
	tnt:{backgroundColor:"#18181b99",borderRadius:10,padding:10,marginTop:10},
	wheather:{flexDirection:'row',justifyContent:"space-between"},
	title:{color:"#eee",fontWeight:'bold',fontSize:14}
	

})