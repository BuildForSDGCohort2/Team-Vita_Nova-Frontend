import { combinedReducer } from "redux";
import auth from "./authReducer";
import signup from "./signUpReducer";
import distributors from "./distributorReducer";

const rootReducer = combinedReducer({
  auth,
  signup,
  distributors,
});

export default rootReducer;
