// import React from "react";
// import Container from "../components/common/Container";

// export default function Home() {
//   return (
//     <Container className="py-12">
//       <div className="max-w-2xl mx-auto text-center space-y-6">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
//           <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//           Ready to Discover
//         </div>
//         <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
//           Home
//         </h1>
//         <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
//           Discover and book the finest sports turfs in your vicinity with ease.
//         </p>
//         <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm max-w-sm mx-auto shadow-xl">
//           <h3 className="text-white font-bold text-lg mb-2">Coming Soon</h3>
//           <p className="text-slate-400 text-sm">
//             We are hard at work building the turf search and discovery system.
//           </p>
//         </div>
//       </div>
//     </Container>
//   );

import React from "react";
import Container from "../components/common/Container";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, token, isAuthenticated, logout } = useAuth();

  console.log("User:", user);
  console.log("Token:", token);
  console.log("Authenticated:", isAuthenticated);

  return (
    <Container className="py-12">
      {" "}
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {" "}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          {" "}
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Ready to Discover{" "}
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
          Home
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
          Discover and book the finest sports turfs in your vicinity with ease.
        </p>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm max-w-md mx-auto shadow-xl">
          {isAuthenticated ? (
            <>
              <h3 className="text-emerald-400 font-bold text-xl mb-4">
                Welcome {user?.name}
              </h3>

              <div className="space-y-2 text-left text-slate-300">
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>

                <p>
                  <strong>Email:</strong> {user?.email}
                </p>

                <p>
                  <strong>Role:</strong> {user?.role}
                </p>
              </div>

              <button
                onClick={logout}
                className="mt-6 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h3 className="text-yellow-400 font-bold text-xl mb-2">
                Not Logged In
              </h3>

              <p className="text-slate-400">Please login to continue.</p>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
