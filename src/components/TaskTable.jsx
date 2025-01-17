import React from "react";
import {  FaRegCalendar } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { CiBellOn } from "react-icons/ci";
import User from "/user.png"; 

const ProjectData = [
  {
    id: 1,
    name: "Task Number 1",
    associated:'Not Associated',
    owner: "Techyon",
    status: "In Review",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    ExstartDate: "29/10/2024",
    ExendDate: "29/10/2025",
    icon: User
  },
  {
    id: 1,
    name: "Task Number 1",
    associated:'Not Associated',
    owner: "Techyon",
    status: "On Track",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    ExstartDate: "29/10/2024",
    ExendDate: "29/10/2025",
    icon: User
  },
  {
    id: 1,
    name: "Task Number 1",
    associated:'Not Associated',
    owner: "Techyon",
    status: "Delayed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    ExstartDate: "29/10/2024",
    ExendDate: "29/10/2025",
    icon: User
  },
  {
    id: 1,
    name: "Task Number 1",
    associated:'Not Associated',
    owner: "Techyon",
    status: "In Revision",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    ExstartDate: "29/10/2024",
    ExendDate: "29/10/2025",
    icon: User
  },
  {
    id: 1,
    name: "Task Number 1",
    associated:'Not Associated',
    owner: "Techyon",
    status: "In Review",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    ExstartDate: "29/10/2024",
    ExendDate: "29/10/2025",
    icon: User
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "In Review":
      return "status-in-review";
    case "On Track":
      return "status-track";
    case "In Revision":
      return "status-revision";
    case "Delayed":
    default:
      return "status-delayed";
  }
};

const ProjectTable = () => {
  return (
    <div className="project-table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>   <CiBellOn className="icon-folder" />Task Name</th>
            <th>  <IoPeopleOutline className="icon-folder" /> Associated Team</th>
            <th><IoPeopleOutline className="icon-folder"/>Owner</th>
            <th><GrStatusGood  className="icon-folder"/>Status</th>
            <th><FaRegCalendar  className="icon-folder"/>Start Date</th>
            <th> <FaRegCalendar  className="icon-folder"/>End Date</th>
            <th><FaRegCalendar  className="icon-folder"/>Exp. Start Date</th>
            <th> <FaRegCalendar  className="icon-folder"/>Exp. End Date</th>
          </tr>
        </thead>
        <tbody>
          {ProjectData.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
               {project.name}
              </td>
              <td>{project.associated}</td>
              <td>
                <div className="owner-cell">
                  <img
                    src={project.icon}
                    alt="Owner"
                    className="owner-avatar"
                  />
                  {project.owner}
                </div>
              </td>
             
              <td className={getStatusClass(project.status)}>{project.status}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.ExstartDate}</td>
              <td>{project.ExendDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
