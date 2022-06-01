import { useCustom } from "./customHook";

const Forward = () => {
  const count = useCustom(true);

  return <div>{count}</div>;
};
export default Forward;
