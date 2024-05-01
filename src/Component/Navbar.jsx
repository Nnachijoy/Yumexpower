import React from 'react';
import yumexlogo from '../assets/yumexlogo.png';

function MyNavbar() {
  return (
    <>
      <div className="logo fw-bolder px-5" style={{ position: 'absolute', top: 0, left: 0 }}>
         <img src={yumexlogo} alt="yumexlogo" className='mt-1 img-fluid' style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className="contact-us fw-bolder px-5 mt-5 text-black"
       style={{ position: 'absolute', top: 0, right: 0, fontSize:'30px' }}>
      <p>
  <a className=' text-black'
   href="https://docs.google.com/forms/d/e/1FAIpQLScIdryo7J6Ub2nBe_ubp-6go3zIYRC-y8wfRhe5iSm6VhKbHQ/viewform?usp=pp_url">
    Contact Us
  </a>
</p>
      </div>

    <h3 className="fw-bolder p-0 yumex d-flex align-items-center justify-content-center"
      style={{
        marginTop: '140px',
        fontFamily: 'Lucida Handwriting',
       
      }}>
      YUMEXZ POWER CONSULTANCY
    </h3>


<div className='contact-us'>
  <p className='text-center m-auto mx-auto contact-us'>
    Contactus@yumexzpower.com<br/>
    +2348036568925, 09157604757</p>

</div>

    </>
  );
}

export default MyNavbar;
