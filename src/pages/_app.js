import { Provider } from "react-redux";
import { store } from "../app/store";
import "@fortawesome/fontawesome-free/css/all.css";

import "../styles/globals.css";
import { Header, Footer } from "./../components";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			{/* header */}
			<Header />
			<Component {...pageProps} />
			{/* Footer */}
			<Footer />
		</Provider>
	);
};

export default MyApp;
