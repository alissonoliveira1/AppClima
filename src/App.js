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
              language:'pt'
              
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
      if(weatherData.current.condition.code === 1009){
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
     <div className='box'>   
  
     <div>
      <h2>Informações de Clima</h2>
      {weatherData && (
        <div>
          <p>Cidade: {weatherData.location.name}</p>
          <h1>{weatherData.current.temp_c}°</h1>
          
          <Tempo/>

        </div>
      )}
    </div>

   
    </div>
    
    </div>
 

)}

export default App;
