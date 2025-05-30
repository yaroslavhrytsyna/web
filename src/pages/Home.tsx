import React, { useState } from "react";
import ClubCard from "../components/ClubCard";

function Home() {
  const [featuredClubs] = useState([
    {
      id: 1,
      name: "STEM Explorers",
      description: "Hands-on science and tech projects for curious young minds.",
      ageRange: "6-12",
      price: 60,
      location: "Downtown",
      category: "Science & Technology",
      imageUrl: "/images/science.jpg",
      link: "/clubs/stem",
    },
    {
      id: 2,
      name: "Little Artists Studio",
      description: "Painting, sculpting, and creative expression for all ages.",
      ageRange: "4-14",
      price: 55,
      location: "West End",
      category: "Art",
      imageUrl: "/images/art.jpg",
      link: "/clubs/art",
    },
    {
      id: 3,
      name: "Junior Sports League",
      description: "Fun and fitness through friendly sports competitions.",
      ageRange: "7-15",
      price: 40,
      location: "City Park",
      category: "Sports",
      imageUrl: "/images/sport.jpg",
      link: "/clubs/sport",
    },
    {
      id: 4,
      name: "Kids Theatre Club",
      description: "Drama, performance and self-expression for all ages.",
      ageRange: "5-13",
      price: 50,
      location: "Community Center",
      category: "Theatre",
      imageUrl: "/images/theatre.jpg",
      link: "/clubs/theatre",
    },
    {
      id: 5,
      name: "Coding for Kids",
      description: "Learn to code through fun games and challenges.",
      ageRange: "8-16",
      price: 65,
      location: "Tech Hub",
      category: "Coding",
      imageUrl: "/images/coding.jpg",
      link: "/clubs/coding",
    },
  ]);

  const containerStyle = {
    padding: "24px",
    maxWidth: "1120px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "5rem", // 5rem = 80px приблизно для відстані між секціями
  };

  const heroStyle = {
    border: "2px solid #93c5fd",
    borderRadius: "12px",
    padding: "40px",
    backgroundColor: "#eff6ff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const bottomSectionStyle = {
    display: "inline-block",
    border: "2px solid #93c5fd",
    borderRadius: "12px",
    padding: "30px 40px",
    background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "720px",
    margin: "0 auto",
    textAlign: "center",
  };

  const featuredGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    maxWidth: "960px",
    margin: "0 auto",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "32px",
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#374151",
    maxWidth: "720px",
    margin: "0 auto 24px",
  };

  const listStyle = {
    textAlign: "left",
    maxWidth: "400px",
    margin: "0 auto",
    color: "#4b5563",
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
          Find the Perfect Club for Your Child
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#4b5563", maxWidth: "600px", margin: "0 auto" }}>
          Discover amazing activities and clubs that help your child grow, learn,
          and thrive in a fun and inspiring environment.
        </p>
      </section>

      {/* Featured Clubs Section */}
      <section>
        <h2 style={sectionTitleStyle}>Featured Clubs</h2>
        <div style={featuredGridStyle}>
          {featuredClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={bottomSectionStyle}>
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "16px" }}>
          Why Choose Our Service?
        </h2>
        <p style={paragraphStyle}>
          We're committed to helping parents find the best opportunities for
          their children. Our platform offers:
        </p>
        <ul style={listStyle}>
          <li>Trusted and vetted clubs and programs</li>
          <li>Easy search and filtering options</li>
          <li>Real parent reviews and ratings</li>
          <li>Personalized recommendations</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
