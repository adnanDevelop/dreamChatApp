import store from "./store";
import { Provider } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
