import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FullPageLoading } from "./Components/Common/Loading/FullPageLoading/FullPageLoading";
import { Provider } from 'react-redux'
import store from "../src/Components/LandingHolder/LandingComponents/zzReduxSection/redux/stores/store"

const App = lazy(() => import("./App/App"));

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<FullPageLoading />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
