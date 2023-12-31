import "./feed.css";
// import conponents
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Posts.map((p) => {
					return <Post key={p.id} post={p} />;
				})}
			</div>
		</div>
	);
};

export default Feed;
