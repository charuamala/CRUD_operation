import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
	// Making usestate for setting and
	// fetching a value in jsx
	const [name, setname] = useState("");
	const [age, setage] = useState("");

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) => {
		e.preventDefault(); // Prevent reload

		const ids = uuid(); // Creating unique id
		let uni = ids.slice(0, 8); // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = name,
			b = age;
		if (name === "" || age === "") {
			alert("invalid input");
			return;
		}
		array.push({ id: uni, Name: a, Age: b });

		// Redirecting to home page after creation done
		history("/");
	};

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				{/* Fetching a value from input textfirld 
					in a setname using usestate*/}
				<input 
					type="text" 
					className="mb-3"
					placeholder="Enter Name"
					value={name}
					onChange={(e) => setname(e.target.value)}
					/>
					<input 
					className="mb-3"
					type="number" 
					placeholder="Age"
					value={age}
					onChange={(e) => setage(e.target.value)}
					/>
				
				

				{/* handing a onclick event in button for
					firing a function */}
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to="/">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Create;
