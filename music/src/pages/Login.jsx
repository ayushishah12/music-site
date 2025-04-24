// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const login = useAuthStore((state) => state.login);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//     navigate("/"); // Redirect after login (change the path as needed)
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 shadow-lg rounded-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg mb-3"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg mb-3"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-500">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/Home"); // Redirect after login (change the path as needed)
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to bottom right, #0a1128, #1b1038, #320b41, #540e48, #800d4d)",
        backgroundSize: "200% 200%",
        animation: "colorShift 6s ease infinite",
      }}
    >
      <div className="bg-[#0a1128] text-white p-8 shadow-2xl rounded-2xl w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-300">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-purple-500 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#001f54] text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-purple-500 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#001f54] text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 shadow-md transition-all duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-300">
          Don't have an account? {" "}
          <a href="/signup" className="text-purple-400 font-semibold underline hover:text-purple-500">
            Sign Up
          </a>
        </p>
      </div>

      <style>
        {`
          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Login;