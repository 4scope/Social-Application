import { MoreVert } from '@mui/icons-material';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {
	const user = Users.filter((u) => u.id === post.userId);
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postTopProfileImg"
							src={user[0].profilePicture}
							alt=""
						/>
						<span className="postUserName">{user[0].username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post.desc}</span>
					<img className="postImg" src={post.photo} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							id="likeIcon"
							className="likeIcon"
							src="/assets/thumb-up.svg"
							alt=""
							onClick={likeHandler}
						/>
						<img
							className="likeIcon"
							src="/assets/heart.svg"
							alt=""
							onClick={likeHandler}
						/>
						<span className="postLikeCounter">
							{like} people like it
						</span>
					</div>
					<div className="postBottomRight">
						<div className="postCommentText">
							{post.comment} comments
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
