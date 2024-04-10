import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Tempo() {
  const [tempoDate, setTempoDate] = useState(null);

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?",
          {
            params: {
              key: "e24728ba2751422680c51701240704",
              q: "salvador",
              region: "Bahia",
              name: "salvador",
              lang: "pt",
            },
          }
        );

        setTempoDate(response.data);
      } catch {
        console.error('Error Api')
      }
    };
    Data();
  }, []);

return(
    <div>
        {tempoDate && (
        <div>
             <div className="temp">
             <div className="div-icon"><img src={tempoDate.current.condition.icon}/></div>
                <div><span>{tempoDate.current.temp_c}°</span></div>
              </div>
                <div className="texto">{tempoDate.current.condition.text}</div>
            
            
          
         
          <div><span>Velocidade do vento: </span><span>{tempoDate.current.wind_kph}kpm</span></div>
            
            <div><span>{tempoDate.current.chance_of_rain}</span></div>
           <div> <span>UV: </span><span>{tempoDate.current.weather_icons}</span></div>
           <div><span>Ultima atualização: </span><span>{tempoDate.current.last_updated}</span></div>
        </div>
        )}
    </div>
)

}
