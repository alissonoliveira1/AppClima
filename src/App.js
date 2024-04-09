import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  
    const [weatherData, setWeatherData] = useState(null);

    
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://api.weatherapi.com/v1/current.json?', {
            params: {
              key: 'e24728ba2751422680c51701240704',
              q: 'salvador',
              region:'Bahia',
              name:'salvador',
              lang:'pt'
              
            }
          });
          setWeatherData(response.data)
         

           
      
        } catch (error) {
          console.error('Erro ao buscar dados de clima:', error);
        }
      };
  
      fetchData();
    }, []);

    function Tempo(){
      if(weatherData.current.condition.code === 1003){
        return(
          <div>
           
          <div><img src={weatherData.current.condition.icon}/></div>  
           <h3>{weatherData.current.condition.text}</h3>
          </div>
   
        )
      }
    }
    
console.log(weatherData)
  return (
    <div className="App">
      <h2>Informações de Clima</h2>
     <div className='box'>   
 
      
      {weatherData && (
        <div>
          <div className='jutns'><div><Tempo/></div><div className='temp'><span>{weatherData.current.temp_c}°</span></div></div>
          
          <p>Cidade: {weatherData.location.name}</p>
          
          <div>{weatherData.current.last_updated}</div>
          <div>{weatherData.current.wind_kph}</div>
          <div>{weatherData.current.chance_of_rain}</div>
          <div>{weatherData.current.uv}</div>

          
          

        </div>
      )}
 

   
    </div>
    
    </div>
 

)}

export default App;
