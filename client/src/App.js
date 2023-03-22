import "./App.css";
import Animals from "./components/Animals";
import AnimalCard from "./components/AnimalCard";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	// state for all of the animals
	const [animals, setAnimals] = useState([]);
	// this is here to get the animals
	useEffect(() => {
		fetch("http://localhost:8081/api/animals")
			.then((response) => response.json())
			.then((fetchedAnimals) => {
				setAnimals(fetchedAnimals);
				console.log("animals fetched...", fetchedAnimals);
			});
	}, []);
	return (
		<div>
			<div className="mockup-phone border-primary overflow-scroll">
				<div className="camera"></div>
				<div className="display">
					<div className="artboard artboard-demo phone-1">
						form information goes here scroll down to see results of input
						{/* <AddIndividualAnimalForm /> */}
						<Animals />
					</div>
				</div>
			</div>
			{animals.map((animal) => (
				<AnimalCard
					key={animal.id}
					nickname={animal.nickname}
					species={animal.species}
					numbersinthewild={animal.numbersinthewild}
					date={animal.dateadded}
				/>
			))}
			{/* <Students /> */}
		</div>
	);
}

export default App;
