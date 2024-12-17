import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import hayameVid from "../assets/video/hayameVid.mp4";
import hotelbookingVid from "../assets/video/hotelbookingVid.mp4";
import jsmeccomVid from "../assets/video/jsmeccomVid.mp4";

export const Projects = () => {
  const projects = [
    {
      title: "Workforce Management App",
      description: "Tech Used: React, Redux, Node.js",
      imgUrl: projImg1,
      video: hayameVid,
    },
    {
      title: "Hotel Booking App",
      description: "Tech Used: React, Redux, Node.js",
      imgUrl: projImg2,
      video: hotelbookingVid,
    },
    {
      title: "Ecommerce App",
      description: "Tech Used: React, Redux, Stripe Integration, PostgreSQL",
      imgUrl: projImg3,
      video: jsmeccomVid,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Workform Management App
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hotel Booking App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Ecommerce App</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row
                          className=""
                          style={{ marginLeft: "20%", width: "130%" }}
                        >
                          <ProjectCard
                            key={projects[0].title}
                            {...projects[0]}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row
                          className=""
                          style={{ marginLeft: "20%", width: "130%" }}
                        >
                          <ProjectCard
                            key={projects[1].title}
                            {...projects[1]}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row
                          className=""
                          style={{ marginLeft: "20%", width: "130%" }}
                        >
                          <ProjectCard
                            key={projects[2].title}
                            {...projects[2]}
                          />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
