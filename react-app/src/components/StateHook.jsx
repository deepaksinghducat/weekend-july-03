import React from "react";
import { useState } from "react";

function StateHook() {
  const [name, setName] = useState('');

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </form>
      <div>{name}</div>
    </div>
  );
}

export default StateHook;
