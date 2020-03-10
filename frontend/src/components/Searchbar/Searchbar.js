import React from "react";
import {Input, Button, Typography} from "antd";
import "./Searchbar.css";
import { Link } from "react-router-dom";

const { Text } = Typography;

const { Search } = Input;


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

}

export default Searchbar;