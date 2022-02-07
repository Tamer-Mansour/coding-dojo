import React from "react";
// import Stars from "./Stars";
import StarsRating from "./StarsRating";

function RateUs() {
// console.log("2222222222222222222222222222"+currentValue)
  return (
    <div style={styles.container}>
      <h2> Ratings </h2>
      <StarsRating />
      <textarea placeholder="What's your experience?" style={styles.textarea} />
      <button style={styles.button}>Submit</button>
      {/* <h3>Your submit rate is:{currentValue} </h3> */}
    </div>
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
