import React from "react";
import {
  Layout,
  Menu,
  Checkbox,
  Typography,
  Button,
  Row,
  Col,
  Spin
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { filters } from "../../constants/FilterOptions.js";
import "./Results.css";

import Currency from "../../components/Results/Currency";
import Sort from "../../components/Results/Sort.js";
import PriceFilter from "../../components/Results/PriceFilter.js";
import Products from "../../components/Results/Products.js";

import MegFooter from "../../components/MegFooter/MegFooter.js";
import Navbar from "../../components/Navbar/Navbar.js";

import Searchbar from "../../components/Searchbar/Searchbar";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Text } = Typography;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 80,
      color: "#333"
    }}
    className="centered"
    spin
  />
);

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

const generateOptions = (filters, checkValues, onCheckboxChange) => {
  return filters.map(option => (
    <Menu.Item key={option} className="filterrow">
      <Checkbox
        className="checkbox"
        onChange={onCheckboxChange}
        checked={checkValues[option]}
        name={option}
      >
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
    this.handleLoad = this.handleLoad.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);

    let intialFilters = {};
    Object.keys(filters).forEach(key => {
      if (key !== "price") {
        filters[key].forEach(value => (intialFilters[value] = false));
      }
    });

    this.state = {
      sortFunction: "htl",
      min: 0,
      max: 1000,
      setFilterOn: false,
      checkValues: intialFilters,
      loading: false,
      currency: "USD",
      clear: false
    };
  }

  onCheckboxChange(event) {
    let checkValues = this.state.checkValues;
    checkValues[event.target.name] =
      event.target.name in checkValues ? !checkValues[event.target.name] : true;
    this.setState(
      {
        checkValues: checkValues,
        loading: true
      },
      this.handleLoad()
    );
  }

  resetFilters() {
    let checkValues = this.state.checkValues;
    Object.keys(checkValues).forEach(key => (checkValues[key] = false));
    this.setState(
      {
        setFilterOn: false,
        min: 0,
        max: 1000,
        checkValues: checkValues,
        loading: true,
        clear: true
      },
      this.handleLoad()
    );
  }

  handleLoad() {
    setTimeout(() => {
      this.setState({
        loading: false,
        clear: false
      });
    }, 500);
  }

  handleSort(sortOption) {
    this.setState({ sortFunction: sortOption });
  }

  handlePriceFilter(values) {
    let min = parseFloat(values["min"]);
    let max = parseFloat(values["max"]);

    if (min <= max && min >= 0) {
      this.setState(
        { ...values, loading: true, setFilterOn: true },
        this.handleLoad()
      );
    } else {
      this.setState({ setFilterOn: false });
    }
  }

  handleCurrency(currencyOption) {
    // console.log(currencyOption);
    this.setState({ currency: currencyOption });

  }

  isempty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  render() {
    const resultQuery = this.props.location.state.query;
    const loading = this.state.loading;
    const currency = this.state.currency;

    let products = this.props.location.state.data;
    //console.log("products data: ", products)

    if (this.state.setFilterOn) {
      products = products.filter(
        product =>
          product["PriceInEuros"] >= this.state.min &&
          product["PriceInEuros"] <= this.state.max
      );
    }

    if (this.state.checkValues) {
      //need to check if size or if category, etc.
      let checked_filters = {};
      Object.keys(this.state.checkValues).forEach(key => {
        if (key !== 'price' && this.state.checkValues[key] === true) {
          if (key === "Men"){
            let value = this.state.checkValues[key];
            checked_filters["M"] = value;
          }
          else if (key === "Woman"){
            let value = this.state.checkValues[key];
            checked_filters["F"] = value;
          } 
          else {
            checked_filters[key] = this.state.checkValues[key];
          }
        }
      });
      
      //console.log("filters to check: ", checked_filters);
      if (!this.isempty(checked_filters)){
        products = products.filter((product) =>
        (product['Size'] in checked_filters) || product["Gender"] in checked_filters || product["CategoryName"] in checked_filters);
      }

    }

    let amountOfResults = products.length;
    let compare = x => {
      return x;
    };

    if (this.state.sortFunction === "lth") {
      compare = (a, b) => {
        return a.PriceInEuros - b.PriceInEuros;
      };
    } else if (this.state.sortFunction === "htl") {
      compare = (a, b) => {
        return b.PriceInEuros - a.PriceInEuros;
      };
    }
    return (
      <div>
        <Layout>
          <Navbar />
          <Searchbar className="searchbarresults" text="search items" />
          {amountOfResults !== 0 && (
            <Layout class="background">
              <Row className="row" justify="space-between" align="middle">
                <Col>
                  {amountOfResults === 1 ? (
                    <Text>
                      Showing {amountOfResults} Result for "{resultQuery}"
                    </Text>
                  ) : (
                    <Text>
                      Showing {amountOfResults} Results for "{resultQuery}"
                    </Text>
                  )}
                </Col>
                <Col>
                  <Row gutter={16} align="middle">
                    <Col><Sort onChange={this.handleSort}/></Col>
                    <Col><Currency onChange={this.handleCurrency} currency={currency}/></Col>
                  </Row>
                </Col>
              </Row>
            </Layout>
          )}
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
                  let typeOfFilter = (
                    <PriceFilter
                      onSet={this.handlePriceFilter}
                      className="pricefilter"
                      currency={currency}
                      clear={this.state.clear}
                    />
                  );
                  if (filter !== "price") {
                    typeOfFilter = generateOptions(
                      filters[filter],
                      this.state.checkValues,
                      this.onCheckboxChange
                    );
                  }
                  return generatesubMenu(filter, typeOfFilter);
                })}
              </Menu>
            </Sider>
            <Content className="productscontainer background">
              {loading ? (
                <Row justify="center" align="middle">
                  <Spin indicator={antIcon} />
                </Row>
              ) : amountOfResults === 0 ? (
                <Text className="centered no-results">
                  No Results for {resultQuery}
                </Text>
              ) : (
                <Products products={products.sort(compare)} currency={currency}/>
              )}
            </Content>
          </Layout>
          <MegFooter></MegFooter>
        </Layout>
      </div>
    );
  }
}

export default Result;
