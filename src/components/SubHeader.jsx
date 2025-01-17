import { IoAddOutline } from "react-icons/io5";
const Subheader=()=> {

    return (
        <div className="sub-header">
            <div className="left-side">
                <p>Projects</p>
                <button>
                    <IoAddOutline /> Projects
                </button>

            </div>
            <div className="right-side">
                <p>Dashboard</p>
                /   
                <p className="selected">Project Overview</p>

            </div>

        </div>

    )
}
export default Subheader;