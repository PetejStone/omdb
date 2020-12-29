import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './Main.css'
const Search = props => {
    const [title, setTitle] = useState('')
    //on submission of form

     //function to handle user input
     const handleChange = (e) => {
        setTitle(e.target.value)
        
    }
    const onSubmit = (e) => {
        e.preventDefault() //prevent page refresh
        axios
       .get(`http://www.omdbapi.com/?apikey=dbfae813&s=${title}&type=movie`) //fetch data from proxy server
       .then(res => { 
               //console.log(res)
               props.setData(res.data)
               document.querySelector('#input').value = ''// resets form  
       })
       .catch(error => {
             
            console.log(error)
            
       })
    }
    
    return (
        <form className="search" onSubmit={(e) => onSubmit(e)}>  
                <input id="input" type="text" value={title} onChange={handleChange} placeholder="search for movie" />     
                <button onClick={onSubmit} className="formButton">Search Movie</button>

            </form>
    )
}

export default Search;