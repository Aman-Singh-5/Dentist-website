import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const Footer = () => {
    return (
        <>
            <section className="section footer-section">
                <div className="footer-outer-div">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} className="pd-11">
                                <Row>
                                    <Col lg={3} md={6} sm={6}>
                                        <ul>
                                            <li><h3>Services</h3></li>
                                            <li>Cosmetaic Braces</li>
                                            <li> Dental Implant</li>
                                            <li>General Dentistry</li>
                                            <li>Extractions</li>
                                        </ul>
                                    </Col>
                                    <Col lg={3} md={6} sm={6}>
                                        <ul>
                                            <li><h3>Services</h3></li>
                                            <li>Cosmetaic Braces</li>
                                            <li> Dental Implant</li>
                                            <li>General Dentistry</li>
                                            <li>Extractions</li>
                                        </ul>
                                    </Col>
                                    <Col lg={3} md={6} sm={6}>
                                        <ul>
                                            <li><h3>Services</h3></li>
                                            <li>Cosmetaic Braces</li>
                                            <li> Dental Implant</li>
                                            <li>General Dentistry</li>
                                            <li>Extractions</li>
                                        </ul>
                                    </Col>
                                    <Col lg={3} md={6} sm={6}>
                                        <ul>
                                            <li><h3>Services</h3></li>
                                            <li>Cosmetaic Braces</li>
                                            <li> Dental Implant</li>
                                            <li>General Dentistry</li>
                                            <li>Extractions</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <div className="email-form-box">
                                    <h2>join our newsletter to stay up to date</h2>
                                    <p>Subscribe to our newsletter to receive weekly
                                        news, updates, special offers, and
                                        exclusive discounts.</p>
                                    <form>
                                        <input type="email" placeholder="Enter your email"></input>
                                        <button className="btn-custom">Subscribe</button>
                                    </form>
                                </div>

                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <div className="policies-box">
                                <p className="policies">Lotus Family Dental provides West Los Angeles, Westwood,
                                    Santa Monica, and all neighboring cities with services such
                                    as general dentistry, cosmetic dentistry, dental implants,
                                    and teeth whitening. All Rights Reserved | Sitemap
                                    </p>
                                <p className="policies">
                                    Terms & Conditions Privacy Policy</p>
                                    </div>                            
                            </Col>
                            <Col lg={4}>
                                <img src="" alt="pic" />
                            </Col>
                            <Col lg={4}>
                                <div className="d-flex footer-social">
                                    <img src="images/footer insta.png" alt="pic" />
                                    <img src="images/footer fab.png" alt="pic" />
                                    <img src="images/footer linked in.png" alt="pic" />
                                    <img src="images/footer twitter.png" alt="pic" />
                                </div>
                                <p className="copyright">2023 BlueDent. All Reserved   Website by iOTA</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}