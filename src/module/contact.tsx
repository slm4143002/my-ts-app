import React from "react";
import Map from "./map";

type Props = {
  name:string,
  email:string,
  site:string,
  center:{x:string,y:string}
}
export default function Contact(props:Props) {
  return (
    <div>
      <address>
        連絡 {props.name}，{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        また <a data-testid="site" href={props.site}>
          webサイト
        </a>。
      </address>
      <Map center={props.center} />
    </div>
  );
}