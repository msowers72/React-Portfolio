import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
	return (
		<div>
			<div className="navbar">
				<a
					// if this is the current page, set to active link otherwise just be a nav-link
					className={
						currentPage === "Home" ? "nav-link active" : "nav-link"
					}
					href="#home"
					onClick={() => handlePageChange("Home")}
				>
					Home
				</a>
				<a
					className={
						currentPage === "About" ? "nav-link active" : "nav-link"
					}
					href="#about"
					onClick={() => handlePageChange("About")}
				>
					About
				</a>
				<a
					className={
						currentPage === "Portfolio"
							? "nav-link active"
							: "nav-link"
					}
					href="#portfolio"
					onClick={() => handlePageChange("Portfolio")}
				>
					Portfolio
				</a>
				<a
					className={
						currentPage === "Resume"
							? "nav-link active"
							: "nav-link"
					}
					href="#resume"
					onClick={() => handlePageChange("Resume")}
				>
					Resume
				</a>
				<a
					className={
						currentPage === "Contact"
							? "nav-link active"
							: "nav-link"
					}
					href="#contact"
					onClick={() => handlePageChange("Contact")}
				>
					Contact
				</a>
			</div>
		</div>
	);
}
