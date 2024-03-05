import React from 'react';
import "./bodypage.css";

export default function BodyPage(){
    return (
        <div className="body-container">
            <div className="hero-content">
                <h1>Your feet deserve the best</h1>
                <p>
                    You Feet deserve the best and we're here to help you with our shoes.Your feet deserve the best and we're here to help you with our shoes.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shoping">
                    <p>Also Available On</p>
                </div>
                <div className="shoping-icon">
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>

        </div>
    );
};