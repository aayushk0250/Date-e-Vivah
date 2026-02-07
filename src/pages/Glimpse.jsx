import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Glimpse.css";

const profiles = [
  {
    id: 1,
    name: "Aarav",
    age: 26,
    height: "5'8\"",
    company: "Product-based IT",
    college: "IIT",
    salary: "₹12–15 LPA",
    image: "https://images.unsplash.com/photo-1589360041338-2143448e5c80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Ambitious, family-oriented, loves travel and fitness."
  },
  {
    id: 2,
    name: "Ananya",
    age: 24,
    height: "5'4\"",
    company: "MNC",
    college: "BITS Pilani",
    salary: "₹8–10 LPA",
    image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/8e/07/94/1f/2c/v1_E10/E108F74R.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=fce10b89f6ef4bb722cf5b5411b24e8f7e5875f1e8bc5186be5b0a632f65583b",
    bio: "Creative, calm, values meaningful conversations."
  },
  {
    id: 3,
    name: "Rony",
    age: 28,
    height: "5'10\"",
    company: "Startup",
    college: "NIT",
    salary: "₹15–18 LPA",
    image: "https://t3.ftcdn.net/jpg/04/63/22/18/360_F_463221862_vfyvz35Q5FwuJENuS3tLrc7pCGigMe37.jpg",
    bio: "Entrepreneurial mindset, believes in growth & balance."
  },
  {
    id: 4,
    name: "Priya",
    age: 28,
    height: "5'4\"",
    company: "MNC",
    college: "NITA",
    salary: "₹40-50 LPA",
    image: "https://media.istockphoto.com/id/1324489178/photo/portrait-of-young-businesswoman.jpg?s=612x612&w=0&k=20&c=veBaFV9sgk6W6lGnigzCM4P5GV3QN7AAm-pa0o0X9ko=",
    bio: "Entrepreneurial mindset, believes in growth & balance."
  }
];

export default function Glimpse() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="glimpse-page">
      {/* Header */}
      <div className="glimpse-header">
        <h1>Take a Glimpse ✨</h1>
        <p>See how meaningful matches look inside Date-a-Vivah</p>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            onClick={() => setSelectedProfile(profile)}
          >
            <img src={profile.image} alt="profile" />
            <div className="card-info">
              <h3>{profile.name}</h3>
              <p>Age: {profile.age}</p>
              <p>Height: {profile.height}</p>
              <p>Company: {profile.company}</p>
              <p>College: {profile.college}</p>
              <p className="salary">{profile.salary}</p>
            </div>
            <div className="card-overlay">View Full Profile 🔒</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProfile && (
        <div className="modal-backdrop" onClick={() => setSelectedProfile(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProfile.image} alt="profile" />
            <h2>{selectedProfile.name}</h2>

            <div className="blurred">
              <p>{selectedProfile.bio}</p>
              <p>Family Background</p>
              <p>Preferences & Lifestyle</p>
            </div>

            <p className="lock-text">
              Login or create an account to view complete profile & connect 💍
            </p>

            <div className="modal-actions">
                <button
                    className="login-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProfile(null);
                        navigate("/login");
                    }}
                >
                    Login
                </button>

                <button
                    className="register-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProfile(null);
                        navigate("/register");
                    }}
                >
                    Create Free Account
                </button>
                </div>


          </div>
        </div>
      )}
    </div>
  );
}
