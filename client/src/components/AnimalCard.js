const AnimalCard = (props) => {
	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body items-center text-center">
					<h2 className="card-title">{props.nickname}</h2>
					<p>{props.species}</p>
					<p>{props.numbersinthewild}</p>
					<p>{props.date}</p>
					{/* <p>{props.time}</p> */}
					<div className="card-actions">
						<button className="btn btn-primary">Delete?</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimalCard;
