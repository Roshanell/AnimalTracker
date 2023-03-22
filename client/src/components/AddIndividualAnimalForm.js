import { useState } from "react";

function AddIndividualAnimalForm(props) {
	const [individualAnimal, setIndividualAnimal] = useState({
		nickname: "",
		species: "",
		numbersinthewild: "",
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

	const handleSpeciesChange = (e) => {
		e.preventDefault();
		let newSpeciesName = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			species: newSpeciesName,
		}));
	};
	const handleNumbersInWild = (e) => {
		e.preventDefault();
		let newNumbersIntheWild = e.target.value;
		setIndividualAnimal((individualAnimal) => ({
			...individualAnimal,
			numbersinthewild: newNumbersIntheWild,
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
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIndividualAnimal(individualAnimal);
		console.log(individualAnimal);
		props.postIndividualAnimal(individualAnimal);
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
				onChange={handleSpeciesChange}
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
