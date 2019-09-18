import React from "react";
import { MDBJumbotron, MDBIcon, MDBCardHeader, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import './style.css'
import Fish from '../../images/fish.jpg'
import Pet from '../../images/pet.jpg'
import Train from '../../images/train.jpg'
import Node from '../../images/node.jpg'
import Giphy from '../../images/giphy.gif'
import Burger from '../../images/burger.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



const JumbotronPage = () => {
    return (
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                    <MDBCardHeader color="black lighten-1" className='card-header'>Portfolio</MDBCardHeader>
                    <MDBJumbotron id='portfolio'>
                        <div className='container'>
                            <MDBRow className='portfolio-row'>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Fish} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Krystal Klear Aquariums</MDBCardTitle>
                                            <MDBCardText>
                                                Final Project in boot camp.  Real client website, hosted on Heroku, done in React with Mongodb database.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/Krystal-Klear-Aquariums.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" brand className='icon' />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="http://www.krystalklearaquariums.com" className="p-2 fa-lg">
                                                        <MDBIcon icon="link" className='icon'/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Pet} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Pet Connect</MDBCardTitle>
                                            <MDBCardText>
                                                Project 2 in boot camp.  Web app that allows you to search for
                                                pets to adopt in your area. Handlebars and MySQL.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/Project-2.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" brand className='icon' />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://awesomeproject2.herokuapp.com/" className="p-2 fa-lg">
                                                        <MDBIcon icon="link" className='icon' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='portfolio-row'>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Train} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Train Time</MDBCardTitle>
                                            <MDBCardText>
                                                Web app for current train times that are stored in my firebase.  You can add train, destination, frequency, and start time.
                                                It will calculate the next train arrival.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/Train-Time.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" className='icon' brand />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://cmack704.github.io/Train-Time/" className="p-2 fa-lg">
                                                        <MDBIcon icon="link" className='icon' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Node} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Liri Node App</MDBCardTitle>
                                            <MDBCardText>
                                                App that runs in terminal on PC through Node.  You can search
                                                for atrists next concert, info about movies or songs.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/liri-node-app.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" className='icon' brand />
                                                    </a>
                                                </li>                                          
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='portfolio-row'>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Giphy} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Giphy Fun</MDBCardTitle>
                                            <MDBCardText>
                                                Web app that searches your favorite catagories calls to Giphy API, and
                                                renders the results on page in still format.  Click the image to see gif.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/Giphy_Fun.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" brand className='icon' />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://cmack704.github.io/Giphy_Fun/" className="p-2 fa-lg">
                                                        <MDBIcon icon="link" className='icon' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol className='project-col'>
                                    <MDBCard style={{ width: "22rem" }} className='project'>
                                        <MDBCardImage className="img-fluid" src={Burger} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>Eat-Da-Burger</MDBCardTitle>
                                            <MDBCardText>
                                                Web app hosted by Heroku.  Enter the name of a burger, if it hasn't been
                                                eaten, then hit the devour button and devour it.  Rendered in handlebars.
                                            </MDBCardText>
                                            <ul className="list-inline py-2">                                                
                                                <li className="list-inline-item">
                                                    <a href="https://github.com/CMack704/burger.git" className="p-2 fa-lg ghub-ic">
                                                        <MDBIcon icon="github" brand className='icon' />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://dry-sands-79967.herokuapp.com/" className="p-2 fa-lg">
                                                        <MDBIcon icon="link" className='icon' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;