import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import "./header.css";

const Header = (props) => {
    let { headerData } = props;
    return (
        <div className="">
            <Nav activeKey="/home">
                {headerData.map((data, index) => {
                    return (
                        <Nav.Item key={index}>
                                <Link to={`/` + data}>{data}</Link>
                        </Nav.Item>
                    )
                })}
            </Nav>
        </div >
    )
}

export default Header;