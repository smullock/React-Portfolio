import React from 'react';
import Card from 'react-bootstrap/Card';
import project1 from "../assets/furry-foster-home.PNG";
import project2 from "../assets/Fuel-seeker-nsw.PNG";
import project3 from "../assets/Weather-Dashboard.PNG";
import project4 from "../assets/Workday Scheduler.PNG";
import 'bootstrap/dist/css/bootstrap.min.css';



function Projects() {

  const projects = [
  {
    title: "Furry-Foster Home",
    image: project2,
    url:'https://furryfosterhome.herokuapp.com/',
    github:'https://github.com/NikTern/Furry-Foster-Home',  
  },
{
  title: "Fuel Seeker NSW",
  image: project1,
  url:'https://ptrcao.github.io/07-Project-1/',
  github:"https://https://github.com/ptrcao/07-Project-1",
},

{
  title: "Weather Dashboard",
  image: project3,
  url:'https://furryfosterhome.herokuapp.com/',
  github: "https://github.com/smullock/Weather_Dashboard",
},
{
  title: "Work Day Scheduler",
  image: project4,
  url:'https://furryfosterhome.herokuapp.com/',
  github: "https://smullock.github.io/Work-Day-Scheduler"
}
]

  return (

    <div className='projectList'>
      <h2 className="top-title">Portfolio</h2>
      {projects.map((project,index)=> 
     
    <Card className="row-md-6 bg-dark text-white" key = {index}>
      <Card.Img src={project.image} alt="Project image" />
      <Card.ImgOverlay>
        <Card.Title> {projects.title}<a href={projects.url} class="btn btn-success ">See Project</a></Card.Title>

      </Card.ImgOverlay>
    </Card>
      )},

    </div>
  );
}




export default Projects