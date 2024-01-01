import { useState } from 'react';// to use state
import './App.css';
import User from './user'; // import variable first is capital.
import User2 from './user2';
import Props from './Props';
import R5 from './R5';
function R1() {
  const [data, setdata] = useState("Manav");
  const [n1, n2] = useState(5);
  const [data2, set2data] = useState(null);
  const [data3, set3data] = useState(null);
  const [print, setprint] = useState(false);
  const [states, setstates] = useState(false);
  function UP() {
    setdata("Mani");
  }
  function UP2() {
    n2(n1 + 1);
  }
  function GD(val) {
    set2data(val.target.value);
  }
  function GD2(val) {
    set3data(val.target.value);
  }
  return ( // to return a code we <> All code </>
    <>
      <h1>Hello World in React JS</h1>
      <User />
      <User2 />
      <h2>  JS in React </h2>
      <h1>{2 + 5}</h1>
      <h2>On click in react JS</h2>
      <button onClick={apple}>Click Me</button> {/* Value is not change. */}
      <h1>{data}</h1>
      <button onClick={UP}>Click Me</button>
      <h2>{n1}</h2>
      <button onClick={UP2}>Click Me</button>
      <Props name={" Manav "} />
      <input type="text" onChange={GD} />
      <h1> Hi  {data2} How are you?</h1>
      <input type="text" onChange={GD2} />
      <br></br>
      <br></br>
      <button onClick={() => setprint(true)}>Print Data</button>
      <button onClick={() => setprint(false)}>Hide Data</button>
      <br></br>
      <br></br>
      {
        print ?
          <h1>{data3}</h1>
          : null
      }
      {
        states ?
          <h1>Manav Sharma</h1>
          : null
      }
       <button onClick={() => setstates(true)}>Show Data</button>
       <br></br>
       <button onClick={() => setstates(false)}>Hide Data</button>
       <br></br>
       <button onClick={() => setstates(!states)}>Toggle</button>
       <R5 />
    </>
  );
}

function apple() {
  var ln = "Sharma";
  alert("Hi Manav");
  alert("Manav " + ln);
}
export default R1;// To export a file
