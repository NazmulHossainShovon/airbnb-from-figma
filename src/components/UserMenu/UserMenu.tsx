import "./UserMenu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import ProfileSVG from "./svg/Profile";

const UserMenu: React.FC = () => {
  return (
    <div className="usermenu-container">
      <div className="avatar-menu-div">
        <AiOutlineMenu />
        <div className="avatar-div">
          <ProfileSVG />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
