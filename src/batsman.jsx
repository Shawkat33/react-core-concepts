import { useState } from "react";

export default function Batsman() {
	// if no default value is passed to useState as argument, it will return undefined by default

	const [score, setScore] = useState(0);

	const [fours, setFours] = useState(0);
	const [sixes, setSixes] = useState(0);

	const handleSingles = () => {
		const updatedScore = score + 1;
		setScore(updatedScore);
	};

	const handleFour = () => {
		const updatedScore = score + 4;
		const updatedFours = fours + 1;
		setFours(updatedFours);
		setScore(updatedScore);
	};
	const handleSix = () => {
		const updatedScore = score + 6;
		const updatedSixes = sixes + 1;
		setSixes(updatedSixes);
		setScore(updatedScore);
	};

	return (
		<div>
			<h3>Player: Bangla Batsman</h3>

			<p>Sixes: {sixes}</p>
			<p>Fours: {fours}</p>

			{score > 50 && <p>You Scored a half Century. 50!!!</p>}
			<h1>Score: {score}</h1>
			<button onClick={handleSingles}>Singles</button>
			<button onClick={handleFour}>Four!</button>
			<button onClick={handleSix}>!!! Six !!!</button>
		</div>
	);
}
