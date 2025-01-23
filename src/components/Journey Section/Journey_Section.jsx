import Carousel from "react-bootstrap/Carousel";
import Carousel_Img_1 from "../../assets/carousel_img_1.jpg";
import './Journey_Section.css'


function CarouselSection() {
  return (
    <div className="carousel-div text-center">
        <h1 className="my-4"> Nuestro viaje juntos se compone de 4 etapas</h1>
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img src={Carousel_Img_1} text="First slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h2>Etapa 1 </h2>
            <h6>Primavera</h6>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img className="h-50" src={Carousel_Img_1} text="Second slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h2>Etapa 2</h2>
            <h6>Siembra</h6>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img className="h-50" src={Carousel_Img_1} text="Third slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h2>Etapa 3</h2>
            <h6>Solsticio</h6>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="text-center">
            <img className="h-50" src={Carousel_Img_1} text="Third slide" />
          </div>
          <Carousel.Caption className="mt-0">
            <h2>Etapa 4</h2>
            <h6>Equinoccio</h6>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
