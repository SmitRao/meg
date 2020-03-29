import React from "react";
import { Input, Button, Typography } from "antd";
import "./Searchbar.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

const { Text } = Typography;

const { Search } = Input;

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
    this.postSearch = this.postSearch.bind(this);
  }

  postSearch() {
    let searchKeyword = document.getElementById("product-search").value;

    // console.log("data is..." + searchKeyword);  

    const params = {'data': searchKeyword}

    axios
      .post(
        "/query",
        params, 
        {headers: { 'content-type': 'application/json', },
      })
      .then(response => {
        console.log(response.data)
        this.props.history.push("/results", {
          data: response.data,
          query: searchKeyword
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Search
        id="product-search"
        className={"search-bar" + " " + this.props.className}
        placeholder={this.props.text}
        onSearch={this.postSearch}
      />
    );
  }
}

export default withRouter(Searchbar);
