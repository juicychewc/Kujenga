import React from "react";
import { Col, Row, Container } from "../../components/Grid";

import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footerPadMar">
                <Container>
                    <nav class="navbar fixed-bottom justify-content-center">
                        <Row>

                        </Row>
                    </nav>
                </Container>
            </div>
        );
    }
}

export default Footer;