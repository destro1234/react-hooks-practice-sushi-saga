import React, {useState} from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({sushis, handleEaten, money}) {

  const [sushiIndex, setSushiIndex] = useState(0)
  const [sushiIndex2, setSushiIndex2] = useState(4)


  function handleSlice() {
  

    setSushiIndex(sushiIndex + 4)
    setSushiIndex2(sushiIndex2 + 4)
  }

  let newSushiArray = sushis.slice(sushiIndex, sushiIndex2)



  return (
    <div className="belt">
      {
        newSushiArray.map(s => <Sushi key={s.id} sushi={s} handleEaten={handleEaten} money={money}/>) 
      }
      <MoreButton onClickMore={handleSlice}/>
    </div>
  );
}

export default SushiContainer;
