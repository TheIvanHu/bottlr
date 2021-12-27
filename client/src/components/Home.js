import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';

class Home extends Component {
  render(){
    return(
      <Container >
        <div style = {{
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "1002",
          minWidth: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignitems: "center",
          backgroundImage: "../assets/bottlrhome.jpg",
          backgroundColor: "white",
        }}>

          
        <div
          style={{

            position: "absolute",
            top: "center",
            left:"30vw",
            zIndex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10vh 10vw",
            borderRadius: "15vh",
            backdropFilter: 'blur(10vh)'
          }}
        >
          <h1 style={{ color: "black", fontSize: "3rem" }}>
            Welcome To YelpCamp{" "}
          </h1>
          <Button  style={{padding: '10px'}}>
            View Campsites
          </Button>
        </div>
      </div>
      </Container>
      
    )
  }
}


export default Home;