import React, { Component } from "react";

class Callback extends Component {
  render() {
    return <h1>Loading...</h1>;
  }

  componentDidMount() {
    // handle authentication
    if (/access_token|id_token|error/.test(this.props.location.hash))
      this.props.auth.handleAuthentication();
    else throw new Error("Invalid callback URL");
  }
}

export default Callback;
