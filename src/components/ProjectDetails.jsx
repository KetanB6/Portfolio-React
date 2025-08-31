const ProjectDetails = ({ project, isVisible, close }) => {
  if (!isVisible) return null;

  return (
    <div className="about card info">
      <div style={{ width: "auto", maxWidth: "90vw" }}>
        {project.description}
        <br /><br />
        {project.link && <a href={project.link} target="_blank" rel="noreferrer">🔗 <font color="aqua">Try it here</font></a>} | 
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">🔗 <font color="aqua">GitHub Repo.</font></a>}
      </div>
      <button className="back" onClick={close}>X</button>
    </div>
  );
};

export default ProjectDetails;
