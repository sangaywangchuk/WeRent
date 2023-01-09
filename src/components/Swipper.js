import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSwiper = (props) => {
  return (
    <Swiper pagination={Pagination} navigation={true} modules={[Navigation]} className="mySwiper">
      {
        props.sliderImages.map((image, index) => {
          return (<SwiperSlide key={index } >
            <img src={image} className={props.className} alt={image} style={{ objectFit: 'cover' }} />
          </SwiperSlide>)
        })
      }
    </Swiper>
  )
}

export default ImageSwiper;