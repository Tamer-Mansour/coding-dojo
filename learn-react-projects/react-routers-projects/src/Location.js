import { useParams } from "react-router";

const Location = (props) => {
  const { city } = useParams();

  return <h1>Welcome to {city}!</h1>;
};
export default Location;
