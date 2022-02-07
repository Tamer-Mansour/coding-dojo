import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  gold: "#FFD700",
  grey: "#a9a9a9",
};
function Stars(props) {
  const [currentValue, setCurrentValue] = useState(0);
  console.log(currentValue)
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.stars}>
      {stars.map((_, index) => {
        return (
          <>
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || currentValue) > index ? colors.gold : colors.grey
            }
            style={{
              marginRight: 10,
              cursor: "pointer",
            }}
          />
          </>
        );
      })}
    </div>
  );
}

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Stars;
