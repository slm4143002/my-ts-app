import React from "react";

type Props = {
    name:string;
} 
export default function Hello(obj : Props){
    if (obj.name) {
        return <h1>hello,{obj.name}</h1>
    } else {
        return <span>Hey, stranger</span>;
    }
}
