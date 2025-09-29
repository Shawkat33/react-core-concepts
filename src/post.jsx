export default function Post({ post }) {
	// console.log(post);

	const { title, body, userId } = post;

	return (
		<div className="cards">
			<h2>{title}</h2>
			<h4>{userId}</h4>
			<p>{body}</p>
		</div>
	);
}
