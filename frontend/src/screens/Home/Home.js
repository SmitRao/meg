import React from "react";
import { Layout, Menu, Input, Button, Typography } from "antd";
import "./Home.css";
import PicturesCarousel from "../../assets/pictures-carousel.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import MegFooter from "../../components/MegFooter/MegFooter";

const { Text } = Typography;

//TODO: remove when navbar and footer are made
const { Header, Content, Footer } = Layout;
const copyrightYear = new Date().getFullYear();

class Home extends React.Component {
  render() {
    return (
      <Layout className="home">
        <Navbar />

        <Content className="content">
          <div className="message">
            <span className="highlight"> Finding ethically </span>
            <span className="highlight"> made styles can </span>
            <span className="highlight"> really be this easy. </span>
            <Searchbar />
            <Button className="learn" type="link">
              <Link to={"/how-it-works"}>Learn how it works</Link>
            </Button>
          </div>
        </Content>

        <img
          className="pictures-carousel"
          src={PicturesCarousel}
          alt="pictures carousel"
        />

        <MegFooter />
      </Layout>
    );
  }
}

export default Home;
