import React, { useState } from "react";
import { FaRegFolder, FaRegCalendar } from "react-icons/fa";
import { LuFileScan } from "react-icons/lu";
import ProgressBar from "./ProgressBar"; 
import User from "/user.png"; 
import Selection from "./SelectionSection";
import Table from "./ProjectTable";

const projectData = [
    {
        columnName: "Not Started",
        count: 2,
        color: "#B0B0B0",
        projects: [
            { id: "P-11", name: "Project Name", start: 7, end: 14, dateRange: "01/01/2024 - 31/01/2024", teamSize: "10+", files: 12 },
            { id: "P-12", name: "Project Name", start: 5, end: 10, dateRange: "01/02/2024 - 31/02/2024", teamSize: "8+", files: 10 },
            { id: "P-11", name: "Project Name", start: 7, end: 14, dateRange: "01/01/2024 - 31/01/2024", teamSize: "10+", files: 12 },
            { id: "P-12", name: "Project Name", start: 5, end: 10, dateRange: "01/02/2024 - 31/02/2024", teamSize: "8+", files: 10 },
        ],
    },
    {
        columnName: "In Progress",
        count: 2,
        color: "#4A90E2",
        projects: [
            { id: "P-21", name: "Project Name", start: 4, end: 10, dateRange: "01/03/2024 - 31/03/2024", teamSize: "12+", files: 14 },
            { id: "P-22", name: "Project Name", start: 8, end: 14, dateRange: "01/04/2024 - 31/04/2024", teamSize: "5+", files: 8 },
            { id: "P-11", name: "Project Name", start: 7, end: 14, dateRange: "01/01/2024 - 31/01/2024", teamSize: "10+", files: 12 },
            { id: "P-12", name: "Project Name", start: 5, end: 10, dateRange: "01/02/2024 - 31/02/2024", teamSize: "8+", files: 10 },
        ],
    },  
    {
        columnName: "Archived",
        count: 2,
        color: "#607D8B",
        projects: [
            { id: "P-31", name: "Project Name", start: 6, end: 12, dateRange: "01/05/2024 - 31/05/2024", teamSize: "20+", files: 16 },
            { id: "P-32", name: "Project Name", start: 3, end: 9, dateRange: "01/06/2024 - 31/06/2024", teamSize: "15+", files: 20 },
            { id: "P-11", name: "Project Name", start: 7, end: 14, dateRange: "01/01/2024 - 31/01/2024", teamSize: "10+", files: 12 },
            { id: "P-12", name: "Project Name", start: 5, end: 10, dateRange: "01/02/2024 - 31/02/2024", teamSize: "8+", files: 10 },
        ],
    },
    {
        columnName: "Completed",
        count: 2,
        color: "#4CAF50",
        projects: [
            { id: "P-41", name: "Project Name", start: 7, end: 14, dateRange: "01/07/2024 - 31/07/2024", teamSize: "10+", files: 12 },
            { id: "P-42", name: "Project Name", start: 5, end: 15, dateRange: "01/08/2024 - 31/08/2024", teamSize: "12+", files: 10 },
            { id: "P-11", name: "Project Name", start: 7, end: 14, dateRange: "01/01/2024 - 31/01/2024", teamSize: "10+", files: 12 },
            { id: "P-12", name: "Project Name", start: 5, end: 10, dateRange: "01/02/2024 - 31/02/2024", teamSize: "8+", files: 10 },
        ],
    },
];

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="card-header">
            <span>
                <FaRegFolder /> {project.name}
            </span>
            <span>ID: {project.id}</span>
        </div>
        
        <ProgressBar start={project.start} end={project.end} showMargin={true} />
        <span>
            <FaRegCalendar /> {project.dateRange}
        </span>
        <div className="card-footer">
            <span>
                <img src={User} alt="Team member" />
                <img src={User} alt="Team member" />
                <img src={User} alt="Team member" />
                <p>{project.teamSize}</p>
            </span>
            <span>
                <LuFileScan /> {project.files} Files
            </span>
        </div>
    </div>
);

const ProjectBoard = () => {
    const [expandedColumns, setExpandedColumns] = useState(projectData.map(() => false));
    const [selectedView, setSelectedView] = useState("table");

    const handleViewChange = (view) => {
      setSelectedView(view);
    };
    const toggleExpand = (index) => {
        setExpandedColumns((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <>
    <Selection
        selectedView={selectedView}
        onViewChange={handleViewChange}
      />
{selectedView !="list"?
        <div className="project-board">
            {projectData.map((column, index) => {
                const isExpanded = expandedColumns[index];
                const projectsToShow = isExpanded ? column.projects : column.projects.slice(0, 3); // Limit to 3 if collapsed

                return (
                    <div key={index} className="project-column">
                        <div className="column-header" style={{ background: column.color }}>
                            <h3>{column.columnName}</h3>
                            <span>{column.count}</span>
                        </div>
                        <div className={`column-content ${isExpanded ? "expanded" : "collapsed"}`}>
                            {projectsToShow.map((project, idx) => (
                                <ProjectCard key={idx} project={project} />
                            ))}
                        </div>
                        <button className="view-more" onClick={() => toggleExpand(index)}>
                            {isExpanded ? "Show Less" : "View More"}
                        </button>
                    </div>
                );
            })}
        </div>
        :
        <Table/>
}
        </>
    );
};


export default ProjectBoard;
