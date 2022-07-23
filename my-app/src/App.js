import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [List, setList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  }
  const fetchData = async () => {
    const {data} = await axios.get(url: "https://api.github.com/repos/facebook/create-react-app/issues")
    
    setList(data)
  } 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
