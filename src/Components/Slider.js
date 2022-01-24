import React from 'react'
import "../Stylesheet/Slider.css"
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'
import SwiperCore, {
    Navigation
  } from 'swiper';
SwiperCore.use([Navigation]);

function Slider() {
    return (
        <>
            <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
                <img src='https://static-exp1.licdn.com/sc/h/dbvmk0tsk0o0hd59fi64z3own'/>
                <div className='txt-slide'>
                <h3>Çalışmaya açık olduğunuzu, doğru kişilerin bilmesini sağlayın</h3>
                <h5>Çalışmaya Açık özelliği ile, yeni iş fırsatları aradığınızı kariyer uzmanlarına gizli olarak
                bildirebilir veya LinkedIn topluluğunuzla herkese açık olarak paylaşabilirsiniz.</h5>        
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://static-exp1.licdn.com/sc/h/2r8kd5zqpi905lkzsshdlvvn5'/>
                <div className='txt-slide'>
                <h3>Bugün yaptığınız görüşmeler, yarın için yeni fırsatlar oluşturabilir.</h3>
                <h5>Tanıdığınız kişilere mesaj göndermek, kariyerinizdeki bir sonraki adımı atarken 
                ilişkilerinizi güçlendirmek için harika bir yöntemdir.</h5>    
                </div>
            </SwiperSlide>
            <SwiperSlide className='lst'>
                <img src='https://static-exp1.licdn.com/sc/h/ann24vsq7r0ux3vipqa1n90gg'/>
                <div className='txt-slide'>
                <h3>Sektörünüzden haberdar olun</h3>
                <h5>LinkedIn‘de, sektörünüzdeki en güncel konular hakkında bilgi sahibi olabilmeniz için
                canlı videolardan hikayelere ve haber bültenlerine kadar birçok yöntem mevcuttur.</h5>
                </div>
            </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
