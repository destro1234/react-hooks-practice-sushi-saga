import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
  const [sushis, setSushis] =useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)
  
  


useEffect(() => {
  fetch(API)
  .then(r => r.json())
  .then(data => setSushis(data))
}, [])

function handleEaten(eatenSushi) {

  if ((money - eatenSushi.price) > 0) {
    let eatenSushiArray = [...plates, eatenSushi]
    setPlates(eatenSushiArray)
    setMoney(money - eatenSushi.price)
  }
  else {
    let eatenSushiArray = [...plates]
    setPlates(eatenSushiArray)
  }
  
}


  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEaten={handleEaten} money={money} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
