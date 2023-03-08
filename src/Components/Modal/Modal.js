import './Modal.css'
const Modal = ({modal, togglemodal}) => {
    return ( 
        <div className="modal-background" onClick={togglemodal}>
            <div className="modal">
                <p className="modal-information">Feature is not available yet. Coming Soon</p>  
                <button className="modal-close" onClick={togglemodal}>OK</button>          
            </div>
        </div>
    );
}
 
export default Modal;