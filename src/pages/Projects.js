import { useLoaderData } from "react-router-dom"

export default function Projects(props){

    const projects = useLoaderData()
    return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            <br></br>
            <a href={project.git}>
                <button>GITHUB</button>
            </a>
            <a href={project.live}>
                <button>LIVE SITE</button>
            </a>
        </div>
    )) 
}