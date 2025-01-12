import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import LoginPage from '../Login page/LoginPage';
import './style.css';
import SignUp from '../SignUp page/SignUp';
import OTPPage from '../OPTPage/OTPPage';

export default function Wrapper() {
    return (
        <div>
            <header>
                <h1 id="webtitle">website name and logo</h1>
            </header>
            <div className="container">
                <div className="wrapper">
                    <div className="animationcard">
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="/images/user-2.jpg" alt="img" /></SwiperSlide>
                            <SwiperSlide><img src="/images/user-3.jpg" alt="img" /></SwiperSlide>
                            <SwiperSlide><img src="/images/user-4.jpg" alt="img" /></SwiperSlide>
                            <SwiperSlide><img src="/images/user-5.jpg" alt="img" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <Router>
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/otp" element={<OTPPage />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}
