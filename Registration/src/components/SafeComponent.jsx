import React, { Component } from "react";

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    }

    return this.props.children;
  }
}
