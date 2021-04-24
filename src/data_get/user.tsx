import { useState, useEffect } from "react";
import React from "react";
type Props = {
  id: string;
};


export default function User(props:Props) {

  type UserInfo = {
    name: string;
    age: string;
    address: string;
  };

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  async function fetchUserData(id: string) {
    const response = await fetch("/" + id);
    setUserInfo(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!userInfo) {
    return null;
  }

  return (
    <details>
      <summary>{userInfo.name}</summary>
      <strong>{userInfo.age}</strong> 岁
      <br />
      住在 {userInfo.address}
    </details>
  );
}
