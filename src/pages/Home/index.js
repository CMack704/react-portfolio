import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle, MDBCardHeader } from "mdbreact";
import Image from './Craig.jpg'
import './style.css'


const JumbotronPage = () => {
    return (
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                    <MDBCardHeader color="black lighten-1" className='card-header'>About</MDBCardHeader>
                    <MDBJumbotron>
                        <MDBCardBody>
                            <img src={Image} className="img-fluid z-depth-1" id='photo' alt="Craig McAlister pic" />
                            <hr className="my-4" />
                            <MDBCardTitle className="h2">
                                Craig McAlister
                            </MDBCardTitle>
                            <p className="my-4 font-weight-bold">
                                Full-Stack Web Developer
                            </p>
                            <MDBCardText>
                                <p>
                                    Hello!  My name is Craig, I grew up in Belmont, NC.  Lived most of my life in North Carolina.  
                                    I graduated from South Point High School, in Belmont.  I currently live in Gastonia, NC, with my dog 
                                    Homie.  Hobbies I enjoy are coding, gaming, sports, and reading.
                                </p>
                                <p>
                                    Once I graduated from high school, I decided to go into retail instead of going to college.  I have worked 
                                    in retail for 19 years.  I currently work for T-Mobile, I have been with the company for 10 years.  I love T-Mobile 
                                    and everything they have done for me, but I am ready to get out of retail.  I have learned a lot from my retail 
                                    experience, leadership, communication, team work, customer service, and paitence.
                                </p>
                                <p>
                                    Early in 2019 I was messing around with code academy, becasue I am a very technical person.  I really enjoyed coding, so 
                                    I decided to look for coding boot camps.  I found one at University of North Caolina in Charlotte, right down the road from me.  
                                    I signed up for the full-time full-stack javascript boot camp.  It was amazing seeing how much I could learn in just 12 weeks.  
                                    Now I am ready to start my journey in web development.
                                </p>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;
