import React from "react";
import { Layout, Menu, Checkbox, Typography, Button, Row, Col} from "antd";
import { FacebookFilled, InstagramFilled, MailFilled } from "@ant-design/icons";

import { filters } from "../../constants/FilterOptions.js";
import "./Results.css";

import Sort from "../../components/Results/Sort.js";
import PriceFilter from "../../components/Results/PriceFilter.js";
import Products from "../../components/Results/Products.js";

import MegFooter from "../../components/MegFooter/MegFooter.js"
import Navbar from "../../components/Navbar/Navbar.js"

import Searchbar from "../../components/Searchbar/Searchbar";


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;
const copyrightYear = new Date().getFullYear();


function onChange(checkedValues) {
  // console.log("checked = ", checkedValues);
}

function resetFilters() {

}

const generatesubMenu = (title, children) => {
  return (
    <SubMenu
      key={title}
      title={<span>{title.toUpperCase()}</span>}
      children={children}
      className="submenu"
    ></SubMenu>
  );
};

const generateOptions = filters => {
  return filters.map(option => (
    <Menu.Item key={option} className="filterrow">
      <Checkbox className="checkbox" onChange={onChange}>{option}</Checkbox>
    </Menu.Item>
  ));
};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.state = {
      sortFunction: "htl", 
      min: 0, 
      max: 1000,
      query: 'Europe Street Beat',
      amount: 10
    }
  }

  handleSort(sortOption) {
    this.setState({sortFunction: sortOption})
  }

  handlePriceFilter(values) {
    console.log(values);
    this.setState(values);
  }

  render() {
    const resultQuery = this.state.query;
    const amount = this.state.amount;

    const products = [{"price":150}, {"price":200}, {"price":250}, {"price":300}]
    
    let compare = (x) => {return x};

    if (this.state.sortFunction === "lth") {
      compare = (a,b) => {return a.price-b.price};
    }
    else if (this.state.sortFunction === "htl") {
      compare = (a,b) => {return b.price-a.price};
    }
    return (
      <div>
      <Layout>
      <Navbar searchbar={<Searchbar className="searchbarresults" text="search items"/>}></Navbar> 
        <Layout class="background">
          <Row className="row" justify="space-between" align="middle">
            <Col>
              <Text>Showing {amount} Results for {resultQuery}</Text>
            </Col>
            <Col>
              <Sort onChange={this.handleSort}></Sort>
            </Col>
          </Row>
        </Layout>
        <Layout class="background">
        <Sider>
        {/*<Row justify="center" className="reset">
          <Button onClick={resetFilters}>RESET FILTERS</Button>
        </Row>*/}
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={["1"]}
            mode="inline"
            defaultOpenKeys={Object.keys(filters)}
            className="menu"
          >
            {Object.keys(filters).map(filter => {
              let typeOfFilter = <PriceFilter onSet={this.handlePriceFilter} className="pricefilter"/>;
              if (filter !== "price") {
                typeOfFilter = generateOptions(filters[filter]);
              }
              return generatesubMenu(filter, typeOfFilter);
            })}
          </Menu>
        </Sider>
        <Content className="productscontainer background">
          <Products products={products.sort(compare)}></Products>
        </Content>
        </Layout>
        <MegFooter></MegFooter>
      </Layout>
      </div>
    );
  }
}

export default Result;
