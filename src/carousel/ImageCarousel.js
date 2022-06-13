import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';
import { CarouselData } from './CarouselData';

function ImageCarousel() {
    
return(
<Carousel>
    {
        CarouselData.map((imageData,index)=>{
            return(
                <Carousel.Item>
                <img key = {index} src = {imageData.image} className='carousel-image' alt=""/>
                </Carousel.Item>   
            )
        })
    }
</Carousel>
)

}
export default ImageCarousel;