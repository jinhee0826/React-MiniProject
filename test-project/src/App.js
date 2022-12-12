import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavComp from "./components/NavComp";
import NavbarComp from "./components/NavbarComp";
import CardComp from "./components/CardComp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faHeart as cleanHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faHeart as fullHeart,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 슬라이더에 보여지는 화면 창
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="App">
      <NavbarComp />
      <h1>제목</h1>
      <CardComp />
      <Button
        as="a"
        variant="primary"
        onClick={() => {
          alert("클릭");
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon icon={cleanHeart} />
      </Button>
      <Container>
        <Row>
          <Col xs>1 of 3</Col>
          <Col>Variable width content</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="px-5">
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon 
    icon={fullHeart} 
    onClick={onClick} 
    className={className}
    style={{color:"red"}}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}