import "./rightbar.css";

const Rightbar = () => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
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
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="/assets/profile-3.jpg"
								className="rightbarProfileImg"
								alt=""
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Central Scope</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Rightbar;
