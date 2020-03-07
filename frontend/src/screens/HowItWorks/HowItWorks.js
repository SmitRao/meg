import React from "react";
import { Layout } from "antd";

const { Header, Content, Sider, Footer } = Layout;
class HowItWorks extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}

export default HowItWorks;
