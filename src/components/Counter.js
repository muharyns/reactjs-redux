import { useSelector } from "react-redux";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);

  return <p>{counter.counter}</p>;
};
