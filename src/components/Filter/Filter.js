import React, { Component } from "react";

class Filter extends Component {
  static defaultProps = {
    initFilter: "",
  };

  state = {
    filter: this.props.initFilter,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.props.onChange(this.state.filter);

    // this.setState({[name]:''})
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default Filter;
