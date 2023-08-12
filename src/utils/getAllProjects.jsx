import axios from "axios";


const getAllProjects = async () => {
    try {
        const res = await axios.get("https://www.devsmanbd.com/api/projects")
        const allProjects = await res.data
        return {allProjects}
    } catch (error) {
        return []
    }
};

export default getAllProjects;