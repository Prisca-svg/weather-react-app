
import {React} from "react"; 
import axios from 'axios';


export default function Weather(props){
    return (
        function handleResponse (response){
            let apiKey = "203fa770242fcd2b9555d832a88ea567";
            let apiUrl =`https://api.shecodes.io/weather/v1/current?query={props.city}&key={apiKey}`;
            alert ('The Weather in ${response.data.name} is ${response.data.main.temp}&deg;C');
            
            axios.get(apiUrl).then(handleResponse);
        }
   ); }

