import './Mastercard.css';
import mastercard from '../../assets/image/mastercard.png';
import chip from '../../assets/image/cardchip.png';
import { connect } from 'react-redux';
import { fetchProfile } from '../../Redux/Profile/ProfileAction';
import { FormattedNumber, IntlProvider } from "react-intl";
const Mastercard = ({profileData, fetchProfile}) => {
    return (
           
        <div className="mastercard">
            {profileData && profileData?.profile && (
                <div className="mastercard-inner">
                    <div className="card-top">
                        <div className="master-card">
                            <img src={mastercard}></img>
                        </div>
                        <div className="card-chip">
                            <img src={chip}></img>
                        </div>
                    </div>
                    <div className="amount">
                        <IntlProvider>
                        {" "}
                        <p className="card-balance">
                        <FormattedNumber
                            value={
                            profileData?.profile?.message?.profile?.vaults
                                ?.accountBalance ?? 0
                            }
                            style="currency"
                            currency="NGN"
                        />
                        </p>
                        </IntlProvider>
                    </div>
                    <div className="card-name">
                        <p>{profileData?.profile?.message?.profile?.businessName ??"********"}</p>
                    </div>
                </div> 
            )}
        </div>
            
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      profileData: state.profile,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfile: () => dispatch(fetchProfile()),
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(Mastercard);