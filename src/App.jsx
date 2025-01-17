import React from 'react';
import Card from '../src/components/ProjectCard';
import Subheader from './components/SubHeader';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import User from "/user.png";

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><IoReorderThreeOutline /></li>
      <li><IoIosAddCircleOutline /></li>
      <li><CiHome /></li>
      <li><MdOutlineDashboard /></li>
      <li><IoReorderThreeOutline /></li>
      <li><IoIosAddCircleOutline /></li>
      <li><CiHome /></li>
      <li><MdOutlineDashboard /></li>
    </ul>
  </div>
);

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1>TECHYON</h1>
    </div>
    <div className="header-right">
      <span><CiHome /></span>
      <span><CiHome /></span>
      <span><CiHome /></span>
      <span className='notification'>
        <p>99+</p>
        <IoIosNotificationsOutline />
      </span>
      <span>
        <img src={User} />

      </span>
      <span>
        <FaChevronDown />

      </span>
    </div>
  </header>
);

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <Subheader />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
