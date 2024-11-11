import React from "react";
import "./Hero.css";
import group from '../../assets/group.jpg'

export default function Hero() {
    return (
        <div>
            <div className="row col-12 pt-5">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="hero-head">
                        Color Digitally With Imagination Palette
                    </h1>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
                    <p className="hero-para">
                        We are digital magicians, turning ideas into compelling designs,
                        driving change and creating real impact.
                    </p>
                </div>
            </div>
            <div className="row col-12 mx-auto ">
                <div className="col-lg-2 col-sm-12 d-flex justify-content-center flex-lg-column flex-sm-row mx  -sm-2 mx-lg-0">
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Clients</h6></div>
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Clients</h6></div>
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Clients</h6></div> 
                </div>
                <div className="col-lg-10 col-sm-12 d-flex justify-content-center align-items-center" style={{ position: "relative" }}>
                    <img src={group} className="group-img" alt="Group" />
                    {/* <div className="rotate-div"></div> */}
                </div>
            </div>
        </div>
    );
}
