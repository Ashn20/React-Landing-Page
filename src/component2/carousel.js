import Carousel from 'react-bootstrap/Carousel';
import  Img1  from '../images/sofa.jpeg';
import Img2 from '../images/Table.jpeg'
import Img3 from '../images/chair.jpeg'
 
function Caro() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Sofa</h5>
          <p>Soft and Most Comfortable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Table</h5>
          <p>Compact and Strong.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Chair</h5>
          <p>
            Flexible and Elegant.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;