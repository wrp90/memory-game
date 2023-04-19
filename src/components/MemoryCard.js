import "./MemoryCard.css";
import '../App.css';

const MemoryCard = ({symbol, isFlipped, pickCard}) => {
    const memoryCardInnerClass = isFlipped ? "MemoryCardInner flipped": "MemoryCardInner";
    return (
        <div className="MemoryCard" onClick={pickCard}>
            <div className={memoryCardInnerClass}>
                <div className="MemoryCardBack">
                    <img className="LogoBack" src="https://d6rlxajeumvxd.cloudfront.net/images/logos/dc-logo.svg"></img>
                </div>
                <div className="MemoryCardFront">
                    {symbol}
                </div>
            </div>
        </div>
    )
};


export default MemoryCard;
