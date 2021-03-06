import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./testReducer";

function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  console.log(data);
  return (
    <>
      <h1>Testing</h1>
      <h3>The data is : {data} </h3>
      <Button
        onClick={() => dispatch({ type: INCREMENT_COUNTER })}
        content="Increment"
        color="green"
      />

      <Button
        onClick={() => dispatch({ type: DECREMENT_COUNTER })}
        content="Decrement"
        color="red"
      />
    </>
  );
}

export default Sandbox;
