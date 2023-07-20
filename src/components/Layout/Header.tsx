import reactImg from "../../../public/pngwing.com.png"
function Header() {
  return (
    <header className='app-header'>
      <img src={reactImg}alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
