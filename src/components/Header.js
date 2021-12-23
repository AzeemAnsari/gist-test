import { Link } from 'react-router-dom';
import Logo from '../assets/logo_azeem.png';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="https://azeemansari.me" target="_blank">
            <img src={Logo} alt="azeem ansari" style={{ width: '85%' }} />
          </a>
        </div>
        <div className="github-ac">
          <a href="https://github.com/AzeemAnsari" target="_blank">
            <FaGithub size="4rem" color="white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
