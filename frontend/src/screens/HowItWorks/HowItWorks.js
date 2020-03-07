import React from "react";
import "./HowItWorks.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const { Header, Content, Footer } = Layout;

export class HowItWorks extends React.Component {
  render() {
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
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
