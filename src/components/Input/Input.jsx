import React, { useEffect, useRef } from "react";
import { Input } from "antd";

const { TextArea } = Input;

export default function CommentInput() {
  const ref = useRef();
  useEffect(() => ref.current.focus());

  return (
    <>
      <TextArea row={1} ref={ref} />
    </>
  );
}
