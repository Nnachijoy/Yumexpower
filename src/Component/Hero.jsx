import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import First from '../assets/First.pdf';
import Second from '../assets/Second.pdf';
import Third from '../assets/Third.pdf';
import Fourth from '../assets/Fourth.pdf';
import Five from '../assets/Five.pdf';
import Six from '../assets/Six.pdf';
import Eight from '../assets/Eight.pdf';
import Ten from '../assets/Ten.pdf';
import vectorarrow from '../assets/vectorarrow.png';

import solarroof from '../assets/solarroof.png';
import cocacola from '../assets/cocacola.jpg';
import crossriver from '../assets/crossriver.jpg';
import daewoo from '../assets/daewoo.jpg';
import dora from '../assets/dora.jpg';
import ebsu from '../assets/ebsu.jpg';
import heineken from '../assets/heineken.jpg';
import hybrid from '../assets/hybrid.jpg';
import lng from '../assets/lng.jpg';
import mrbiggs from '../assets/mrbiggs.jpg';
import nenogfarms from '../assets/nenogfarms.jpg';


function HeroSection() {

  return (

    <div style={{marginTop:'40px'}} className='rows'>


{/* <Col md={4} xs={6}>
      <div>
        <h2 className='d-flex fw-bolder'>YUMEXZ SOLAR ROOF TILES</h2>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Data Sheet Claims</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Durability, Efficiency, and Aesthetics</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Solar Roof and Tiles Product Overview</h6>
          </div>

          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Aesthetics and Property Value</h6>
          </div>

          
          <div className="d-flex align-items-center">
            <img src={vectorarrow} alt="vectorarrow" style={{ marginRight: '10px' }} />
            <h6 style={{ margin: '0' }}>Conclusion and Key Points</h6>
          </div>
        </a>
      </div>
    </Col> */}
       
    <Row className='pdf-images'>
    <Col md={6} xs={6}>
      <div>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={solarroof} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>

    <Col md={6} xs={6}>
      <div>
        <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold'>
          <div className="d-flex align-items-center">
            <img src={solarroof} alt="rooftiles"  className='w-100'/>
          </div>
        </a>
      </div>
    </Col>
   


</Row>

{/* <Row className='mt-3'>
  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={suntracker} alt="yumexzsuntracker" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>

  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={solarcarports} alt="yumexzsolarcarports" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>
</Row>

<Row className='mt-3'>
  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={evconversion} alt="yumexzevconversion" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>

  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={smartmeter} alt="yumexzsmartmeter" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>
</Row>

<Row className='mt-3'>
  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={backupstorage} alt="yumexzbackup" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>

  <Col md={6} xs={6}>
    <div>
      <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
        <div className='d-flex'>
          <img src={solarenergy} alt="yumexzsolarenergy" className='mt-1 pdf-images'/>
        </div>
      </a>
    </div>
  </Col>
</Row> */}





      <div>
        <div className='fw-bolder text-center ' style={{fontSize:'50px',  fontFamily: 'Lucida Handwriting', marginTop:'80px'}}>
          Supported by
        </div>

        <Row className='mt-5'>
          <Col>
            <img src={crossriver} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={cocacola} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={ebsu} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col className='d-flex align-items-center'>
            <img src={dora} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <img src={hybrid} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={daewoo} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={lng} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>

          <Col>
            <img src={heineken} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>
        </Row>

    <Row className='mt-5 d-flex justify-content-center'>
      <Col md={6} xs={6} className='d-flex justify-content-center'>
        <img src={mrbiggs} alt="Coca Cola" className='mt-1 img-fluid w-50' />
      </Col>
      <Col md={6} xs={6} className='d-flex justify-content-center'>
        <img src={nenogfarms} alt="Coca Cola" className='mt-1 img-fluid w-50' />
      </Col>
    </Row>



        {/* <Row className='mt-5 d-flex justify-content-center'>
          <Col xs={4} md={3}>
            <img src={mrbiggs} alt="cocacola" className='mt-1 img-fluid w-100' />
          </Col>
          <Col xs={4} md={3}>
            <img src={nenogfarms} alt="cocacola" className='mt-1 mx-5 img-fluid w-100' />
          </Col>
        </Row> */}
      </div>
    </div>
    
  );
}

export default HeroSection;
