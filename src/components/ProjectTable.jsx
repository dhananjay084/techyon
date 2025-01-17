import React from "react";
import { FaRegFolder, FaRegCalendar } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import User from "/user.png"; 

const ProjectData = [
  {
    id: 1,
    name: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasks: { completed: 10, total: 20 },
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    icon: User
  },
  {
    id: 2,
    name: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasks: { completed: 10, total: 20 },
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    icon: User

  },
  {
    id: 3,
    name: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasks: { completed: 10, total: 20 },
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    icon: User

  },
  {
    id: 4,
    name: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasks: { completed: 10, total: 20 },
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    icon: User

  },
  {
    id: 5,
    name: "Techyon Software",
    percentage: "50%",
    owner: "Techyon",
    tasks: { completed: 10, total: 20 },
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    icon: User

  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "In Progress":
      return "status-in-progress";
    case "Completed":
      return "status-completed";
    case "Archived":
      return "status-archived";
    case "Not Started":
    default:
      return "status-not-started";
  }
};

const ProjectTable = () => {
  return (
    <div className="project-table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>   <FaRegFolder className="icon-folder" />Project Name</th>
            <th>%</th>
            <th><IoPeopleOutline className="icon-folder"/>Owner</th>
            <th><MdOutlineTaskAlt className="icon-folder"/>Tasks</th>
            <th><GrStatusGood  className="icon-folder"/>Status</th>
            <th><FaRegCalendar  className="icon-folder"/>Start Date</th>
            <th> <FaRegCalendar  className="icon-folder"/>End Date</th>
          </tr>
        </thead>
        <tbody>
          {ProjectData.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
               {project.name}
              </td>
              <td>{project.percentage}</td>
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
              <td>
                <ProgressBar
                  start={project.tasks.completed}
                  end={project.tasks.total}
                  showMargin={false}
                />
              </td>
              <td className={getStatusClass(project.status)}>{project.status}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
