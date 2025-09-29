import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";

function App() {
	function handleClick() {
		alert("I am Clicked!");
	}

	const handleClick3 = () => {
		alert("Clicked 3");
	};

	const handleAdd5 = (num) => {
		const newNum = num + 5;
		alert(newNum);
	};

	return (
		<>
			<h3>Vite + React</h3>

			<Counter></Counter>

			<Batsman></Batsman>

			{/* <button onClick="handleClick()">Click Me</button> */}
			{/* don't use first brackets when calling functions on a specific event, otherwise it will run without waiting for the event */}
			<button onClick={handleClick}>Click Me</button>
			<button
				onClick={function handleClick2() {
					alert("Clicked 2");
				}}
			>
				Click Me 2
			</button>
			<button onClick={handleClick3}>Click Me 3</button>
			<button onClick={() => alert("Clicked 4")}>Click Me 4</button>

			<button onClick={() => handleAdd5(10)}>Click Add 5</button>
		</>
	);
}

export default App;
