import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/ui/Header';
import Character from './Components/Character';
import Search from "./Components/ui/Search";



const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query] )

    return (
      <div className="container">
        <Header/>
        <Search getQuery={(q) => setQuery(q) }/>
        <Character items={items} isLoading={isLoading}/>
      </div>
    );
  }
  


export default App;




