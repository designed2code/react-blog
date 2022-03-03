import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
      className="headerImg"
        src="https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?cs=srgb&dl=pexels-drew-williams-2657669.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};
export default Header;
