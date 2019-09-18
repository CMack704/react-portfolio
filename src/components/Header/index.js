import React from "react";
import { MDBJumbotron, MDBContainer, MDBIcon } from "mdbreact";
import './style.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Header = () => {
    return (
        <MDBJumbotron fluid id='header'>
            <MDBContainer>
                <h2 className="display-4">Craig McAlister</h2>
                <p className="lead">Full-Stack Web Developer</p>
                <ul className="list-inline py-2">
                    <li className="list-inline-item">
                        <a href="https://github.com/CMack704" className="p-2 fa-lg gh-ic">
                            <MDBIcon icon="github" brand className='icon' />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/CraigMack704" className="p-2 fa-lg tw-ic">
                            <MDBIcon icon="twitter" brand className='icon' />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/phillip-craig-mcalister/" className="p-2 fa-lg li-ic">
                            <MDBIcon icon="linkedin" brand className='icon' />
                        </a>
                    </li>
                </ul>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default Header;