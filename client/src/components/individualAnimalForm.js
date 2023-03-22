import { useState } from "react";

function AddIndividualAnimalForm() {
	const [individualAnimal, setIndividualAnimal] = useState({
		nickname: "",
		scientificname: "",
		numbersInWild: "",
		date: "",
		time: "",
	});

	const handleNicknameChange = (e) => {
		e.preventDefault();
		let newNickName = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			nickname: newNickName,
		}));
	};

	const handleScientificNameChange = (e) => {
		e.preventDefault();
		let newScientificName = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			scientificname: newScientificName,
		}));
	};
	const handleNumbersInWild = (e) => {
		e.preventDefault();
		let newNumbersIntheWild = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			numbersInWild: newNumbersIntheWild,
		}));
	};
	const handleDateChange = (e) => {
		e.preventDefault();
		let newDate = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			date: newDate,
		}));
	};
	const handleTimeChange = (e) => {
		e.preventDefault();
		let newTime = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			time: newTime,
		}));
       // A function to handle the post request
        const postIndividualAnimal = (newAnimal) => {
        	return fetch("http://localhost:8080/api/individualAnimal", {
        		method: "POST",
        		headers: { "Content-Type": "application/json" },
        		body: JSON.stringify(newAnimal),
        	})
        		.then((response) => {
        			return response.json();
        		})
        		.then((data) => {
        			console.log("From the post in the frontEnd", data);
        			setIndividualAnimal((individualAnimal) => [...individualAnimal, data]);
        		});
        };
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIndividualAnimal(individualAnimal);
		console.log(individualAnimal);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Nickname"
				className="input input-bordered input-primary w-full max-w-xs"
				required
				value={individualAnimal.nickname}
				onChange={handleNicknameChange}
			/>
			<input
				type="text"
				placeholder="Scientific Name"
				className="input input-bordered input-primary w-full max-w-xs"
				onChange={handleScientificNameChange}
			/>
			<input
				type="number"
				placeholder="Numbers in the wild"
				className="input input-bordered input-primary w-full max-w-xs"
				onChange={handleNumbersInWild}
			/>

			<input
				type="date"
				className="input input-bordered input-primary w-full max-w-xs"
				onChange={handleDateChange}
			/>
			<input
				type="time"
				placeholder="Record Creation Time ??"
				className="input input-bordered input-primary w-full max-w-xs"
				onChange={handleTimeChange}
			/>

			<button className="btn btn-secondary" type="submit">
				Submit
			</button>
		</form>
	);
}

export default AddIndividualAnimalForm;
