import React from "react";

import "../index.css";

function ErrorComp() {
	const throwErrorHandler = () => {
		throw new Error("=====ERROR======");
	};

	return (
		<section style={{ minHeight: "85vh" }}>
			<h1 style={{ textAlign: "center" }}>Testing Error Boundary!</h1>
			<button className="errorBtn" onClick={throwErrorHandler}>
				Click to throw error
			</button>
		</section>
	);
}

export default ErrorComp;