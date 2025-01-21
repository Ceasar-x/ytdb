import React, { useEffect } from "react";
import "./Home.css";
import edu from "../../assets/edu.jpg"
import sport from "../../assets/sport.jpg"
import trop from "../../assets/troph.jpg"
import uni1 from "../../assets/uni1.jpg"
import uni2 from "../../assets/uni2.jpg"
import staff from "../../assets/staff.jpg"


const Home = () => {
  // Use Intersection Observer API to add 'animate' class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const elements = document.querySelectorAll(".scroll-section");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* Big Picture */}
      <div className="num1 scroll-section">
        <div className="word-top">
          <h1>The Best Primary School For Your Child</h1>
          <p>
            Our primary school is a place where learning is fun, creativity is
            encouraged, and every child is valued. We believe in building a
            strong foundation for our students, not just in academics but also
            in kindness, teamwork, and respect for others.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section scroll-section">
        <div className="hero-content">
          <h1>Welcome to Y.T.D. Primary School "B" Ojoro, Ede</h1>
          <p>
            A place where children grow academically, socially, and emotionally
            to become tomorrow's leaders.
          </p>
          <a href="/about" className="learn-more-btn">
            Learn More
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us scroll-section">
        <h2>Why Choose Us?</h2>
        <div className="choose-grid">
          <div className="choose-item">
            <img src={edu} alt="Quality Education" />
            <h3>Quality Education</h3>
            <p>
              Our experienced teachers ensure that every child gets a solid
              foundation in academics.
            </p>
          </div>
          <div className="choose-item">
            <img src={uni1} alt="Creative Environment" />
            <h3>Caring Community</h3>
            <p>
              Our school is a family where every student is valued and supported.
            </p>
          </div>
          <div className="choose-item">
            <img src={uni2} alt="Caring Community" />
            <h3>Caring Community</h3>
            <p>
              Our school is a family where every student is valued and supported.
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section scroll-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-item">
            <img src={sport} alt="Sports Day" />
            <h3>Sports Day</h3>
            <p>Join us for a fun-filled day of sports and games! </p>
          </div>
          <div className="event-item">
            <img src={staff} alt="Open Day" />
            <h3>Open Day</h3>
            <p>Meet our teachers and explore our facilities. </p>
          </div>
          <div className="event-item">
            <img src={trop} alt="Art Exhibition" />
            <h3>Trophies Won</h3>
            <p>See the amazing won by  our talented students! </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section scroll-section">
        <h2>What Our Community Says</h2>
        <div className="testimonial">
          
          <p>
            "The school has a warm and welcoming environment, and my child loves
            learning here."
          </p>
          <span>- Happy Parent</span>
        </div>
        <div className="testimonial">
          
          <p>
            "I have made so many friends, and my teachers always encourage me to
            do my best."
          </p>
          <span>- Grade 5 Student</span>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section scroll-section">
        <h2>Join Our School Today!</h2>
        <p>Take the first step in giving your child the best primary school experience.</p>
        <a href="/about" className="cta-button">
          Learn More
        </a>
      </div>
    </>
  );
};

export default Home;
