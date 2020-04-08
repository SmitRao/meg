import React from "react";
import "./AboutBrands.css"
import { Layout, Typography } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import MegFooter from "../../components/MegFooter/MegFooter";
import {CheckCircleOutlined} from "@ant-design/icons";

const { Content } = Layout;
const { Text, Title } = Typography;

class AboutBrands extends React.Component {
    render(){
        return(
            <Layout className="layout"> 
                <Navbar/>
                     <Title className="title">
                            About our Brands
                        </Title>
                    <Content className="content">
                        <Text>
                            </Text>
                        </Content>
                <MegFooter/>
            </Layout>

        );
    }
}

export default AboutBrands;