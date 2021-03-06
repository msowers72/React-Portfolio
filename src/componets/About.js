import React from "react";

export default function About() {
  return (
    <div>
			<div className="px-4 py-5 my-5 text-center">
        <img 
        className="d-block mx-auto mb-4 profileImage"
        src="img/mike.jpg"
         alt=""
          />
				<h1 className="display-5 fw-bold">About</h1>
				<div className="col-lg-6 mx-auto">
					<p>
					Full Stack Web Developer with a background in the Financial Services Industry and life-long dedication to learning. Effective at combining creativity and problem solving to develop user- friendly applications. Known among colleagues for strong wit and attention to detail no matter the complexity of the project.
					</p>
				</div>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					{/* <button className="btn btn-primary btn-lg px-4 gap-3">
						Button
					</button>
					<button className="btn btn-outline-secondary btn-lg px-4 gap-3">
						Button
					</button> */}
				</div>
			</div>
		</div>





  );
}
