import React from "react";
import { Layout, Menu} from "antd";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const { Header } = Layout;

class Navbar extends React.Component {
    render() {
        return (
                <Header className="header">
                    <Link to="">
                    <Logo className="logo"/>
                    </Link>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        className="menu">

                        <Menu.Item key="1"> 
                        <Link to={""}> Home </Link>
                        </Menu.Item>
                        <Menu.Item key="2"> Our Values</Menu.Item>
                        <Menu.Item key="3"> Brands </Menu.Item>
                     </Menu>
                    </Header>
            )
    }
}

export default Navbar;