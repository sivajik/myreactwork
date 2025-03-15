import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  render() {
    return (
      <div>
        <h1>About class componenets...</h1>
        {/* <User name={"Test123456"} /> */}
        <UserClass name={"sivajik"} location={"uk class"} />
      </div>
    );
  }
}

// const About1 = () => {
//   return (
//     <div>
//       <h1>About us...</h1>
//       {/* <User name={"Test123456"} /> */}
//       <UserClass name={"Test654321"} location={"uk class"} />
//     </div>
//   );
// };

export default About;
