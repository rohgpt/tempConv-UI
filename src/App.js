import React, { Component } from 'react';

import TemperatureConvertor from './components/tempconve';
import ProductList from './components/display'

import { TEMPERATUR_CONVERTER, PRODUCT_LIST } from './constant';
import './App.css';

class App extends Component {
  state = { visibleItem: null };
  toggleValue = value => this.setState(prevState => ({ visibleItem: value }));

  render() {
    const { visibleItem } = this.state;

    return (
      <div>
        <div className="control-button">

          <button className="button" onClick={() => this.toggleValue(TEMPERATUR_CONVERTER)}>Temperature Convertor</button>
          <button className="button" onClick={() => this.toggleValue(PRODUCT_LIST)}>Product</button>
        </div>
        <div>

          {visibleItem === TEMPERATUR_CONVERTER && <TemperatureConvertor />}
          {visibleItem === PRODUCT_LIST && <ProductList />}
        </div>
      </div>
    )
  }
}
export default App;
