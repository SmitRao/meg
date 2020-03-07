import React from "react";
import {Layout, Menu, Input, Button, Typography} from "antd";
import "./Home.css";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import PicturesCarousel from "../../assets/pictures-carousel.png";
import {
    FacebookFilled,
    InstagramFilled,
    MailFilled
} from "@ant-design/icons";

const {Text} = Typography;

//TODO: remove when navbar and footer are made
const { Header, Content, Footer } = Layout;
const copyrightYear = new Date().getFullYear();

class Home extends React.Component {
  render() {
    //TODO: replace Header with navbar when implemented
    return (
        <Layout className="home">
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

          <Content className="content">
              <div className="message">
                  <span className="highlight"> Finding ethically </span>
                  <span className="highlight"> made styles can </span>
                  <span className="highlight"> really be this easy. </span>
                  <Input.Search className="message-search" placeholder="search for items..."/>
                  <Button className="learn" type="link">Learn how it works</Button>
              </div>
          </Content>

            <img className="pictures-carousel" src={PicturesCarousel} alt="pictures carousel"/>

            <Footer className="footer">
                <div className="footer-icons">
                    <FacebookFilled className="icon"/>
                    <InstagramFilled className="icon"/>
                    <MailFilled className="icon"/>
                </div>
                <Text style={{ color: "#efefef" }}>
                    © {copyrightYear}, My Ethical Garment Inc. All rights reserved.
                </Text>
            </Footer>
        </Layout>
    );
  }
}

export default Home;
