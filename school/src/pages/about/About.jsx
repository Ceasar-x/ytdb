import React from "react";
import "./About.css";
import rem from "../../assets/rem2.jpg"
import edu from "../../assets/edu.jpg"
import ach from "../../assets/achieve.jpg"
import bac2 from "../../assets/back2.jpg"
import back from "../../assets/back.jpg"
import staff from "../../assets/staff.jpg"

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Young Tajudeen (Y.T.D) Primary School "B" Ojoro, Ede</h1>
        <p>Established in 1958, we have a legacy of excellence in education and cultural development.</p>
      </header>

      <section className="school-history">
        <h2>Our History</h2>
        <p>
          Young Tajudeen (Y.T.D) Primary School "B" was founded in 1958 with a vision to provide quality education
          and nurture young minds in the community. Over the decades, the school has grown to become a center
          of excellence, fostering academic achievement, creativity, and character development among its students.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To empower students with knowledge, skills, and values to become leaders and innovators in society.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be a leading institution recognized for academic excellence and cultural enrichment.</p>
        </div>
      </section>

      <section className="achievements">
        <h2>Our Achievements</h2>
        <ul>
          <li>Recipient of the Best Primary School Award in Osun State for five consecutive years.</li>
          <li>Over 95% of our alumni have successfully transitioned to top secondary schools.</li>
          <li>Recognized for excellence in sports, arts, and cultural activities.</li>
        </ul>
      </section>

      <section className="principal-message">
        <h2>Meet Our Headteachher</h2>
        <div className="principal-details">
          <img
            src={rem}
            alt="Principal"
            className="principal-img"
          />
          <div>
            <h3>Mr. Adeyemi Abimbola Kazeem</h3>
            <p>
              "Welcome to Y.T.D Primary School, where our passion for education and holistic development drives
              everything we do. Together, we shape the future by nurturing the leaders of tomorrow."
            </p>
          </div>
        </div>
      </section>

      <section className="gallery1">
        <h2>Our School in Pictures</h2>
        <div className="gallery-grid">
          <img src={edu}alt="Classroom" className="gallery-img" />
          <img src={back}alt="Library" className="gallery-img" />
          <img src={staff}alt="Sports" className="gallery-img" />
          <img src={bac2} alt="Cultural Event" className="gallery-img" />
        </div>
      </section>

      
    </div>
  );
};

export default About;
