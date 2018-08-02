import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Kartu from '../../Components/Kartu/Kartu';
import Bottom from '../../Components/Bottom/Bottom';
import Aux from '../../hoc/Auxiliary';
class Berita extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Kartu />
        <Bottom />
      </Aux>
    );
  }
}
export default Berita;
