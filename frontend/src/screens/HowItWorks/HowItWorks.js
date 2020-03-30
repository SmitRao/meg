import React from "react";
import "./HowItWorks.css";
import { Layout, Typography } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import Navbar from "../../components/Navbar/Navbar";
import MegFooter from "../../components/MegFooter/MegFooter";

const { Content } = Layout;
const { Text, Title } = Typography;
class HowItWorks extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Navbar />

        <Content className="content">
          <div className="container">
            <Title
              strong
              style={{ fontSize: "4em", justifyContent: "center" }}
              className="title"
            >
              How it works
            </Title>
            <div className="cards-row-container">
              <div className="card">
                <SearchOutlined style={{ padding: "0.2em" }}></SearchOutlined>
                <Title level={3}>Search</Title>
                <Text style={{ textAlign: "left", fontSize: "large" }}>
                  Type what you’re looking for into the search bar and see
                  results from verified clothing brands.
                </Text>
              </div>
              <div className="card">
                <FilterOutlined style={{ padding: "0.2em" }}></FilterOutlined>
                <Title level={3}>Filter</Title>
                <Text style={{ textAlign: "left", fontSize: "large" }}>
                  Use filters to narrow down your search and find the styles you
                  love that align with he values that are important to you.
                </Text>
              </div>
              <div className="card">
                <ShoppingCartOutlined
                  style={{ padding: "0.2em" }}
                ></ShoppingCartOutlined>
                <Title level={3}>Find</Title>
                <Text style={{ textAlign: "left", fontSize: "large" }}>
                  Once you find that perfect piece, MEG redirects you to the
                  vendor’s site to purchase that item.
                </Text>
              </div>
            </div>
          </div>
        </Content>
        <MegFooter />
      </Layout>
    );
  }
}

export default HowItWorks;
