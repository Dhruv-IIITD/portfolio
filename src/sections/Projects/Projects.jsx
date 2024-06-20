import styles from './ProjectsStyles.module.css';
import MlProjects from '../../assets/Machine-Learning.jpg';
import portfolio from '../../assets/prt.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        /> */}
        <ProjectCard
          src={MlProjects}
          link="https://github.com/Dhruv-IIITD/ML_Projects.git"
          h3="Some ML Projects"
          p="ML Projects"
        />
        <ProjectCard
          src={portfolio}
          link=""
          h3="This Website"
          p="My Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
