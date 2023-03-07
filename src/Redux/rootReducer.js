import { combineReducers } from "redux";
import authReducer from "./Login/LoginReducer";
import depositReducer from "./Deposit/DepositReducer";
import profileReducer from "./Profile/ProfileReducer";
import transactionReducer from "./Transaction/TransactionReducer";
import banknameReducer from "./Bank/BankReducer";
import creditReducer from "./Credit/CreditReducer";

const rootReducer = combineReducers({
    login: authReducer,
    transaction: transactionReducer,
    bankname: banknameReducer,
    deposit: depositReducer,
    profile: profileReducer,
    credit: creditReducer
});

export default rootReducer;
