import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function CounterPage() {
	return (
		<>
			<Helmet>
				<title>Counter Page</title>
				<meta name="description" content="Custom hook task is executed on this page" />
				<link rel="canonical" href="/counter" />
			</Helmet>
			<Navbar />
			<Counter />
			<Footer />
		</>
	);
}

export default CounterPage;