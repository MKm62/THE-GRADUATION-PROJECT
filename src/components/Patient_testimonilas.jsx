import React from 'react'
import './Patient_testimonials.css'
import "./services.css";
import Card from 'react-bootstrap/Card';
import t1 from '../assets/images/Testimonials1png.png';
import t2 from '../assets/images/T2.png';
import t3 from '../assets/images/T3.png';
import t4 from '../assets/images/T4.png';
import t5 from '../assets/images/T5.png';
import t6 from '../assets/images/T6.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row } from 'react-bootstrap';
import quote from '../assets/images/quote.png'
import stars from '../assets/images/.png'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: 'blue', // Change the color here
          fontSize: '20px',
          zIndex: 2,
          marginLeft: '-30px'
        }}
        onClick={onClick}
      >
        ❮
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          color: 'blue', // Change the color here
          fontSize: '20px',
          zIndex: 2,
        }}
        onClick={onClick}
      >
        ❯
      </div>
    );
  };



function Patient_testimonilas() {
  const data=[{
    name:'John Morgan',
    job:'product manager',
    img: t1,
    review:'Dr. Emily was incredible—so attentive and knowledgeable. The medical website made booking an appointment super easy, and the follow-up reminders were a lifesaver. Highly recommend both the doctor and the platform!'},
  {name:'Ahmed Abdelfattah',job:'Makwagist',img:t6,review:'EL Khedma fol l fol wl dacatra top el top'},
  {name:'Sarah Johnson',job:'Marketing Specialist',img: t2 ,review:'Dr. Patel was fantastic! The websites patient portal allowed me to access my test results instantly. It’s so convenient and efficient!'},
  {name:'Ahmed Khan',job:' Software Developer',img: t3,review:'I appreciated how clear the website was about the doctor specialties. Dr. Hassan explained everything thoroughly and made me feel comfortable. Great experience overall!'},
  {name:'Maria Lopez',job:'Teacher',img:t4,review:'I was skeptical at first, but Dr. Nguyen and the website both exceeded my expectations. The video consultation feature saved me a trip, and the advice was spot-on'},
  {name:'James Carter',job:'Business Owner',img:t5,review:'From scheduling to post-visit care, the experience was seamless. Dr. Li was kind and professional, and the website design is very user-friendly!'}];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };
 
 
  return (
      <div>
          <div className="services-section-title title1 ">
              <h4 className='services-section-main-title'>Patient Testimonials</h4>
              <h6 className='services-section-subtitle subtitle1'>Our patients most valuable reviews and feedback for their experiences with doctors and the utilities provided by our site.</h6>
          </div>
          <div>
          <Slider {...settings} className='ss'>
            {
                data.map((d) => {
                    return(
                        <Card style={{ width: '8rem'}} className='carddd' >
                        <div className='d-flex'>
                        <div className='mx-3 mt-2 con' >
                        <Card.Img variant="top" src={d.img} className='rounded-circle iconn mb-2'/>
                        <Card.Title className='ct'>{d.name}</Card.Title>
                        <Card.Subtitle className='mb-2 cst '>{d.job}</Card.Subtitle>
                        </div>
                        <div className='w-auto mt-2 me-2  rating'>
                        <Card.Img variant="top" src={quote} className='mb-4 ms-4' style={{width:'30px'}}/>
                        <Card.Img variant="top" src={stars} className=''/>
                        </div>
                        </div>
                        
                        <Card.Body className='testcards'>
                            <Card.Text>{d.review}</Card.Text>
                        </Card.Body>
                    </Card> 
                    )
                })
            }
            </Slider>

          </div>

       </div>
       
  )
}

export default Patient_testimonilas