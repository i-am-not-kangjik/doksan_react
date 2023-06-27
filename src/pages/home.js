import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import Button from 'react-bootstrap/Button';
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

// Install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

export default function App(props) {

    // 네이게이트
    let navigate = useNavigate();

    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                className="mySwiper"
                style={{ width: '100vw', height: '100vh', marginTop: '-20px', color: 'white' }}
            >
                <SwiperSlide style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url()`,
                    backgroundColor: '#A0BAED'
                }}>
                    <div style={{ width: '600px', textAlign: 'left', marginBottom: '200px', paddingLeft: '200px' }}>
                        <p style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px' }}>용산위에 독산</p>
                        <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>전자기기 <br></br>중고 가격 산정 <br></br>고민 해결</h1>
                        <p style={{ fontSize: '20px', marginTop: '40px' }}>로그인하고 예측하러가기<Button variant="light" style={{ marginLeft: '20px', width: '80px', }} onClick={() => {
                            if (props.loggedInUser == null) {
                                navigate('/signin');
                                return;
                            } else {
                                navigate('/model')
                                return;
                            }
                        }}><FontAwesomeIcon icon={faRightLong} size="lg" /></Button></p>
                    </div>
                    <div style={{
                        width: '900px', height: '900px', textAlign: 'left', backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://github.com/i-am-not-kangjik/no_Yongsan_yes_Doksan/blob/main/FE/shop/src/img/mac%201.png?raw=true)`,
                    }}>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url()`,
                    backgroundColor: '#BFEAFF'
                }}>
                    <div style={{ width: '', textAlign: 'left', marginBottom: '200px' }}>
                        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>전자기기 중고 가격 산정, 고민 해결</h1>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>용산위에 독산</p>
                    </div>
                    <div style={{
                        width: '50%', height: '100%', textAlign: 'left', backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp)`,
                    }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url()`,
                    backgroundColor: '#BFEAFF'
                }}>
                    <div style={{ width: '', textAlign: 'left', marginBottom: '200px' }}>
                        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>전자기기 중고 가격 산정, 고민 해결</h1>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>용산위에 독산</p>
                    </div>
                    <div style={{
                        width: '50%', height: '100%', textAlign: 'left', backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp)`,
                    }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url()`,
                    backgroundColor: '#BFEAFF'
                }}>
                    <div style={{ width: '', textAlign: 'left', marginBottom: '200px' }}>
                        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>전자기기 중고 가격 산정, 고민 해결</h1>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>용산위에 독산</p>
                    </div>
                    <div style={{
                        width: '50%', height: '100%', textAlign: 'left', backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp)`,
                    }}>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}