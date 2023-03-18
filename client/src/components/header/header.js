import "./header.css";
function Header() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BookShelves</span>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItems">Home</li>
          <li className="topbarListItems">Contact</li>
          <li className="topbarListItems">About</li>
          <li className="topbarListItems">Login</li>
          <li className="topbarListItems">Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
