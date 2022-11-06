import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function HomePage() {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
				<meta name="description" content="My home page" />
				<link rel="canonical" href="/home" />
			</Helmet>
			<Navbar />
			<section className="homeSection">
				<h1 className="homeText">Welcome to the Home Page</h1>
			</section>
			<Footer />
		</>
	);
}

export default HomePage;