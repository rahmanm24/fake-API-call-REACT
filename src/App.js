import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('comments');
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
}

export default App;
