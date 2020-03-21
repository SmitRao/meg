import React from "react";
import { Layout, Menu, Checkbox, Typography, Button, Row, Col} from "antd";

import { filters } from "../../constants/FilterOptions.js";
import "./Results.css";

import Sort from "../../components/Results/Sort.js";
import PriceFilter from "../../components/Results/PriceFilter.js";
import Products from "../../components/Results/Products.js";

import MegFooter from "../../components/MegFooter/MegFooter.js"
import Navbar from "../../components/Navbar/Navbar.js"

import Searchbar from "../../components/Searchbar/Searchbar";
import { Link } from "react-router-dom";



const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Text } = Typography;

const generatesubMenu = (title, children) => {
  return (
    <SubMenu
      key={title}
      title={<span>{title.toUpperCase()}</span>}
      children={children}
      className="submenu"
    >
    </SubMenu>
  );
};

const generateOptions = (filters, checkValues, onCheckboxChange) => {
  return filters.map(option => (
    <Menu.Item key={option} className="filterrow">
      <Checkbox 
      className="checkbox" 
      onChange={onCheckboxChange} 
      checked={checkValues[option]} 
      name={option}>
        {option}
      </Checkbox>
    </Menu.Item>
  ));
};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.resetFilters = this.resetFilters.bind(this);

    let intialFilters = {}
    Object.keys(filters).forEach(key => {
      if (key !== 'price') {
        filters[key].forEach(value => intialFilters[value] = false);
      }
    });

    this.state = {
      sortFunction: "htl", 
      min: 0, 
      max: 1000,
      query: 'Europe Street Beat',
      amount: 10,
      setFilterOn: false,
      checkValues: intialFilters
    };
  }

  onCheckboxChange(event) {
    let checkValues = this.state.checkValues;
    checkValues[event.target.name] = event.target.name in checkValues ? !checkValues[event.target.name] : true;
    this.setState({
      checkValues: checkValues
    });
  }

  resetFilters() {
    let checkValues = this.state.checkValues;
    Object.keys(checkValues).forEach(key => checkValues[key] = false);
    this.setState({
      setFilterOn: false,
      min: 0,
      max: 1000,
      checkValues: checkValues
    })
  }

  handleSort(sortOption) {
    this.setState({sortFunction: sortOption})
  }

  handlePriceFilter(values) {
    if (values['min'] <= values['max'] && values['min'] >= 0){
      this.setState({...values, setFilterOn: true});
    }
    else {
      this.setState({setFilterOn: false});
    }
  }

  render() {
    const resultQuery = this.state.query;
    const amount = this.state.amount;

    let products = [{"price":150}, {"price":200}, {"price":250}, {"price":300}]

    if (this.state.setFilterOn) {
      products = products.filter((product)=> 
        product['price'] >= this.state.min && product['price'] <= this.state.max
        )
    }
    
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
      {/* <Navbar searchbar={<Searchbar className="searchbarresults" text="search items"/>}></Navbar>  */}
      <Navbar />
      <Searchbar className="searchbarresults" text="search items"/>
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
        <Row justify="center" className="reset">
          <Button onClick={this.resetFilters}>RESET FILTERS</Button>
        </Row>
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
                typeOfFilter = generateOptions(filters[filter], this.state.checkValues, this.onCheckboxChange);
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
