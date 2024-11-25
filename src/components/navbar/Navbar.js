import {
    MdNotifications,
    MdOutlineShoppingCart,
    MdSearch,
  } from "react-icons/md";
  import "./navbar.css"
  const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-title">
          דאבל מחשבים וסלולר
        </div>
        <div className="navbar-menu">
          <div className="navbar-search">
            <MdSearch />
            <input type="text" placeholder="Search..." className="navbar-input" />
          </div>
          <div className="navbar-icons">
          <MdNotifications size={20} />
          <MdOutlineShoppingCart size={20} />
          <button >הרשמה / כניסה</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar