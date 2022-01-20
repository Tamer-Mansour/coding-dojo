import React from "react";

const Home = (props) => {
  const { wordOrNum, color, backgroundColor } = props;
  return (
    <div>
      {!wordOrNum ? (
        <h1> Welcome to my home page</h1>
      ) : !isNaN(wordOrNum) ? (
        <h1> Your input number is: {wordOrNum} </h1>
      ) : color || backgroundColor ? (
        <h1 style={{ color: color, backgroundColor: backgroundColor }}>
          Your input word is: {wordOrNum}
        </h1>
      ) : (
        <h1>Your input word is: {wordOrNum} </h1>
      )}
    </div>
  );
};

export default Home;
