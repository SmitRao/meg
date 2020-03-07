import React from "react";
import { Layout, Menu, Checkbox, Typography, Button } from "antd";
import { filters } from "../../constants/FilterOptions.js";
import "./Results.css";

import Sort from "../../components/Results/Sort.js";
import PriceFilter from "../../components/Results/PriceFilter.js";
import Products from "../../components/Results/Products.js";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

console.log(filters["gender"]);

const generatesubMenu = (title, children) => {
  return (
    <SubMenu
      key={title}
      title={<span>{title.toUpperCase()}</span>}
      children={children}
    ></SubMenu>
  );
};

const generateOptions = filters => {
  return filters.map(option => (
    <Menu.Item key={option}>
      <Checkbox onChange={onChange}>{option}</Checkbox>
    </Menu.Item>
  ));
};

class Result extends React.Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Sider>
          <Button>RESET FILTERS</Button>
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={["1"]}
            mode="inline"
            defaultOpenKeys={Object.keys(filters)}
          >
            {Object.keys(filters).map(filter => {
              let typeOfFilter = <PriceFilter />;
              if (filter !== "price") {
                typeOfFilter = generateOptions(filters[filter]);
              }
              return generatesubMenu(filter, typeOfFilter);
            })}
          </Menu>
        </Sider>
        <Content>
          <Text strong>Showing X Results for "Y"</Text>
          <Sort></Sort>
          <Products></Products>
        </Content>
      </Layout>
    );
  }
}

export default Result;
