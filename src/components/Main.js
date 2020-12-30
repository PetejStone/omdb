import React from 'react'
import './Main.css'
import Popup from './Popup'
import {useEffect, useState} from 'react'

const Main = props => {
   const [data,setData] = useState('')
   let retrievedData = localStorage.getItem("noms"); //save user nominations in local storage
   let parsed = JSON.parse(retrievedData); // convert data back to array
   let retrievedKeys = localStorage.getItem("keys"); //store keys for disabling buttons if nominated
   let parsedKeys = JSON.parse(retrievedKeys);
   const [nominations,setNominations] = useState( parsed || [] ) //display saved nominations if applicable
   const [keys, setKeys] = useState(parsedKeys || {}) //disable buttons if applicable

   
   useEffect(()=>{
        setData(props.data.Search)
        localStorage.setItem('noms',JSON.stringify(nominations))
        localStorage.setItem('keys',JSON.stringify(keys))
        setNominations(nominations)
        setKeys(keys)
        
        //activate banner if they nominate 5 movies
        if (nominations.length === 5) {
            document.querySelector('.popup-button').click()
        }
        
    },[nominations, props.data,keys])
    
    const handleAdd = (movie) => {
      
      const newNoms = [...nominations]
      newNoms.push(movie)
      setNominations(newNoms)
      
      //use keys to disable buttons
      setKeys({
          ...keys,
        [movie.imdbID]: true
      })

 
    }

    const handleRemove = (movie,index) => {
      
   
      keys[movie.imdbID] = false // set to false to reactivate button
      setKeys(keys)
      const newNoms = [...nominations]
      newNoms.splice((index),1) //remove movie from nominations
      setNominations(newNoms)
      
   
    }
    
 
    


    return (
        <div className="main">
            <button className="popup-button" data-toggle="modal" data-target="#exampleModalCenter" style={{display:"none"}} />
            <Popup nominations={nominations} />
            <div className="results">
                <h2>Results:</h2>
                {
                    data && data.map((movie,index) => 
                    <div className="movie" key={index}>
                        <p className="title">Title: {movie.Title} ({movie.Year})</p>
                      
                         <button id={index} className="nominate" disabled={keys[movie.imdbID] } onClick={() => handleAdd(movie,index)}>
                         {keys[movie.imdbID] ? `Nominated` : `Nominate`}
                         </button>
                    </div>
                    )
                }
            </div>

            <div className="nominations">
                <h2>Nominations:</h2>

                {
                    nominations && nominations.map((movie,index) => 
                    <div className="movie" key={index}>
                        <p className="title">Title: {movie.Title} ({movie.Year})</p>
                        <button className="nominate" onClick={() => handleRemove(movie,index)}>Remove</button>
                    </div>
                    )
                }
               
            </div>
            
        </div>
    )
}

export default Main