import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

export const Articles = () => {
    return (
        <>
            <section className="section article-section">
                <Container>
                    <div className="article-heading text-center"> <h1>Our <span>Insights</span> and <span>Articles</span></h1></div>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="text-center article-box">
                            <div className="article-section-img-box">
                                <img src="images/Article image 1.png" alt="pic" />
                            </div>
                            <p>13/02/2023</p>
                            <p>Nazariy Mykhayluyk gave a talk on Digital Workflow
                                in Veneers Cases.M.Vision experience and own
                                protocols had been shared to American.</p>
                                <button className="btn-outline">Know this More</button>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="text-center article-box">
                            <div className="article-section-img-box">
                                <img src="images/Article image 1.png" alt="pic" />
                            </div>
                            <p>13/02/2023</p>
                            <p>Nazariy Mykhayluyk gave a talk on Digital Workflow
                                in Veneers Cases.M.Vision experience and own
                                protocols had been shared to American.</p>
                                <button className="btn-outline">Know this More</button>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="text-center article-box">
                            <div className="article-section-img-box">
                                <img src="images/Article image 1.png" alt="pic" />
                            </div>
                            <p>13/02/2023</p>
                            <p>Nazariy Mykhayluyk gave a talk on Digital Workflow
                                in Veneers Cases.M.Vision experience and own
                                protocols had been shared to American.</p>
                                <button className="btn-outline">Know this More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}