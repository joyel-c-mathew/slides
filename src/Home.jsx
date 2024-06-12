import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import image from '../src/assets/mi.png'




function Home() {
  return (
    <>

<div>
  <div>
<h1 style={{fontWeight:'bold',color:'lightblue',display:'flex',justifyContent:'center', marginTop:'5rem'}}> hello welcome user !</h1>
</div>
<Carousel>
      <Carousel.Item>
   


      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={image} alt="" style={{ width: '50%', height: '50%', margin: 'auto', borderRadius:'4rem', marginTop:'2rem' }} />
    </div>


        <Carousel.Caption>
    
        <p style={{fontWeight:'bold ', fontSize:'1.5rem',color:'orange'}}>how are you? </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={image} alt="" style={{ width: '50%', height: '50%', margin: 'auto', borderRadius:'4rem'  }} />
    </div>
        <Carousel.Caption>
     
         
        <p style={{fontWeight:'bold ', fontSize:'1.5rem',color:'orange'}}>how are you? </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={image} alt="" style={{ width: '50%', height: '50%', margin: 'auto', borderRadius:'4rem'  }} />
    </div>
        <Carousel.Caption>
       
          <p style={{fontWeight:'bold ', fontSize:'1.5rem', color:'orange'}}>how are you? </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    </>
  )
}

export default Home