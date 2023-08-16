import { UserProfile } from "../../types/user.types";
import './UserProfileContainer.css'

const UserProfilerContainer = ({ userInfo }: { userInfo: UserProfile }) => {
    return (
        <>
            <div className="user-profile">
                <img className="avatar" src={userInfo?.avatar_url} alt="Ash" />
                <div className="ino">
                    <div className="username"> {userInfo?.name ?? "No name available"}</div>
                    <div className="bio">
                        {userInfo?.bio ?? 'There is no bio avaliable for this profile!'}
                    </div>
                    <div className="description">
                        <a target="_blank" href={userInfo?.html_url}>Link to profile</a>
                    </div>
                </div>
                <div>
                    <ul className="data">
                        <li>
                            <span className="entypo-user"> {userInfo?.followers} followers</span>
                        </li>
                        <li>
                            <span className="entypo-user"> {userInfo?.following} following</span>
                        </li>
                    </ul>
                </div>

            </div>
        </>)

}

export default UserProfilerContainer 