import React from "react";

import Typography from "@material-ui/core/Typography";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";

import "./Home.css";

const Home = () => (
    <div>
        <Container fluid>
            <Navbar />
            <Row>
                <Col size="xl-3 lg-4 md-5 sm-12">
                    <div className="center-align">
                        <Row>
                            <div>
                                <img>
                                
                                </img>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col size="xl-9 lg-8 md-7 sm-12">
                    <Row>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className="flow-text line-height">

                            TEXT LINE 1

                            </Typography>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Typography
                    variant="h5"
                    gutterBottom>

                    Text Line 2

                </Typography>
            </Row>
        </Container>
    </div>
);

export default Home;