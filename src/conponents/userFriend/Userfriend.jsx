import './userfriend.css';

const Userfriend = ({ user }) => {
	return (
		<div className="rightbarFollowing">
			<img
				className="rightbarFollowingImg"
				src={user.profilePicture}
				alt=""
			/>
			<span className="rightbarFollowingName">{user.username}</span>
		</div>
	);
};

export default Userfriend;
