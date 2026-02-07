import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Glimpse from "./pages/Glimpse.jsx";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route
        path="/"
        element={
          <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen text-gray-900">

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
