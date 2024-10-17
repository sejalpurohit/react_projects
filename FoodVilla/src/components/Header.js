import logo from "/images/FoodCompany.png";
 
 const Title = () => (
    <a href="/">
      <img className="title" alt="logo" src={logo} />
    </a>
  );

  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

