import React from "react";
import "./HowItWorks.css";
import { Layout, Menu, Typography, Card } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
  InstagramFilled,
  MailFilled
} from "@ant-design/icons";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

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
          <div className="content">
            <Card className="card">
              <SearchOutlined></SearchOutlined>
            </Card>
            <Card className="card">
              <FilterOutlined></FilterOutlined>
            </Card>
            <Card className="card">
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Card>
          </div>
        </Content>

        <Footer className="footer">
          <div className="footer-icons">
            <FacebookFilled className="icon"></FacebookFilled>
            <InstagramFilled className="icon"></InstagramFilled>
            <MailFilled className="icon"></MailFilled>
          </div>
          <Text style={{ color: "#efefef" }}>
            © {copyrightYear}, My Ethical Garment Inc. All rights reserved.
          </Text>
        </Footer>
      </Layout>
    );
  }
}
