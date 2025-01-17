import React from 'react';
import Card from '../src/components/ProjectCard';
import Subheader from './components/SubHeader';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { LuGrid2X2Check } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { RiFolderCloudLine } from "react-icons/ri";
import { TbStatusChange } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { LuSquareCode } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { LuThumbsUp } from "react-icons/lu";
import { MdFormatLineSpacing } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import User from "/user.png";

const sideBarIcons = [
  <IoReorderThreeOutline />,
  <IoIosAddCircleOutline />,
  <CiHome />,
  <RiFolderCloudLine />,
  <LuGrid2X2Check />,
  <TbStatusChange />,
  <CiSearch />,
  <LuSquareCode />,
  <CgNotes />,
  <IoIosPeople />
];

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      {
        sideBarIcons.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))
      }
    </ul>
    <ul className='bottom_li'>
      <li>
        <RiDashboardLine />
      </li>
      <li><LuMessageCircleQuestion /></li>
      <li><LuThumbsUp /></li>
    </ul>
  </div>
);

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1>TECHYON</h1>
    </div>
    <div className="header-right">
      <span><CiSearch /></span>
      <span><MdFormatLineSpacing /></span>
      <span><HiOutlineSpeakerphone /></span>
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
