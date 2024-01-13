import './profile.css';
import Topbar from '../../conponents/topbar/Topbar';
import Sidebar from '../../conponents/sidebar/Sidebar';
import Feed from '../../conponents/feed/Feed';
import Rightbar from '../../conponents/rightbar/Rightbar';

const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profileContainer">
				<Sidebar />
				<div className="profileRight">
					<div className="profileTop">
						<div className="profileImgContainer">
							<img
								className="profileCoverImg"
								src="../../../assets/post/3.jpeg"
								alt=""
							/>
							<img
								className="profileImg"
								src="../../../assets/profile-1.jpg"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Central Scope</h4>
							<span className="profileInfoDes">Web dev Guru</span>
						</div>
					</div>
					<div className="profileRightWrapper">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
