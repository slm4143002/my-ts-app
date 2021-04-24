import React, { useState } from "react";

/** 書き方１
type Props = {
  onChange: (value: boolean) => any;
};
const Toggle = (obj: Props) => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState((previousState) => !previousState);
        obj.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
};
*/

/** 書き方２*/
const Toggle:React.FC<{onChange:(val:boolean)=>any}> = (props) => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState((previousState) => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
};

export default Toggle;