import React, { useState } from "react";
import DisplayRate from "./DisplayRate";
import RateUs from "./RateUs";

function DisplayAll({totalStars,selectedStars}) {
  const [currentRate, setCurrentRate] = useState("There are no messages or rate");

  const YourGutTate = (newMessage) => {
    setCurrentRate(newMessage);
  };
  return (
    <>
      <RateUs totalStars={10} onNewMessage={YourGutTate} />

      <DisplayRate message={currentRate} />
    </>
  );
}

export default DisplayAll;
