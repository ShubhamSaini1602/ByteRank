import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import "swiper/css";


function Marquee(){
    return (
        <>
        <div>
            <p className="marquee-text">Trusted by developers and interview preppers from:</p>
        </div>
        <div className="company">
            <Swiper
            modules={[Autoplay]}
            spaceBetween={150}
            slidesPerView={"auto"}
            loop={true}
            speed={2500}
            autoplay={{
                delay:0,
                disableOnInteraction:false,
                reverseDirection:true
            }}
            allowTouchMove={false}
            >
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/google.png" className="swiper-img"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/amazon.png" className="swiper-img amazon"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/oracle.png" className="swiper-img oracle"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/salesforce.png" className="swiper-img"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/facebook.png" className="swiper-img facebook"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/netflix.png" className="swiper-img"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/cisco.png" className="swiper-img cisco"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/adobe.png" className="swiper-img adobe"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/spotify.png" className="swiper-img spotify"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/dell.png" className="swiper-img dell"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/intel.png" className="swiper-img intel"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/nvidia.png" className="swiper-img nvidia"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/flipkart.png" className="swiper-img flipkart"></img>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-content">
                    <img src="../src/assets/zomato.png" className="swiper-img zomato"></img>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default Marquee;