import Container from "react-bootstrap/esm/Container"
import { Header } from "./Global/Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Banner = () => {
    return(
        <>
            <section className="section banner-section">
            <Header/>
                <Container>
                    
                    <Row>
                        <Col lg={12}>
                            <div className="banner-content">
                                <h1>If your <span>smile</span> is not becoming<br/> to <span>you</span>, then you should<br/> be <span>coming</span> to <span>me!</span></h1>
                                <p>Lets check how your dental health is by our professionals with complete and modern facilities Services only at our clinic</p>
                                <button className="btn btn-primary">Book a consultation</button>
                            <img className="banner-img-1" src="images/Banner image 1.png" alt="bannerimg"/>
                            <img className="banner-img-2" src="images/Banner image 2.png" alt="bannerimg2"/>
                        
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}