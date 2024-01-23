import { useEffect, useState, useRef } from 'react';
import React from 'react';
import utilStyles from '../style/utils.module.css';
import { experience } from '../data/experience';
import { project } from '../data/project'
import ExperienceCard from '../components/experienceCard';
import { Container, Row, Col, Navbar, Tabs, Tab } from 'react-bootstrap';
import { gsap } from 'gsap';
import ProjectCard from '../components/projectCard';

const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>{title}</h2>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const IndexPage = () => {

  const [currBlockIdx, setCurrBlockIdx] = useState(0)
  let featuredExperience = useRef()

  const toggleFeaturedExperience = (idx) => {
    setCurrBlockIdx(idx)
    gsap.from(featuredExperience.current, {
      x: 100,
      ease: 'elastic',
      duration: 2
    })
  }


const projectCardRefs = project.map(() =>useRef(null));

const animateProjectCard = (index) => {
  const projectCardRef = projectCardRefs[index].current;
  gsap.from(projectCardRef, {   x: 100,
    ease: 'elastic',
    duration: 2 });
};

useEffect(() => {
  // Trigger the animation when the component mounts
  animateProjectCard(0);
}, []);


  return (
    <>
      <Navbar fixed='top' bg='clear'><div className='nav-title'>Russell Ruffolo</div></Navbar>
      <main>
        <Section title="Section 1" className="section-1">
          <p>I am a Software Engineer and Game Developer. I am currently living in Colorado Springs, CO with my wife Maia and our dog Shadow. When I'm not working on a project you can likely find me at the disc golf course.</p>
        </Section>
        <Section title="Section 2" className="section-2">
          <h1>Portfolio</h1>
          <div className='tabs-container'>
          <Tabs
      defaultActiveKey="0"
      className="mb-3"
      fill    
      onSelect={(index) => animateProjectCard(index)}  
      >
      {project.map((proj, i) => (
        <Tab eventKey={i.toString()}  title ={proj.projectName}>  
        <div ref={projectCardRefs[i]}>        
          <ProjectCard content={project[i]}/>       
          </div>

          </Tab>
      ))}
    </Tabs>
          </div>
        </Section>
        <Section title="Section 3" className="section-3">
          <h1> Professional Experience</h1>
          <div>These are some of the teams I've been a part of.</div>
          <div className={utilStyles.experienceDisplay}>
            <div className={utilStyles.sideBar}>
              <ul className="nav flex-column nav-pills">
                {experience.map((exp, i) => (
                  <li key={i} className="nav-item">
                    <a className={i == currBlockIdx ? `nav-link active ${utilStyles.noUnderline}` : `nav-link ${utilStyles.noUnderline}`} aria-current="page" onClick={() => toggleFeaturedExperience(i)}>{exp.companyName}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={utilStyles.experienceDisplay} ref={featuredExperience}>
              <ExperienceCard id='featuredExperience' content={experience[currBlockIdx]} />
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default IndexPage;
