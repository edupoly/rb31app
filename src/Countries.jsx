import React from 'react'
import axios from 'axios'
function Countries() {
    var [countries,setCountries] = React.useState([]);

    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries([...res.data])
        })
    },[])
    React.useEffect(()=>{
        console.log("HIHIHI")
    })
  return (
    <div className='mybox'>
        <h1>Countries</h1>
        {
            countries.map((c)=>{
                return <li>{c.name.common}</li>
            })
        }
    </div>
  )
}

export default Countries