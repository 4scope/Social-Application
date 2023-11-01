import "./sidebar.css";
import {
	RssFeed,
	WorkOutline,
	Event,
	School,
	Bookmark,
	HelpOutline,
	Group,
	PlayCircleFilledOutlined,
	Chat,
} from "@mui/icons-material";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="siderbarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="siderbarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Chat</span>
					</li>
					<li className="siderbarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Video</span>
					</li>
					<li className="siderbarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Group</span>
					</li>
					<li className="siderbarListItem">
						<Bookmark className="sidebarIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="siderbarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="siderbarListItem">
						<WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="siderbarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="siderbarListItem">
						<School className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/profile-2.jpg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">CodeBreaker</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
