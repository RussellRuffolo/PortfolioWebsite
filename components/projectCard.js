import styles from '../style/project.module.css';

export default function ProjectCard({content: project}){
return(
    <div className="tab-card">
    <div className="tab-left">
    <div className="tab-text">
      {project.description}
      </div>
      <hr className="rounded"/>
      Link: <a className="tab-link" href={project.link}>{project.link}</a>
      </div>
   

      <img className="tab-image" src={project.imageLink}/>
    </div>
 
);
}