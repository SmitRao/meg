import React from "react";
import { Input, Button, Typography } from "antd";
import "./Searchbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Searchbar } from 'react-native-paper';

const { Text } = Typography;

const { Search } = Input;

class Searchbar extends React.Component {
  postsearch() {
    var search_keyword = document.getElementById("product-search").value;

    console.log("data is..." + search_keyword);

    axios
      .post(
        "/query",
        // JSON.parse(
        //   `{"data": ${document.getElementById("product-search").value}}`
        // )
        search_keyword
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Search
        id="product-search"
        className="search-bar"
        placeholder="search for items..."
        onSearch={this.postsearch}
      />
    );
  }
}

export default Searchbar;
