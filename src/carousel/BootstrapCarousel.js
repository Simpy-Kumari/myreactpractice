import { Carousel } from 'react-bootstrap';
import './BootstrapCarousel.css';
function BootstrapCarousel() {
    
return(
<Carousel>
  <Carousel.Item>
    <img
      className="carousel"
      src="images/SkinCare.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="images/VehicleCare.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="images/MobileAccessories.jpg"
      alt="Third slide"
    /> 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="images/HeadPhoneSpeaker.jpg"
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
)

}
export default BootstrapCarousel;