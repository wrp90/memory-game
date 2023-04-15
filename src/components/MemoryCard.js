import React from "react";
import "./MemoryCard.css";
import '../App.css';

const MemoryCard = () => {
    return (
        <div className="MemoryCard">
            <div className="Memory-Card-Inner">
                <div className="MemoryCardBack">
                    <img className="LogoBack" src="https://d6rlxajeumvxd.cloudfront.net/images/logos/dc-logo.svg"></img>
                </div>
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
    )
};


export default MemoryCard;
