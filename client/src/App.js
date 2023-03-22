import "./App.css";
import Students from "./components/students";
import IndividualAnimalForm from "./components/individualAnimalForm";

function App() {
	return (
		// <div className="App">
		//   Hello from Techtonica!
		//   <Students />
		// </div>
		<div>
			<div className="mockup-phone border-primary overflow-scroll">
				<div className="camera"></div>
				<div className="display">
					<div className="artboard artboard-demo phone-1">
						form information goes here scroll down to see results of input
            <IndividualAnimalForm />
					</div>
				</div>
			</div>
			<Students />
		</div>
	);
}

export default App;
