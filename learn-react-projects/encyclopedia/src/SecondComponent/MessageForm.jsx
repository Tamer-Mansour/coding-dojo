import React, { useState } from "react";

const MessageForm = (props) => {
  const [msg, setMsg] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.onNewMessage(msg);
  };
  return (
    <form onSubmit={handelSubmit}>
      <h1>Set message</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter message"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
      ></textarea>
      <input type="submit" value="Send Message" />
    </form>
  );
};
export default MessageForm;
