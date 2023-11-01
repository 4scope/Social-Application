import "./home.css";
// import conponents
import Topbar from "../../conponents/topbar/Topbar";
import Sidebar from "../../conponents/sidebar/Sidebar";
import Feed from "../../conponents/feed/Feed";
import Rightbar from "../../conponents/rightbar/Rightbar";

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
};

export default Home;
