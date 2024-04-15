import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
export default function Previsao() {
  const [previsaoDate, setPrevisaoDate] = useState([]);
  const [previsaoDate2, setPrevisaoDate2] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const date = await axios.get(
          "https://api.weatherbit.io/v2.0/forecast/daily",
          {
            params: {
              key: "72ca62adaaea4120a589693c9e0b744b",
              city: "salvador",
              days: 7,
              lang:'pt',
              units:'M'
            },
          }
        );
        setPrevisaoDate(date.data.data);
        setPrevisaoDate2(date.data)
      } catch {
        console.error("error api");
      }
    };
    response();
  }, []);
console.log(previsaoDate)

  return (
    <div className="containerPRev">
      {previsaoDate.map((item,index) => {
        return (
          <div  key={index}>
           
           <div><img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt="icon" /></div>
           <div><span>{item.weather.description}</span></div>
           <div><span>{item.datetime}</span></div>
          </div>
        );
      })}
    </div>
  );
}
