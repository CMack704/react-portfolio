import React from "react";
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";
import './style.css'

const EdgeHeaderPage = props => {
    return (
      <MDBContainer className="mt-3">
        <MDBEdgeHeader></MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Contact Me</MDBCardTitle>
                <form>
                  <MDBInput label="Your name" group type="text" icon="user" />
                  <MDBInput label="Your email" group type="email" icon="envelope" />
                  <MDBInput type="textarea" rows="2" label="Textarea" icon="pencil-alt" />
                  <MDBBtn className="text-xs-left">Submit</MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </MDBContainer>
    );
};

export default EdgeHeaderPage;
