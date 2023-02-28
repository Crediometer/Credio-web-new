import './Savingcard.css'
const SavingCard = () => {
    return ( 
        <div className="savingcard">
            <div className="savingcard-top">
                <p className="saving-card-name">Saving Plan #1</p>
                <p className="saving-card-type">(regular)</p>
            </div>
            <p className="saving-card-amount">₦ 0.00</p>
            <div className="savingcard-bottom">
                <p className="saving-card-payday">Monthly save</p>
                <p className="saving-card-type">Next ₦1100 save in 12 days</p>
            </div>
        </div>
    );
}
 
export default SavingCard;