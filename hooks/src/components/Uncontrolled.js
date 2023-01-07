// import React, { Component } from "react";

// export default class NameFormUnconrtolled extends Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = React.createRef();
//     this.labelRef = React.createRef();
//   }

//   handleSubmit = (e) => {
//     //arrow does not have their own this
//     e.preventDefault();
//     alert(`myname is ${this.inputRef.current.value}`);
//   };

//   render() {
//     console.log("log:", this.inputRef);

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label ref={this.labelRef}>
//           <input ref={this.inputRef} id="input" name="input" type="text" />
//         </label>

//         <button type="submit">submit</button>
//       </form>
//     );
//   }
// }

//uncontrolled component

import React, { useRef } from "react";

const NameFormUnconrtolled = () => {
  const inputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`myname is ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input ref={inputRef} id="input" name="input" type="text" />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NameFormUnconrtolled;
