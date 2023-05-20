import React from 'react';
import project1 from "../assets/furryfosterhome";
import project2 from "../assets/Fuel-seeker-nsw";
import project3 from "../assets/Weather_Dashboard";
import project4 from "../assets/Workday Scheduler";



function Projects() {

  const projects = [
  {
    title: "Furry-Foster Home",
    image: project1,
    url:'https://furryfosterhome.herokuapp.com/',
    github:'https://github.com/NikTern/Furry-Foster-Home',  
  },
{
  title: "Furry-Foster Home",
  image: project2,
  url:'https://furryfosterhome.herokuapp.com/',
  github:"https://github.com/ptrcao/07-Project-1",
},

{
  title: "Furry-Foster Home",
  image: project3,
  url:'https://furryfosterhome.herokuapp.com/',
  github: "https://github.com/smullock/Weather_Dashboard",
},
{
  title: "Furry-Foster Home",
  image: project4,
  url:'https://furryfosterhome.herokuapp.com/',
  github: "https://smullock.github.io/Work-Day-Scheduler"
}
]

  return (
    <div>Projects</div>
  )
}

export default Projects