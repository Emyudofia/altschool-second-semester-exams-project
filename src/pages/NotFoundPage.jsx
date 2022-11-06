import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>404 Page</title>
				<meta
					name="description"
					content="Page not found. Please go back to the home page."
				/>
				<link rel="canonical" href="/*" />
				<meta name="robots" content="noindex" />
			</Helmet>
			<Navbar />
			<section className="homeSection">
				<h1 className="homeText">404, Page Not Found!</h1>
			</section>
			<Footer />
		</>
	);
}

export default NotFoundPage;