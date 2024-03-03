// import React, { useState } from 'react';

// const Authentication = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Verify username and password (you can replace this with your authentication logic)
//     if (username === 'user' && password === 'password') {
//       onLogin(); // Callback to update authentication state in parent component
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Authentication;
