import React from 'react'
import './Main.css'

import {useEffect, useState} from 'react'
const Main = props => {
   const [data,setData] = useState('')
   let retrievedData = localStorage.getItem("noms");
   let parsed = JSON.parse(retrievedData);
   let retrievedKeys = localStorage.getItem("keys");
   let parsedKeys = JSON.parse(retrievedKeys);
   const [nominations,setNominations] = useState( parsed || [] )
   const [keys, setKeys] = useState(parsedKeys || {})

   
   useEffect(()=>{
        setData(props.data.Search)
        localStorage.setItem('noms',JSON.stringify(nominations))
        localStorage.setItem('keys', JSON.stringify(keys))
        setNominations(nominations)
        setKeys(keys)
        // setCount(count)
        
    },[nominations, props.data,keys])
    
    const handleClick = (movie,index) => {
        console.log(movie)
      const newNoms = [...nominations]
      newNoms.push(movie)
      setNominations(newNoms)
      setKeys({
        [index]: true
      })
      //localStorage.setItem('noms',nominations)
    }


    return (
        <div className="main">
            <div className="results">
                <h2>Results:</h2>
                {
                    data && data.map((movie,index) => 
                    <div className="movie" key={index}>
                        <h4 className="title">Title: {movie.Title} ({movie.Year})</h4>
                         {console.log('keys',keys)}
                         <button id={index} className="nominate" disabled={keys[index] } onClick={() => handleClick(movie,index)}>Nominate</button>
                    </div>
                    )
                }
            </div>

            <div className="nominations">
                <h2>Nominations:</h2>

                {
                    nominations && nominations.map((movie,index) => 
                    <div className="movie" key={index}>
                        <h4 className="title">Title: {movie.Title} ({movie.Year})</h4>
                        <button className="nominate" onClick={() => handleClick(movie)}>Remove</button>
                    </div>
                    )
                }
               
            </div>
            
        </div>
    )
}

export default Main