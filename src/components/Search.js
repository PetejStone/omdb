import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
const Search = props => {
    const [title, setTitle] = useState('die+hard')
    //on submission of form

     //function to handle user input
     const handleChange = (e) => {
        setTitle(e.target.value)
        
    }
    const onSubmit = (e) => {

        
       
        e.preventDefault() //prevent page refresh
        axios
       .get(`http://www.omdbapi.com/?apikey=dbfae813&t=${title}`) //fetch data from proxy server
       .then(res => { 
               console.log(res)
               document.querySelector('#input').value = ''// resets form
           
       })

       .catch(error => {
             
            console.log(error)
            
       })
    }
    
    return (
        <form onSubmit={(e) => onSubmit(e)}>  
                <input id="input" type="text" value={title} onChange={handleChange} type="title" placeholder="search for movie" />
                
               
                
                
                <button onClick={onSubmit} className="formButton">Search Movie</button>

            </form>
    )
}

export default Search;