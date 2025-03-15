import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/" + this.props.name);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(
      "Component Did Update with state variables changed. we are in updating phase"
    );
  }

  componentWillUnmount() {
    console.log("Component Did unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state?.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @abcdefgh</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
