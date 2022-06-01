import React, { Component } from "react";
import axios from "axios";

class tambahPenguji extends Component {
  state = {
      data : {
        attributes: {
          id_penguji: ""
        }
      }
  };

  onIdChange = e => {
    this.setState({
      id_penguji: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id_penguji: this.state.id_penguji,
    };
    axios
      .post("http://10.50.164.137:1337/api/pengujis/", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="Title" value={this.state.id_penguji}
            onChange={this.onIdChange} required
          />
          <button type="submit" >Create Post</button>
        </form>
      </div>
    );
  }
}

export default tambahPenguji;