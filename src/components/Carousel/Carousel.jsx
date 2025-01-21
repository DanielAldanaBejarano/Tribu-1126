import Carousel from "react-bootstrap/Carousel";
import Carousel_Img_1 from "../../assets/carousel_img_1.jpg";

function CarouselSection() {
  return (
    <div className="carousel-div text-center">
        <h1 className="m-5"> Nuestro Viaje Juntos </h1>
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img src={Carousel_Img_1} text="First slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img className="h-50" src={Carousel_Img_1} text="Second slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img className="h-50" src={Carousel_Img_1} text="Third slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
