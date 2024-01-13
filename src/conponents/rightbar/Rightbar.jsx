import './rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummyData';
import { Home } from '@mui/icons-material';
import Userfriend from '../userFriend/Userfriend';

const Rightbar = () => {
	const HomeRightBar = ({ profile }) => {
		return (
			<>
				<div className="birthdayContainer">
					<img
						className="birthdayImg"
						src="/assets/heart.svg"
						alt=""
					/>
					<span className="birthdayText">
						<b>Central Scope</b> and <b>2 other friends</b> have a
						birthday today.
					</span>
				</div>
				{/* <div className="rightbarAdContainer">
					<span className="rightAdText">Sponsored</span>
					<iframe
						className="rightbarAd"
						title="Spotify Phonk"
						style={{ borderRadius: 12 + "px" }}
						src="https://open.spotify.com/embed/playlist/57ZakPCe5PO8fcqX28A8mG?utm_source=generator"
						width="100%"
						height="500px"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div> */}
				<img src="/assets/ads.png" alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="righrbarFriendList">
					{Users.map((u) => {
						return <Online key={u.id} user={u} />;
					})}
				</ul>
			</>
		);
	};

	const ProfileRightBar = () => {
		return (
			<>
				<h4 className="rightTitle">User Information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItems">
						<span className="rightbarInfoKey">City:</span>
						<span className="rightbarInfovalue">New York</span>
					</div>
					<div className="rightbarInfoItems">
						<span className="rightbarInfoKey">From:</span>
						<span className="rightbarInfovalue">Nigeria</span>
					</div>
					<div className="rightbarInfoItems">
						<span className="rightbarInfoKey">Relationship:</span>
						<span className="rightbarInfovalue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User Friends</h4>
				<div className="rightbarFollowings">
					{Users.map((u) => {
						return <Userfriend key={u.id} user={u} />;
					})}
				</div>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<ProfileRightBar />
			</div>
		</div>
	);
};

export default Rightbar;
