import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "gold" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}

      <p style={{ textAlign: "center" }}>
        {selectedStars} of{totalStars}
      </p>
    </>
  );
}

function StarsRating() {
  return (
    <div>
      <StarRating totalStars={10} />
    </div>
  );
}
export default StarsRating;
