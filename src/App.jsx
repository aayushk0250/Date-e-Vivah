import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Glimpse from "./pages/Glimpse.jsx";


function useTypewriter(words, speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // typing
      if (text.length < currentWord.length) {
        timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          speed
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length - 1)),
          speed / 2
        );
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

function RotatingImages() {
  const images = [
    `${import.meta.env.BASE_URL}images/couple1.jpeg`,
    `${import.meta.env.BASE_URL}images/couple2.jpg`,
    `${import.meta.env.BASE_URL}images/couple3.jpg`,
    `${import.meta.env.BASE_URL}images/couple4.webp`
  ];



  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-24">
      <div className="relative w-[420px] h-[260px] md:w-[520px] md:h-[320px] rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-md">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Dating preview"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();

  const typedText = useTypewriter([
    "For meaningful marriages",
    "For families who care",
    "For conversations that matter",
    "For choosing once, choosing right"
  ]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route
        path="/"
        element={
          <div className="relative bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen text-gray-900">
            {/* Cursor Glow */}
            <div
              className="pointer-events-none fixed top-0 left-0 w-[280px] h-[280px] rounded-full blur-[60px] opacity-70 transition-transform duration-150"
              style={{
                transform: `translate(${cursor.x - 140}px, ${cursor.y - 140}px)`,
                background:
                  "radial-gradient(circle at center, rgba(219,39,119,0.9), rgba(168,85,247,0.6), transparent 65%)",
                zIndex: 0
              }}
            />



            {/* NAVBAR */}
            <nav className="flex justify-between items-center px-10 py-6">
              <h1 className="text-2xl font-bold text-pink-600">
                Date-a-Vivah
              </h1>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition"
              >
                Get Started
              </button>
            </nav>

            {/* HERO */}
            <section className="flex flex-col items-center text-center mt-20 px-6">
              <h2 className="text-5xl font-extrabold leading-tight max-w-3xl">
                Date with intention.
                <span className="text-pink-600"> Choose your forever.</span>
              </h2>

              <p className="mt-4 text-xl font-medium text-pink-700 h-7">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>


              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Date-a-Vivah is not just another dating app.
                It’s where real conversations lead to real commitments.
              </p>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => navigate("/Glimpse")}
                  className="px-8 py-3 rounded-full bg-pink-600 text-white text-lg hover:scale-105 transition"
                >
                  Get a Glimpse
                </button>

                <button
                  className="px-8 py-3 rounded-full border border-pink-600 text-pink-600 text-lg hover:bg-pink-50 transition"
                >
                  Learn More
                </button>
              </div>
            </section>

            {/* FEATURES */}
            <section className="mt-32 px-10">
              <h3 className="text-3xl font-bold text-center mb-12">
                Why Date-a-Vivah?
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Date before deciding",
                    desc: "No forced matches. Get to know each other naturally before commitment."
                  },
                  {
                    title: "Intentional matches",
                    desc: "Everyone here is serious about marriage, not casual swipes."
                  },
                  {
                    title: "Privacy first",
                    desc: "Your data, chats, and preferences stay safe and respected."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 transition"
                  >
                    <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="mt-32 px-10">
              <h3 className="text-3xl font-bold text-center mb-12">
                How it works
              </h3>

              <div className="grid md:grid-cols-3 gap-10 text-center">
                <Step number="01" title="Create Profile" />
                <Step number="02" title="Date & Connect" />
                <Step number="03" title="Choose Forever" />
              </div>
            </section>

            {/* CTA */}
            <section className="mt-32 mb-20 px-10 text-center">
              <div className="bg-pink-600 text-white rounded-3xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold">
                  Ready to date with purpose?
                </h3>
                <p className="mt-4 text-lg">
                  Start your journey towards something meaningful.
                </p>
                <button
                  onClick={() => navigate("/register")}
                  className="mt-8 px-8 py-3 bg-white text-pink-600 rounded-full text-lg hover:scale-105 transition"
                >
                  Join Date-a-Vivah
                </button>
              </div>
            </section>
            
            {/* REAL PEOPLE PREVIEW */}
            <section className="mt-32 px-10 text-center">
              <h3 className="text-2xl font-semibold mb-6">
                Real people. Real intentions.
              </h3>
              <p className="text-gray-600 mb-10">
                A glimpse of genuine connections happening every day.
              </p>

              <RotatingImages />
            </section>

            {/* FOOTER */}
            <footer className="text-center py-6 text-gray-500">
              © 2026 Date-a-Vivah. Not your average dating app.
            </footer>

          </div>
        }
      />

      {/* AUTH + PREVIEW ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/glimpse" element={<Glimpse />} />

    </Routes>
  );
}

function Step({ number, title }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:scale-105 transition">
      <div className="text-pink-600 text-4xl font-bold mb-4">{number}</div>
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );
}
