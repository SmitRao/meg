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
                <Content className="content">
                    <Title className="title">
                        About our Brands
                    </Title>
                    <div className ="container">
                        <div className="row-brands">
                            <div className="brand-card">
                                <Title level={2}>
                                    NEA
                                </Title>
                                <Text style={{ textAlign: "left", fontSize: "large" }}>
                                    Nea Wear is a modest clothing brand that sells hijabs that are ethically sourced. 
                                    They hope to build a community, to create a new type of connection between responsible, 
                                    conscious humans. They want a real exchange of ideas and views via a direct relationship 
                                    with our customers and  want to create a culture that transforms the way we all consume 
                                    fashion.
                                </Text>
                            </div>

                            <div className="brand-card">
                                <Title level={2}>
                                    Electric Bazaar
                                </Title>

                                <Text style={{ textAlign: "left", fontSize: "large" }}>
                                Electric Bazaar is an ethical fashion social enterprise based in the North West, UK, 
                                which was founded in July 2017 by Shamima and Alicya. It was born out of a passion for 
                                designing clothes that give talented artisans the recognition they deserve, whilst preserving 
                                the rich art of handicrafts from the Subcontinent. They design in-house limited-edition clothing 
                                pieces which are modest-friendly, incorporating the embroidery styles and handicrafts of the 
                                different regions in Pakistan.
                                </Text>
                            </div>
                    </div>
                    </div>
                </Content>
            <MegFooter/>
                
            
            </Layout>

        );
    }
}

export default AboutBrands;