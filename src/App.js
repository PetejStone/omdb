
import './App.css';
import Main from './components/Main'
import Search from './components/Search'
import {useEffect, useState} from 'react'
function App() {
  const [data,setData] = useState('')
  
  useEffect(()=> {
  
  },[setData])

    return (
      <div className="App">
      
        <Search className="search" setData={setData}/>
        <Main data={data}/>
      </div>
    );
}

export default App;
