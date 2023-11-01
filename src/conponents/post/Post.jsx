import { MoreVert } from "@mui/icons-material";
import "./post.css";

const Post = () => {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postTopProfileImg"
							src="/assets/profile-1.jpg"
							alt=""
						/>
						<span className="postUserName">
							Favour Ikechukwu Uwadiegwu
						</span>
						<span className="postDate">5 mins ago</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">Hey it's my frist post :)</span>
					<img className="postImg" src="/assets/b-1.jpg" alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="/assets/thumb-up.svg"
							alt=""
						/>
						<img
							className="likeIcon"
							src="/assets/heart.svg"
							alt=""
						/>
						<span className="postLikeCounter">
							32 people like it
						</span>
					</div>
					<div className="postBottomRight">
						<div className="postCommentText">9 comments</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
