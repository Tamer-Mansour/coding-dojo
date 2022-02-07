import React, { useState } from "react";
import DisplayRate from "./DisplayRate";
import RateUs from "./RateUs";

function DisplayAll({totalStars,selectedStars}) {
  const [currentRate, setCurrentRate] = useState("There are no messages");

  const YourGutTate = (newMessage) => {
    setCurrentRate(newMessage);
  };
  return (
    <>
      <RateUs totalStars={5} onNewMessage={YourGutTate} />
      <p>
        {selectedStars} of {totalStars}
      </p>
      <DisplayRate message={currentRate} />
    </>
  );
}

export default DisplayAll;
