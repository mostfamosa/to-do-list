import { useState } from 'react';
import './App.css';
import Table from './table.js';


function App() {

  var i=0;
  const [dataTable,setdataTable]=useState([]);
  const columnTable = [
    {heading:'Task'},
    {heading:'Date&Time'},
  ]

  const handlesubmit = event =>{
    event.preventDefault();
    const mytask=event.target[0].value;
    const mytime=event.target[1].value;
    setdataTable(
      current =>[...current,
      {heading:mytask,heading2:mytime,index:i},
      ]
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>

       <Table data={dataTable} column={columnTable}/>
       
       <form onSubmit={handlesubmit}>
        <input type="text" name="task" placeholder='Task :'></input>
        <input type="datetime-local" name="date" placeholder='date :'></input>
        <button type='submit' >Add</button>
       </form>

      </header>
    </div>
  );
}

export default App;
