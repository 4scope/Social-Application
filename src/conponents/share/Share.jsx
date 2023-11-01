import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

const Share = () => {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src="/assets/profile-1.jpg"
						alt=""
						className="shareTopImg"
					/>
					<input
						placeholder="What's on your mind Favour"
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia
								htmlColor="tomato"
								classsName="shareIcon"
							/>
							<span className="shareOptionText">
								Photo or Video
							</span>
						</div>
						<div className="shareOption">
							<Label htmlColor="blue" classsName="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room htmlColor="green" classsName="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions
								htmlColor="goldenrod"
								classsName="shareIcon"
							/>
							<span className="shareOptionText">Feeling</span>
						</div>
						<button className="shareOptionButton">Share</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
