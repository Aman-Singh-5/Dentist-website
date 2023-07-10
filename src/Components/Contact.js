import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const Contact = () => {
    return (
        <>
            <section className="section contact-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="box contact-content-box">
                                <h1>The <span>Doctor</span> Will Create a personalized <span>Treatment Plan</span> that Specify to Your <span>Clinical Need</span></h1>
                                <p>Our highly skilled dentists provide comprehensive care for adults and teenagers.
                                    We offer a number of restorative.</p>
                                    <button className="btn btn-primary">Call us now</button>
                                    <button className="btn btn-primary">Learn more</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}