import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { parseDate } from "../../utils";
import {format} from "date-fns"
import {ptBR} from "date-fns/locale"
import Tempo from "../Tempo";

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
const dias = ["domingo","segunda","terca","quarta","quinta","sexta","sabado"]
const dateParsed = parseDate("2002/04/10");
const { format, parseISO } = require('date-fns');

function obterNomesDiasDaSemana(datas) {
  const nomesDiasSemana = datas.map(data => {
    const dataObj = parseISO(data.datetime);
    return format(dataObj, 'EEEE',{locale: ptBR});
  });
  return nomesDiasSemana;
}






// Exemplo de uso
const datas = previsaoDate
const nomesDiasSemana = obterNomesDiasDaSemana(datas);


console.log(format(dateParsed, "'dia' ',' dd EEEE", {locale: ptBR}))
console.log(previsaoDate)
return (
  <div className="containerPrev">
    {previsaoDate.map((item, index) => (
      <div className="div-prev" key={index}>
        <div><span className="semana">{nomesDiasSemana[index]}</span></div>
        <div><img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt="icon" /></div>
        <div><span>{item.weather.description}</span></div>
        <div><span>{item.temp}</span></div>
        <div><div><span>{item.max_temp}</span></div><div><span>{item.min_temp}</span></div></div>
        <div><span>{item.uv}</span></div>
        <div><span>{item.rh}%</span></div>
        <div><span>{item.wind_cdir_full}</span></div>
        

      </div>
    ))}
  </div>
);
}
