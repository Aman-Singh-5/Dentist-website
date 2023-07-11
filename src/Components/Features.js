import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"


const Content = (props) => {
    return (
        <>
            <Col lg={3} md={6} sm={6}>
                <div className="feature-content-heading">
                    <img className="content-logo" src={props.src} alt="logo" />
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                    <button className="btn-outline">Know this more <img src="images/Icon.png" alt="img" /></button>
                </div>
            </Col>
        </>
    )
}

export const Features = () => {
    return (
        <>
            <section className="section feature-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="feature-section-header box">
                                <h1><span>Features </span>in our <span>Clinic</span></h1>
                                <p>you can enjoy the services at our clinic with several features that make it easier for you</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Content src="images/Feature 1.png" heading="Our Online System" para="Our clinic already has a online ecosystem" />
                        <Content src="images/Feature 2.png" heading="24 Hours open" para="Our clinic already has a online ecosystem" />
                        <Content src="images/Feature 3.png" heading="Easy Access" para="Our clinic already has a online ecosystem" />
                        <Content src="images/Feature 4.png" heading="More Facilities" para="Our clinic already has a online ecosystem" />
                    </Row>
                </Container>
            </section>
        </>
    )
}