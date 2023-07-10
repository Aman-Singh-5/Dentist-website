import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
export const Review = () => {
    return (
        <>
            <section className="section review-section">
                <Container>
                    <div className="review-header text-center">
                        <img className="shape8" src="images/Shape 8.png" alt="pic"/>
                        <h1>5-Star <span>Reviews</span> From <span>Satisfied Customers</span></h1>
                        <h2>4.9/5.0</h2>
                        <img src="images/Review smile.png" className="d-none smile" alt="pic"/>
                    </div>
                    <Row>
                        <Col lg={3}>
                            <div className="customer-review review1 text-center">
                                <img src="images/Review image 2.png" alt="pic" />
                                <p>
                                    Dental and gum health care needs to be regularly for your health. Its not
                                    enough just to do treatment through a visit to the dentist.
                                </p>
                                <p>--casteria</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="review-smile">
                            <img src="images/Review smile.png" alt="pic"/>
                            </div>
                        </Col>
                        <Col lg={3}>
                        <div className="customer-review text-center">
                                <img src="images/Review image 2.png" alt="pic" />
                                <p>
                                    Dental and gum health care needs to be regularly for your health. Its not
                                    enough just to do treatment through a visit to the dentist.
                                </p>
                                <p>--casteria</p>
                            </div>
                        </Col>
                    </Row>
                    <img className="review-bottom-svg" src="images/Shape 9.png" alt="pic"/>
                    <Row className="justify-content-center mbb-5">
                        
                        <Col lg={3} className="mr-3">
                        <div className="customer-review text-center">
                                <img src="images/Review image 2.png" alt="pic" />
                                <p>
                                    Dental and gum health care needs to be regularly for your health. Its not
                                    enough just to do treatment through a visit to the dentist.
                                </p>
                                <p>--casteria</p>
                            </div>
                        </Col>
                        <Col lg={3} className="mr-3">
                        <div className="customer-review text-center">
                                <img src="images/Review image 2.png" alt="pic" />
                                <p>
                                    Dental and gum health care needs to be regularly for your health. Its not
                                    enough just to do treatment through a visit to the dentist.
                                </p>
                                <p>--casteria</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}