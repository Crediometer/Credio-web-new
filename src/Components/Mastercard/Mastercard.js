import './Mastercard.css';
import mastercard from '../../assets/image/mastercard.png';
import chip from '../../assets/image/cardchip.png';
const Mastercard = () => {
    return ( 
        <div className="mastercard">
            <div className="card-top">
                <div className="master-card">
                    <img src={mastercard}></img>
                </div>
                <div className="card-chip">
                    <img src={chip}></img>
                </div>
            </div>
            <div className="amount">
                <p>₦ 1.250,69</p>
            </div>
            <div className="card-name">
                <p>Micheal</p>
            </div>
        </div>
    );
}
 
export default Mastercard;