import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const Doctor = () => {
    return (
        <>
            <section className="section doctor-section">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="doctor-content">
                                <h1>Our <span>Doctor</span> With An Amazing <span>Story</span></h1>
                                <p>BlueDent dental delivers quality dentistry with a personalized touch.
                                    Each patient is treated with the utmost care, compassion, empathy
                                    and state-of-the-art dentistry that promises nothing but the best.</p>
                                <p>We provide oral care solutions for all dental problems, including Root
                                    Canal Treatment, teeth whitening, teeth cleansing and polishing,
                                    complete or partial dentures, orthodontic treatment and more. With
                                    our team of expert dentists, we take care of all your dental needs and
                                    ensure complete sterilization in all our procedures.</p>
                                    <button className="btn-outline">Know this more <img src="images/Icon.png" alt="img"/></button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="doctor-image-box">
                                <img className="circle" src="images/Shape 2.png" alt="circle"></img>
                                <img className="doctor-img" src="images/Our Doctor image.png" alt="doctorimg" />
                            </div>

                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}