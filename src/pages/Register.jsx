import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">

      {/* LEFT: FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-purple-50">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 p-3 border rounded-lg"
          />

          {/* Upload ID */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Upload any Id card for verification
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm"
            />
          </div>

          <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already registered?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-pink-600 cursor-pointer font-medium hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT: GIF */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGNhbGIyM28xcDR4c2xsdG15N3Azd3hvZmJka2lpdm1zYnBwbmhtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif"
          alt="Dating vibe"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
