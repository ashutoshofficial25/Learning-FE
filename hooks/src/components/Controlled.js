// import React, { Component } from "react";

// export default class Controlled extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(e.target.value);
//     alert(this.state.email, this.state.name);
//   };

//   handleChange = (e) => {
//     if (e.target.name == "name") {
//       this.setState({
//         name: e.target.value,
//       });
//     }
//     if (e.target.name == "email") {
//       this.setState({
//         email: e.target.value,
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <label>
//             <input type="email" name="email" onChange={this.handleChange} />
//           </label>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

const Controlled = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setform((form) => ({
        ...form,
        name: e.target.value,
      }));
    }
    if (e.target.name == "email") {
      setform((form) => ({ ...form, email: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Controlled;
