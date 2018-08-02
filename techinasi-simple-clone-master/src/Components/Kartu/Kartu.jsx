import React, { Component } from 'react';
//import Axiliary from '../../hoc/Auxiliary';
import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios';
import KartuSingular from '../../Components/Kartu/KartuSingular/KartuSingular';
class Kartu extends Component {
  state = {
    data: [],
    Loader: false
  };

  componentDidMount() {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          Loader: true
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.Loader ? (
          <KartuSingular data={this.state.data} />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </div>
    );
  }
}

export default Kartu;
