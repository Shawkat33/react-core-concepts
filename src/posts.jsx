import { use } from "react";
import Post from "./post";

export default function Posts({ postsPromise }) {
	const posts = use(postsPromise);
	// console.log(posts);

	return (
		<div>
			<h2>
				All Posts are here. <br /> Number of Posts: {posts.length}
			</h2>
			{posts.map((post) => (
				<Post key={post.id} post={post}></Post>
			))}
		</div>
	);
}
