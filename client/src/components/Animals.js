import { useState, useEffect } from "react";
import AddIndividualAnimalForm from "./AddIndividualAnimalForm";

const Animals = () => {


	

	// A function to handle the post request
	const postIndividualAnimal = (newAnimal) => {
		return fetch("http://localhost:8081/api/animals", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newAnimal),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("From the post in the frontEnd", data);
				// animals((setAnimals) => [...animals, data]);
			});
	};
	return (
		<div>
			<AddIndividualAnimalForm postIndividualAnimal={postIndividualAnimal} />
		</div>
	);
};

export default Animals;
