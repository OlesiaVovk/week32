import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
//import CommentInput from "../Input/Input";
import "./Chat.scss";
import { Input } from "antd";

const { TextArea } = Input;

export default function Chat(props) {
  const [text, setText] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  const ref = useRef();
  useEffect(() => ref.current.focus());

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    let newComment = text;
    console.log(newComment);
    setCommentArr([newComment, ...commentArr]);
    setText("");
  };

  const array = commentArr.map((comment, index) => (
    <li className={index === 0 ? "new" : "key"} key={index.toString()}>
      {comment}
    </li>
  ));

  return (
    <div className="chat">
      <h3>Чат</h3>
      <ul>{array}</ul>
      <TextArea row={1} ref={ref} onChange={handleChange} value={text} />
      <Button onClick={handleClick}>Отправить</Button>
    </div>
  );
}
