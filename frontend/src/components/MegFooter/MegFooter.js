import React from "react";
import { Layout, Typography } from "antd";
import "./MegFooter.css";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  MailFilled
} from "@ant-design/icons";

const { Text } = Typography;

const { Footer } = Layout;

const copyrightYear = new Date().getFullYear();

class MegFooter extends React.Component {
  fbRedirect() {
    window.location.href = "https://www.facebook.com/myethicalgarment";
  }
  instaRedirect() {
    window.location.href = "https://www.instagram.com/myethicalgarment/";
  }
  twitterRedirect() {
    window.location.href = "https://twitter.com/garment_my";
  }
  emailMeg() {
    window.location.href = "mailto:sana@myethicalgarment.com";
  }

  render() {
    return (
      <Layout>
        <Footer className="footer">
          <div className="footer-icons">
            <FacebookFilled className="icon" onClick={this.fbRedirect} />
            <InstagramFilled className="icon" onClick={this.instaRedirect} />
            <TwitterOutlined className="icon" onClick={this.twitterRedirect} />
            <MailFilled className="icon" onClick={this.emailMeg} />
          </div>
          <Text style={{ color: "#efefef" }}>
            &#169; {copyrightYear}, My Ethical Garment Inc. All rights reserved.
          </Text>
        </Footer>
      </Layout>
    );
  }
}

export default MegFooter;
