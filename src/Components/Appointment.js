import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const Appointment = () => {
    return (
        <>
            <section className="section appointment-section">
                <Container>
                    <Row>
                        <Col lg={5} md={4}>
                            <img className="appointment-img" src="images/Appointment image.png" alt="pic" />
                        </Col>
                        <Col lg={7} md={8}>
                            <img className="shape6" src="images/Shape 6.png" alt="pic"/>
                            <div className="appointment-content-section">
                                <h1>Come See <span>Us</span> Book an <span>Appointment</span></h1>
                                <p>Dental and gum health care needs to be regularly for your health. Its not
                                    enough just to do treatment through a visit to the dentist.</p>
                                <p>We provide oral care solutions for all dental problems, including Root Canal
                                    Treatment, teeth whitening, teeth cleansing and polishing, complete or partial
                                    dentures, orthodontic treatment and more. With our team of expert dentists,
                                    we take care of all your dental needs and ensure complete sterilization
                                    in all our procedures.</p>
                                    <button className="btn-custom">Get Started</button>
                                    <img src="images/Shape 7.png" alt="pic" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}