import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('Hero.jpeg')" }}>
        <div className="hero-overlay">
          <div className="text-center">
            <h1>Welcome to the Ganesh Museum</h1>
            <p>Discover the Rich Culture and Heritage of Lord Ganesh</p>
            <Link to="/explore" className="btn">
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray exhibits" id="exhibits">
        <div className="container text-center">
          <h2>Featured Exhibits</h2>
          <div className="grid">
            <div className="exhibit">
              <h3>The Origins of Ganesh</h3>
              <p>
                Ganesh, created by Goddess Parvati and later given an elephant
                head by Lord Shiva, symbolizes wisdom and strength.
              </p>
            </div>
            <div className="exhibit">
              <h3>Artistic Representations of Ganesh</h3>
              <p>
                Ganesh is depicted in various forms, from traditional Indian
                statues to contemporary art.
              </p>
            </div>
            <div className="exhibit">
              <h3>Festivals Celebrating Ganesh</h3>
              <p>
                The grand festival of Ganesh Chaturthi celebrates Ganesh’s birth
                with vibrant processions and music.
              </p>
            </div>
          </div>
          <Link to="#all-exhibits" className="btn">
            View All Exhibits
          </Link>
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="py-20 visitor-info" id="visit">
        <div className="container text-center">
          <h2>Visitor Information</h2>
          <p>Hours of Operation: Open daily from 10 AM to 6 PM</p>
          <p>Admission Fees: Adults: $10 | Children under 12: Free</p>
          <p>Location: 123 Ganesh Lane, City, State, ZIP</p>
          <Link to="#plan-your-visit" className="btn">
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray" id="events">
        <div className="container text-center">
          <h2>Upcoming Events</h2>
          <h3>Ganesh Chaturthi Celebration</h3>
          <p>Date and Details</p>
          <h3 className="mt-4">Art Workshop: Crafting Ganesh Statues</h3>
          <p>Date and Details</p>
          <Link to="#all-events" className="btn">
            See All Events
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container text-center">
          <h2>Testimonials</h2>
          <div className="mt-10">
            <p className="italic">
              “A beautiful tribute to Lord Ganesh! The exhibits are
              enlightening.”
            </p>
            <p className="italic mt-4">
              “A must-visit for anyone interested in culture and art!”
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gray newsletter" id="newsletter">
        <div className="container text-center">
          <h2>Stay Updated!</h2>
          <p>Subscribe to our newsletter for the latest news and events.</p>
          <div className="mt-6">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
