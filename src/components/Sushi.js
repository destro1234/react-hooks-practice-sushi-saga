import React, { useState} from "react";

function Sushi({sushi, handleEaten, money}) {

  const [eaten, setEaten] = useState(false)

  
  function handlePlateClick(event) {
    console.log(eaten)
    if (eaten === false && money - sushi.price > 0) {
      handleEaten(sushi)
      setEaten(true)
    }
  }
  


  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick} >
        {/* Tell me if this sushi has been eaten! */
          eaten ? "Yummy!" : null
        }
        { eaten ? null : (
          <img
            src={sushi.img_url}
            alt={`${sushi.name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
