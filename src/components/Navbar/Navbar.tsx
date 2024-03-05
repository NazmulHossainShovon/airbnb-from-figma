import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserMenu from "../UserMenu/UserMenu";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-div">
      <Logo />
      <Search />
      <UserMenu />
    </div>
  );
};

export default Navbar;
