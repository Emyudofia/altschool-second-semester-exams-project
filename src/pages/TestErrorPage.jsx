import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorComp from "../components/ErrorComp";

function TestErrorPage() {
	return (
		<>
			<Helmet>
				<title>Error Boundary Page</title>
				<meta
					name="description"
					content="Testing error boundary page"
				/>
				<link rel="canonical" href="/test-errorboundary" />
			</Helmet>
			<Navbar />
			<ErrorComp />
			<Footer />
		</>
	);
}

export default TestErrorPage;