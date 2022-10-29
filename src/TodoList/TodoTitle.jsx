import React from "react";

export default function TodoTitle () {
	return (  
		<div className="row m-1 p-4">
		<div className="col">
				<div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
					<i className="bi bi-check-circle-fill rounded p-2"></i>
					<span className="card-title text-primary ms-2">To-do List</span>
				</div>
		</div>
	</div>
);
};