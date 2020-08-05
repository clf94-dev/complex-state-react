import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lName: ""
  });

  function fNameChanged(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={fNameChanged}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={fNameChanged}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
