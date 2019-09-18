import React, { Component } from 'react';

import DisplayProductList from './product'
import Search from './search'
import './display.css'
import image1 from '../images/images (1).jpg'
import image2 from '../images/images (2).jpg'
import image3 from '../images/images (3).jpg'
import image4 from '../images/images (4).jpg'
import image5 from '../images/images (5).jpg'
import image6 from '../images/images (6).jpg'

class Display extends Component {
  state = {
    items: [
      { name: "Pizza", itemImage: image1 },
      { name: "Burger", itemImage: image2 },
      { name: "Itli", itemImage: image3 },
      { name: "Dosa", itemImage: image4 },
      { name: "pavbaji", itemImage: image5 },
      { name: "Chicken Burger Chinese", itemImage: image6 }
    ],
    searchKeyWord: '',
  };

  handleSearch = searchKeyWord => this.setState({ searchKeyWord });

  render() {
    const { items, searchKeyWord } = this.state;
    const filteredItems = searchKeyWord ? items.filter(item => item.name.toLowerCase().includes(searchKeyWord.toLowerCase())) : items;

    return (
      <div className="root">
        <div className="searchcontain">
          <Search onSearch={this.handleSearch} /></div>
        <div className="content"><DisplayProductList items={filteredItems} /></div>
      </div>
    )
  }
}

export default Display;