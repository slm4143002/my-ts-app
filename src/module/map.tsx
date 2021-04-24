import React from "react";

type Obj = {
  center:{
    x:string,
    y:string;
  }
} 
export default function Map(p:Obj) {
  return <div>mockMap{p.center.x}</div>;
}