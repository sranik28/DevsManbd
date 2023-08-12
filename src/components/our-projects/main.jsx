
import ProjectCard from "./ProjectCard";
import getAllProjects from "@/utils/getAllProjects";


const Projects = async () => {
    const { allProjects } = await getAllProjects()



    return (
        <div id="projects" className="container text-white ">

            {/* <h2 className="text-3xl font-bold text-center ">Projects</h2>
            <p className='mt-4 font-bold text-center'>Things I’ve built so far</p> */}
            <h2 className="text-[50px] font-bold text-[#000000] pt-7 text-center">our Projects</h2>
            <div className="bg-[#0DA1DB] w-[100px] mx-auto h-[6px]"></div>
            <div className='grid gap-5 mt-10 md:grid-cols-3'>
                {
                    allProjects && allProjects.map(project => <ProjectCard key={project._id} project={project} />)
                }
            </div>
        </div>

    );
};

export default Projects;