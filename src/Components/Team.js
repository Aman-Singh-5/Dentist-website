import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export const Team = () => {
    return (
        <>
            <section className="section team-section">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h1>Our <span>Team</span> of <span>Dentists</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="team-crousal-box">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                    <div className="Team-box">
                                            <img src="images/doc-2.png" alt="pic"/>
                                            <div className="Team-content">
                                                <h2>Maria Gryms</h2>
                                                <h3><span>Gun Specialist</span></h3>
                                                <p>University of California, Los angels.<br/>Scholl of Dentistry, los angeles.</p>
                                                <div className="Team-content-logo d-flex justify-content-center">
                                                    <img src="images/Dentist social Fb.png" alt="pic" />
                                                    <img src="images/Dentist social insta.png" alt="pic" />
                                                    <img src="images/Dentist social Linked in.png" alt="pic" />

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                       
                                        <div className="Team-box">
                                            <img src="images/doc-2.png" alt="pic"/>
                                            <div className="Team-content">
                                                <h2>Maria Gryms</h2>
                                                <h3><span>Gun Specialist</span></h3>
                                                <p>University of California, Los angels.<br/>Scholl of Dentistry, los angeles.</p>
                                                <div className="Team-content-logo d-flex justify-content-center">
                                                    <img src="images/Dentist social Fb.png" alt="pic" />
                                                    <img src="images/Dentist social insta.png" alt="pic" />
                                                    <img src="images/Dentist social Linked in.png" alt="pic" />

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="Team-box">
                                            <img src="images/doc-2.png" alt="pic"/>
                                            <div className="Team-content">
                                                <h2>Maria Gryms</h2>
                                                <h3><span>Gun Specialist</span></h3>
                                                <p>University of California, Los angels.<br/>Scholl of Dentistry, los angeles.</p>
                                                <div className="Team-content-logo d-flex justify-content-center">
                                                    <img src="images/Dentist social Fb.png" alt="pic" />
                                                    <img src="images/Dentist social insta.png" alt="pic" />
                                                    <img src="images/Dentist social Linked in.png" alt="pic" />

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}