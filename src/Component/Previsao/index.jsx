
import { useState, useEffect } from "react"
import  axios  from "axios"

export default function Previsao(){
const [previsaoDate, setPrevisaoDate] = useState(null)

useEffect(() =>{
    const response = async () =>{
try{
    const date = await axios.get('https://api.weatherstack.com/forecast',{
        params:{
            access_key: "e24728ba2751422680c51701240704",
            query: 'salvador',
            forecast_days: 1
        }
    })
setPrevisaoDate(date.data)
}
catch{
console.error('error api')
}

    }
    response()
},[])
console.log(previsaoDate)
    return(
        <div></div>
    )
}