import React from "react";
import "./Classes.css";
import edu from "../../assets/edu.jpg"
import sport from "../../assets/sport.jpg"
import staff from "../../assets/staff.jpg"

const Classes = () => {
  return (
    <div className="classes-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1>Welcome to Our Classes</h1>
          <p>Explore how we inspire young minds through engaging and fun learning experiences.</p>
        </header>

        {/* Section 1: Our Learning Philosophy */}
        <section className="learning-philosophy">
          <div className="text">
            <h2>Our Learning Philosophy</h2>
            <p>
              At our school, we focus on providing a well-rounded education that combines academics, creativity,
              and play. Every child is encouraged to explore, imagine, and discover in a safe and supportive
              environment.
            </p>
          </div>
          <div className="image">
            {/* Placeholder for image */}
            <img src={edu} alt="Children in a learning activity" />
          </div>
        </section>

        {/* Section 2: Activities & Highlights */}
        <section className="activities-highlights">
          <div className="image">
            {/* Placeholder for image */}
            
          </div>
          <div className="text">
            <h2>Activities & Highlights</h2>
            <ul>
              <li><strong>Daily Storytime:</strong> Ignite creativity with interactive storytelling sessions.</li>
              <li><strong>Hands-on Projects:</strong> Engage in exciting activities like crafting, drawing, and simple experiments.</li>
              <li><strong>Play-Based Learning:</strong> Develop social skills through outdoor games and teamwork activities.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Dedicated Teachers */}
        <section className="dedicated-teachers">
          <div className="text">
            <h2>Meet Our Teachers</h2>
            <p>
              Our experienced and caring teachers create a warm and inclusive classroom environment. Every teacher is dedicated to fostering confidence, curiosity, and growth in each student.
            </p>
          </div>
          <div className="image">
            {/* Placeholder for image */}
            <img src={staff} alt="Teacher assisting students" />
          </div>
        </section>

        {/* Section 4: Safety & Facilities */}
        <section className="safety-facilities">
          <div className="image">
            {/* Placeholder for image */}
            
          </div>
          <div className="text">
            <h2>Safety & Facilities</h2>
            <p>
              Your child's safety is our priority. We maintain secure, clean, and child-friendly facilities, including colorful classrooms, a well-stocked library, and a dedicated play area.
            </p>
          </div>
        </section>

        {/* Section 5: Extracurricular Fun */}
        <section className="extracurricular">
          <div className="text">
            <h2>Extracurricular Fun</h2>
            <p>
              Beyond academics, we provide exciting extracurricular activities like music, art, dance, and field trips
              to help children explore their passions and build friendships.
            </p>
          </div>
          <div className="image">
            {/* Placeholder for image */}
            <img src={sport} alt="Students enjoying music class" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Classes;
