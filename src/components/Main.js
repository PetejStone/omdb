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
        localStorage.setItem('keys',JSON.stringify(keys))
        setNominations(nominations)
        setKeys(keys)
        // setCount(count)
        
    },[nominations, props.data,keys])
    
    const handleAdd = (movie) => {
       console.log('adding index',movie.imdbID)
      const newNoms = [...nominations]
      newNoms.push(movie)
      setNominations(newNoms)
      setKeys({
          ...keys,
        [movie.imdbID]: true
      })
      //localStorage.setItem('noms',nominations)
    }

    const handleRemove = (movie,index) => {
        console.log(movie.imdbID)
      //if (nominations.length === 0) localStorage.clear()
      keys[movie.imdbID] = false
      setKeys(keys)
      const newNoms = [...nominations]
      newNoms.splice((index),1)
      setNominations(newNoms)
      
      
     
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
                      
                         <button id={index} className="nominate" disabled={keys[movie.imdbID] } onClick={() => handleAdd(movie,index)}>Nominate</button>
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
                        <button className="nominate" onClick={() => handleRemove(movie,index)}>Remove</button>
                    </div>
                    )
                }
               
            </div>
            
        </div>
    )
}

export default Main