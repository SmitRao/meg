import React from "react";
import { Layout, Typography } from "antd";
import "./MegFooter.css";
import { FacebookFilled, InstagramFilled, MailFilled } from "@ant-design/icons";

const { Text } = Typography;

const { Footer } = Layout;

const copyrightYear = new Date().getFullYear();

class MegFooter extends React.Component {
    render() {
        return (
            <Layout>
                <Footer className="footer">
                    <div className="footer-icons">
                        <FacebookFilled className="icon" />
                        <InstagramFilled className="icon" />
                        <MailFilled className="icon" />
                    </div>
                    <Text style={{ color: "#efefef" }}>
                        &#169; {copyrightYear}, My Ethical Garment Inc. All rights reserved.
                     </Text>

                </Footer>
            </Layout>
            
            )
    }
}

export default MegFooter;