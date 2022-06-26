import React, { useState } from "react";

type Props = {};

function SignUp({}: Props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: any) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        이름:
        <input id="name" type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label htmlFor="">
        성별:
        <select name="" id="" value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
