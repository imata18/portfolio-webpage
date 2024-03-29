import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";

import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/" element={<Resume />}></Route>
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
