import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([])
  
  useEffect(()=>{
    //get api code....
    const url = "https://jsonplaceholder.typicode.com/comments"
    fetch(url)
    .then(response =>response.json()).then(json=>{
      console.log("jsonnnn", json)
      setData(json)
    }).catch(e=>{
      console.log("e",e)
    })
  },[])

    // post Api impliment...
  const postPutEvent=()=>{
    const data ={
      name:'Gurkirat',
      mobile:"778778778",
      designation:"developer",
      pin:'7799'
    }
    const url = "https://jsonplaceholder.typicode.com/comments"
    fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":'application/json',
        "Access-Control-Allow-Origin" :'*'
      },
      body:JSON.stringify(data)
    })
    .then(response => {
      console.log('response', response)
      if(response.status == 200){
        alert("Success") 
      }
    }).catch(e=>{
      console.log("e",e)
    })
  }

  return (
    <div className="App">
      {
        data.map(item =>{
          return(
            <div>{item.email}</div>
          )
        })
      }
      <button onClick={postPutEvent}>
        Submit
      </button>
    </div>
  );
}

export default App;
