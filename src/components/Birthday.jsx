import React, { useState,useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './birthday.css';
import song from './song.mp3';
import { ReactFloatingBalloons } from 'react-floating-balloons';
import love from './images/love.jpeg';
import { Roll, Zoom } from 'react-reveal';
import Flash from 'react-reveal/Flash';
import { Card } from '@material-ui/core';
import Cards from './Cards';
import cake from './images/cake.jpg';
import Sdata from './Sdata';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Spin from 'react-reveal/Spin';
// import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';
import RubberBand from 'react-reveal/RubberBand';
import BootstrapButton from './BootstrapButton';
import './birthday.css';
import jiya from './images/jiya.jpg';

export default () => {
  const { width, height } = useWindowSize();
  const [celebrate,setcelebrate] = useState(false);
  const [audio,setaudio] = useState(new Audio(song));
  // const result = await FlyingHearts.multiply(3, 7);
  
  useEffect(() => {
    console.log(celebrate);
    return celebrate? audio.play():audio.pause();
  },[celebrate])
  

  return (
    <>
      <div className='mycontainer'>   
    
    {
      celebrate?    
      <>
        {/* {result}. */}
        <Confetti
        width={width}
        height={height}
        // wind={0.1}
        // friction={1}
        // initialVelocityX={10}
        // initialVelocitY={500}
        />
         <ReactFloatingBalloons
        count={9}
        msgText={"Jiyuu"}
        colors={['yellow', 'green', 'blue', 'red', 'orange', 'purple']}
        popVolumeLevel={0.1}
        />

      {/* <Zoom>
      <Card sx={{ minWidth: 275 }}>
        <Roll left>
          <h1 className='heading'>Happy birthday Jiyuu</h1>
        </Roll>
        <img src={cake} alt="" />
      <img src={love} alt="love" />
      </Card>
      </Zoom> */}
      <Rotate top right delay={20000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[0].imgsrc} sname={Sdata[0].sname} id={Sdata[0].id}/>
        </Rotate>
        <Bounce right delay={5000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[1].imgsrc} sname={Sdata[1].sname} id={Sdata[1].id}/>
        </Bounce>
        <Slide top delay={15000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[2].imgsrc} sname={Sdata[2].sname} id={Sdata[2].id}/>
        </Slide>
        <Bounce left delay={10000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[3].imgsrc} sname={Sdata[3].sname} id={Sdata[3].id}/>
        </Bounce>
        <Zoom delay={0} duration={2000}>
            <Cards key={1} imgsrc={jiya} sname={Sdata[4].sname} id={Sdata[4].id}/>
            {/* <Card sx={{minwidth: 275}} style={{width:'300px',height:'300px'}}>
              <img src={jiya} alt="jiyaa_image" style={{width:'100%',display:'block',margin:'auto'}}/>
              <h1>Happy birthday jiyuu</h1> */}
            {/* </Card> */}
        </Zoom>
        
        <Roll delay={35000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[5].imgsrc} sname={Sdata[5].sname} id={Sdata[5].id}/>
        </Roll>
        <Zoom delay={40000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[6].imgsrc} sname={Sdata[6].sname} id={Sdata[6].id}/>
        </Zoom>
        <Bounce top delay={25000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[7].imgsrc} sname={Sdata[7].sname} id={Sdata[7].id}/>
        </Bounce>
        <Zoom delay={30000} duration={2000}>
            <Cards key={1} imgsrc={Sdata[8].imgsrc} sname={Sdata[8].sname} id={Sdata[8].id}/>
        </Zoom>
      </>
      :<>
        <div className='fist_div'>
         <h1 className='first_header'> Here is a surprise for you sweetie 😼</h1>
         {/* <button onClick={()=>{setcelebrate((old)=> !old)}}>{ celebrate?'Pause':'Play'}</button> */}
         <BootstrapButton style={{display:'block',margin:'auto'}} onClick={()=>{setcelebrate((old)=> !old)}} variant="contained" disableRipple>{celebrate?'Pause':'Play'}</BootstrapButton>
        </div>
      </>
    }
      </div>
    </>
  )
}