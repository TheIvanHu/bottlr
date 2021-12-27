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
          <main class="px-3">
          <h1 style={{ color: "black", fontSize: "3rem" }}>
            Bottlr{" "}
          </h1>
          <p class="lead"> Share your bottled emotions <br/>
                and read from others around the world</p>
          <a href="/feed" class="btn btn-lg btn-secondary font-weight-bold border-black bg-white text-black">Enter and Start Browsing</a>
          </main>
          
        </div>
      </div>
      </Container>
      
    )
  }
}


export default Home;