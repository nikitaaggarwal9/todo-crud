import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./redux/store"; // Import the store and persistor

import "./index.css";

const BaseApp = () => (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(<BaseApp/>, document.getElementById('root'));