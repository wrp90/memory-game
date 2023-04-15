import React, { useState } from "react";
import "./MemoryCard.css";
import '../App.css';

const MemoryCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const clickHandler = () => {
        setIsFlipped(!isFlipped)
    }
    const memoryCardInnerClass = isFlipped ? "MemoryCardInner flipped": "MemoryCardInner";

    return (
        <div className="MemoryCard" onClick={clickHandler}>
            <div className={memoryCardInnerClass}>
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
