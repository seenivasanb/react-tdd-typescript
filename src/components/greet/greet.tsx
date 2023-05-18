import { GreetProps } from "./greet.type";

export const Greet = (props: GreetProps) => {
  return <div>Greet {props.name} </div>;
};
