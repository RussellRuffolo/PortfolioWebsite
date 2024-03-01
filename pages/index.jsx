import { useEffect, useState, useRef } from "react";
import React from "react";
import utilStyles from "../style/utils.module.css";
import { experience } from "../data/experience";
import ExperienceCard from "../components/experienceCard";
import { Container, Row, Col, Navbar, Tabs, Tab } from "react-bootstrap";
import { gsap } from "gsap";
import Layout from "../components/layout";

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
  const [currBlockIdx, setCurrBlockIdx] = useState(0);
  let featuredExperience = useRef();

  const toggleFeaturedExperience = (idx) => {
    setCurrBlockIdx(idx);
    gsap.from(featuredExperience.current, {
      x: 50,
      ease: "elastic",
      duration: 2.4,
    });
  };

  return (
    <>
      <Layout home>
        <Section title="About me" className="section-1">
          <p>
       
            I am a Software Engineer and Game Developer. I am currently living
            in Colorado Springs, CO with my wife Maia and our dog Shadow.<br /><br />

            I just published my first game on Steam! Check out DISCIN here: <a href="https://store.steampowered.com/app/2816270/DISCIN/">Steam</a> <br /><br />

            Beyond making and playing video games, my current interests are cooking, Japanese language, disc golf, and skateboarding.
         
          </p>
        </Section>
        <Section title="Portfolio" className="section-2">
          <div className={utilStyles.projectBox} id="portfolio">
            <ul className={utilStyles.projectList}>
              <li className={utilStyles.project}>
                <a href="/portfolio/discin">DISCIN</a>
              </li>
              <li className={utilStyles.project}>
                <a href="/portfolio/crashtodon">Crashtodon</a>
              </li>
              <li className={utilStyles.project}>
                <a href="/portfolio/pabridges">PA Bridges</a>
              </li>
              <li className={utilStyles.project}>
                <a href="/portfolio/crashblox">Crashblox</a>
              </li>
            </ul>
            <a href="/RussellRuffoloResume.pdf" download>
              <button className={utilStyles.downloadButton}>Download Resumé</button>
            </a>
          </div>
        </Section>
        <Section title="Professional Experience" className="section-3">
          <div>These are some of the teams I've been a part of.</div>
          <div className={utilStyles.experienceDisplay}>
            <div className={utilStyles.sideBar}>
              <ul className="nav flex-column">
                {experience.map((exp, i) => (
                  <li key={i} className="nav-item">
                    <a
                      aria-current="page"
                      onClick={() => toggleFeaturedExperience(i)}
                    >
                      <img
                        className="exp-image"
                        src={experience[i].imageLink}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={utilStyles.experienceDisplay}
              ref={featuredExperience}
            >
              <ExperienceCard
                id="featuredExperience"
                content={experience[currBlockIdx]}
              />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default IndexPage;
