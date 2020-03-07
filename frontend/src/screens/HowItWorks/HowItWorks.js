import React from "react";
import "./HowItWorks.css";
import { Layout, Menu } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const { Header, Content, Footer } = Layout;

export class HowItWorks extends React.Component {
  render() {
    const copyrightYear = new Date().getFullYear();
    return (
      <Layout className="layout">
        <Header className="header">
          <Logo className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="menu"
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Our Values</Menu.Item>
            <Menu.Item key="3">Brands</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <SearchOutlined></SearchOutlined>
            <FilterOutlined></FilterOutlined>
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </div>
        </Content>

        <Footer className="footer">
          © {copyrightYear}, My Ethical Garment Inc. All rights reserved.
        </Footer>
      </Layout>
    );
  }
}
