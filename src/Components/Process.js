
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Crousal.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export const Process = () => {
    return (
        <>
            <section className='section process-section'>
                <Container className='side-img'>
                    
                <img className='circle-2' src='images/Shape 4.png' alt='pic'/>
                    <Row>
                        <Col lg={5}>
                            <div className='process-content-box'>
                                <h1>Our <span>Practice</span> Process <span>Video</span></h1>
                                <p>BlueDent dental delivers quality dentistry with a personalized touch.
                                    Each patient is treated with the utmost care, compassion, empathy
                                    and state-of-the-art dentistry that promises nothing but the best.</p>
                                <button className='btn-outline'>See more videos <img src="images/Icon.png" alt="img" /></button>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Swiper
                                slidesPerView={2}
                                centeredSlides={true}
                                spaceBetween={30}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src='images/video 1.png' alt='pic'/></SwiperSlide>
                                <SwiperSlide><img src='images/video 2.png' alt='pic'/></SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}


