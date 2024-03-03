// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import ExcelSheetManager from './ExcelSheetManager';

function App() {
  return (
    <div className="App">
      {/* <h1>Smile Studios Management</h1> */}
      <ExcelSheetManager />
    </div>
  );
}

// export default App;
// import React, { useState } from 'react';
// import Authentication from './Authentication';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome!</h1>
//           <button onClick={handleLogout}>Logout</button>
//           {/* Render protected content here */}
//         </div>
//       ) : (
//         <Authentication onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

export default App;
