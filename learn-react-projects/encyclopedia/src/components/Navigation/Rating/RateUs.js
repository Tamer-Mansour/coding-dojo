import React, { useState } from "react";
import StarsRating from "./StarsRating";

function RateUs({totalStars, onNewMessage}) {
  const [rate, setRate] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMessage(rate);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.container}>
        <h2> Ratings </h2>
        <StarsRating
        totalStars={totalStars}
          onSelect={setSelectedStars}
          selectedStars={selectedStars}
        />
        <p>
          {selectedStars} of {totalStars}
        </p>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
          onChange={(e) => {
            setRate(e.target.value);
          }}
          value={rate}
        />
        <input className="btn btn-primary" type="submit" value="Send Rate" />
      </form>
    </>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default RateUs;
