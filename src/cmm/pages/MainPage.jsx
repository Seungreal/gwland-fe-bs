import React from "react";
import {Banner,Dest,Counter,About,Recom,Testimonial,Gallery,Latest,Subscribe} from './index'

export const MainPage = () => {
    return <>
        <div className="content-body">
            <Banner/>
            <Dest/>
            <Counter/>
            <About/>
            <Recom/>
            <Gallery/>
            <Subscribe/>
        </div>
    </>
}