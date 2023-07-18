import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disc from "../../Assets/Projects/discplus-dashboard.jpg";
import gigabite from "../../Assets/Projects/gigabite.jpg";
import fyp from "../../Assets/Projects/fyp.png";
import vpc from "../../Assets/Projects/vbc.jpg";
import commvault from "../../Assets/Projects/commvault.png";
import jarvis from "../../Assets/Projects/voiceAssistant.jpg";
import antiaging from "../../Assets/Projects/antiaging.jpg";
import weenie from "../../Assets/Projects/weene.jpg";
import luna from "../../Assets/Projects/lunawellbeing.jpg";
import meConsulting from "../../Assets/Projects/meconsulting.jpg";
import chrystalExecutive from "../../Assets/Projects/chrystalexecutivetravel.jpg";
import scitechInternational from "../../Assets/Projects/scitechinternational.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jarvis}
              isBlog={true}
              title="AI Voice Assistant"
              description="I have developed a personal AI voice assistant using Python, which utilizes natural language processing and speech recognition to automate tasks and provide information to users via voice commands."
              ghLink="https://github.com/sibbi16/jarvis_python/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commvault}
              isBlog={false}
              title="Commvault"
              description="Commvault is an enterprise level project build with Vue.js, Tailwind, Laravel with Unit and Integration Testing. It was to assist engineers in managing hosting servers using commvault. Implemented a system enabling engineer to analyze and monitor servers and customer data through commvault."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fyp}
              isBlog={false}
              title="Online Product Sourcing to Shops"
              description="Built an e-commerce platform that utilized Laravel and Bootstrap for the dashboard, and React Native Expo for the mobile app. The platform streamlined the ordering process by enabling efficient product management and mobile ordering."
              ghLink="https://github.com/sibbi16/fyp"
              demoLink="https://drive.google.com/drive/folders/1Efbegwd_PtNBqlS2z2Re50bcFh0ISdP4?usp=share_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disc}
              isBlog={false}
              title="Disc Plus"
              description="Disc Plus is a custom-built CRM platform developed using Laravel, designed to assess and analyze individual personalities. Through a series of multiple-choice questions, customers can participate in a comprehensive personality test. Upon completion, the platform generates a personalized record that provides insights into their personality traits."
              demoLink="https://discplus.health/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vpc}
              isBlog={false}
              title="VBC Digital"
              description="VBC is a robust platform built on Laravel that efficiently handles team management, meeting scheduling, document management, and information sharing for staff members. It serves as a centralized hub where teams can collaborate effectively, ensuring seamless communication and streamlined workflows."
              demoLink="https://dashboard.vbcdigital.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gigabite}
              isBlog={false}
              title="Giga Bite"
              description="Giga Bite is a cutting-edge CRM system developed using Laravel, specifically tailored for call center operations. This comprehensive platform encompasses advanced calling and lead management functionalities. With Giga Bite, call center agents can efficiently handle incoming and outgoing calls while managing leads."
              demoLink="https://dashboard.gigabitesoft.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luna}
              isBlog={false}
              title="Luna Wellbeing"
              description="Luna Wellbeing is a captivating e-commerce website built on the Laravel framework, offering a diverse range of exquisite CBD products that are carefully grown and crafted in Italy. With its seamless payment feature, customers can easily purchase these beautiful CBD products while enjoying a secure and hassle-free shopping experience."
              demoLink="https://lunawellbeing.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antiaging}
              isBlog={false}
              title="Anti-aging"
              description="Anti-Aging is a WordPress-based e-commerce store that specializes in selling supplements for anti-aging purposes. The website is built using WordPress, providing a user-friendly interface for customers to browse and purchase a wide range of anti-aging products."
              demoLink="https://anti-agingworldwide.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weenie}
              isBlog={false}
              title="Weenie Fiat"
              description="Weenie Fiats Ltd understands the unique charm and appeal of the Fiat 500, and their expertise allows them to cater to the specific needs of Fiat 500 owners. Whether it's routine maintenance, complex repairs, or sourcing authentic parts, they provide top-notch service and exceptional attention to detai"
              demoLink="https://weeniefiats.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meConsulting}
              isBlog={false}
              title="M.E Consulting"
              description="M.E Consulting website catering to tax, company registration, and compliance services. Additionally, the platform offers construction services for large-scale projects and sustainable solar solutions. With a focus on personalized support and expert guidance"
              demoLink="https://meconsulting.com.pk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chrystalExecutive}
              isBlog={false}
              title="Chrystal Executive Travel"
              description="Chrystal Executive Travel is a specialized car transportation service catering to events such as parties, graduations, and funerals. The platform offers seamless logistics solutions, ensuring punctual and reliable transportation. With a user-friendly booking system, clients can easily schedule and manage their transportation needs"
              demoLink="https://chrystalexecutivetravel.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scitechInternational}
              isBlog={false}
              title="Scitech International"
              description="Scitech International stands as a top-tier importer and distributor in Pakistan, specializing in high-quality laboratory, scientific, medical, and technical research equipment. We cater to diverse sectors such as universities, pharmaceuticals, medical, hospitals, laboratories, environmental organizations, and R&D institutes."
              demoLink="https://scitechinternational.com.pk/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
