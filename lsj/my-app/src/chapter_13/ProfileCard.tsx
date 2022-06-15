import React from "react";
import Card from "./Card";

type Props = {};

function ProfileCard({}: Props) {
  return (
    <Card title="Seongjae" backgroundColor="forestGreen" color="white">
      <p>안녕하세요!</p>
      <p>저는 리액트를 사용해서 개발하고 있을걸요?</p>
    </Card>
  );
}

export default ProfileCard;
