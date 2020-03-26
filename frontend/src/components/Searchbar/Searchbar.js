import React from "react";
import { Input, Button, Typography } from "antd";
import "./Searchbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const { Text } = Typography;

const { Search } = Input;

class Searchbar extends React.Component {
  postsearch() {
    let data = document.getElementById("product-search").value;

    console.log("data is..." + data);
class Searchbar extends React.Component{
    render(){
        return(
            <Search
              className={"search-bar" + " " + this.props.className}
              placeholder={this.props.text}
              onSearch={this.props.handleSearch}
            />
        );
    }


    axios
      .post(
        "/query",
        JSON.parse(
          `{"data": ${document.getElementById("product-search").value}}`
        )
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
