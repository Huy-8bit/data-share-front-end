import React, {useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
