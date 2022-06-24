import React, {useEffect, useState} from "react";
import "./css/style.css";
const Tempapp =() => {
    const [city,setCity]= useState(null);
    const [search,setSearch]= useState("Mumbai");
    useEffect( () =>{
        const fetchApi = async () => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f252904a2eb63062a754a3f2ff316368`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };


        fetchApi();
    },[search] )

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="inputField"
                    onChange={ (event)=>{setSearch(event.target.value)} } />
                </div>

        { !city ? (
            <p>City Not Found.</p>
        ) : (
        <div>
            <div className="info">
            <h2 className="location">
                <i className="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>

            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        </div>
        )} 
    
            

 </div>
        
        </>
    )

}

export default Tempapp;
