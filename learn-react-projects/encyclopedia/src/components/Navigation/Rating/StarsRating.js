import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "gold" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5, onSelect, selectedStars }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onSelect(i + 1)}
        />
      ))}
    </>
  );
}

function StarsRating({totalStars, onSelect, selectedStars }) {
  return (
    <div>
      <StarRating totalStars={totalStars} onSelect={onSelect} selectedStars={selectedStars} />
    </div>
  );
}
export default StarsRating;
