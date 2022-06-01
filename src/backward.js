import { useCustom } from "./customHook";
const Backward = () => {
  const count = useCustom();
  return <div>{count}</div>;
};
export default Backward;
