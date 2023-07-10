import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

const Content = (props) => {
    return (
        <>
            <Col lg={4}>
                <div className="service-content-box">
                    <div className="service-content-heading"><img className="content-logo" src={props.src} alt="logo"/><h2>{props.logo}{props.heading}</h2></div>
                    <p>{props.para}</p>
                    <button className="btn-outline">Know this more <img src="images/Icon.png" alt="img"/></button>
                </div>
            </Col>
        </>
    )
}

export const Service = () => {
    return (
        <>
            <section className="section service-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="service-header">
                                <h1><span>Service</span> You Can <span>Get</span></h1>
                                <p>To maintain mental health we provide a range of service of our patients</p>
                            </div>
                        </Col>
                    </Row>
                    <Row >

                        <Content src="images/Services 1.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                        <Content src="images/Services 2.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                        <Content src="images/Services 3.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                        <Content src="images/Services 4.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                        <Content src="images/Services 5.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                        <Content src="images/Services 6.png" heading="Dental Cure" para="Dental must be care for so that bacteria and plague don not accumualte and causeoral health problems"/>
                    </Row>
                </Container>
            </section>
        </>
    )
}