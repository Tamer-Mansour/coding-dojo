import axios from 'axios';
import React,{useState} from 'react';

const Api = () => {
    const [data, setData] = useState("")
    const [select, setSelect]= useState("")
    const [id, setId]= useState("")
    const api = (e) =>{
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${select}/${id}`)
        .then(res=>{
            console.log(res)
            setData(res.data.name)
        })

    }
  return <div>
      <form onSubmit={api}>
          <input type='text' name='id' onChange={e => setId(e.target.value)}/>
          <select name='select' onChange={e => setSelect(e.target.value)}>
              <option>
                  people
              </option>
              <option>
                  planets
              </option>
          </select>
          <input type='submit' value='fetch'/>
      </form>
      {data}
  </div>;
};

export default Api;
