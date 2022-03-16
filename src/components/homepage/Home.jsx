import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";
import './homepage.css';
import { Zoom } from "react-reveal";
function Home(){
    return (
        <>
        {/* <h1 className="Heading"> Best 5 web-series on netflix </h1> */}
        <div className="mycontainer">
        {/* {Sdata.map((val) => <Card key={val.id} imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />)} */}

        <Zoom>
            <Card key={1} imgsrc={Sdata[0].imgsrc} sname={Sdata[0].sname}/>
        </Zoom>
        <Zoom delay={1000}>
            <Card key={1} imgsrc={Sdata[1].imgsrc} sname={Sdata[1].sname}/>
        </Zoom>
        <Zoom delay={2000}>
            <Card key={1} imgsrc={Sdata[2].imgsrc} sname={Sdata[2].sname}/>
        </Zoom>
        <Zoom delay={3000}>
            <Card key={1} imgsrc={Sdata[3].imgsrc} sname={Sdata[3].sname}/>
        </Zoom>
        <Zoom delay={4000}>
            <Card key={1} imgsrc={Sdata[4].imgsrc} sname={Sdata[4].sname}/>
        </Zoom>
        
        <Zoom delay={5000}>
            <Card key={1} imgsrc={Sdata[5].imgsrc} sname={Sdata[5].sname}/>
        </Zoom>
        <Zoom delay={6000}>
            <Card key={1} imgsrc={Sdata[6].imgsrc} sname={Sdata[6].sname}/>
        </Zoom>
        <Zoom delay={7000}>
            <Card key={1} imgsrc={Sdata[7].imgsrc} sname={Sdata[7].sname}/>
        </Zoom>
        <Zoom delay={8000}>
            <Card key={1} imgsrc={Sdata[8].imgsrc} sname={Sdata[8].sname}/>
        </Zoom>
        </div>
        </>
    );
}
export default Home;