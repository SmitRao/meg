import React from "react";
import { Layout, Menu, Checkbox, Typography, Button, Row, Col} from "antd";
import { FacebookFilled, InstagramFilled, MailFilled } from "@ant-design/icons";

import { filters } from "../../constants/FilterOptions.js";
import "./Results.css";

import Sort from "../../components/Results/Sort.js";
import PriceFilter from "../../components/Results/PriceFilter.js";
import Products from "../../components/Results/Products.js";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;
const copyrightYear = new Date().getFullYear();


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
      className="submenu"
    ></SubMenu>
  );
};

const generateOptions = filters => {
  return filters.map(option => (
    <Menu.Item key={option}>
      <Checkbox className="checkbox" onChange={onChange}>{option}</Checkbox>
    </Menu.Item>
  ));
};

class Result extends React.Component {
  render() {
    return (
      <div>
      <Layout>
        <Header></Header>
        <Layout class="background">
        <Row className="row" justify="space-between" align="middle">
        <Col>
        <Text strong>Showing X Results for "Y"</Text>
        </Col>
        <Col>
        <Sort></Sort>
        </Col>
        </Row>
        </Layout>
        <Layout class="background">
        <Sider>
        <Row justify="center" className="reset">
          <Button>RESET FILTERS</Button>
        </Row>
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={["1"]}
            mode="inline"
            defaultOpenKeys={Object.keys(filters)}
            className="menu"
          >
            {Object.keys(filters).map(filter => {
              let typeOfFilter = <PriceFilter className="pricefilter"/>;
              if (filter !== "price") {
                typeOfFilter = generateOptions(filters[filter]);
              }
              return generatesubMenu(filter, typeOfFilter);
            })}
          </Menu>
        </Sider>
        <Content className="productscontainer background">
          <Products></Products>
        </Content>
        </Layout>
        <Footer className="footer">
          <div className="footer-icons">
            <FacebookFilled className="icon" />
            <InstagramFilled className="icon" />
            <MailFilled className="icon" />
          </div>
          <Text style={{ color: "#efefef" }}>
            © {copyrightYear}, My Ethical Garment Inc. All rights reserved.
          </Text>
        </Footer>
      </Layout>
      </div>
    );
  }
}

export default Result;
