import Title from '../title/title';
import './header.css';

function Header() {
  return (
    <header className="header">
      <p className="header-title">
        <Title />
      </p>
    </header>
  );
}

export default Header;
