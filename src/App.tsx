// // 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button } from '@mui/material';

// // Define User type to structure the API response
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number; // Age will be shown when the button is clicked
// };

// const App: React.FC = () => {
//   // State to hold the list of users
//   const [users, setUsers] = useState<User[]>([]);
//   // State to manage the loading state
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Fetch data from a mock API or real one (e.g., JSONPlaceholder)
//     axios
//       .get('https://jsonplaceholder.typicode.com/users') // Replace this URL with your API endpoint
//       .then((response) => {
//         setUsers(response.data); // Update users state with the fetched data
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the data!', error);
//         setLoading(false); // Set loading to false even on error
//       });
//   }, []); // Empty dependency array means this effect runs only once

//   // Function to handle the "Show Age" button click
//   const handleShowAge = ({age}:{age:number}) => {
//     alert(`User's age is: ${age}`);
//   };

//   return (
//     <div>
//       <h1>Contact List</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {users.map((user) => (
//             <div key={user.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
//               <h2>{user.name}</h2>
//               <p>Email: {user.email}</p>
//               {/* <button onClick={() => handleShowAge(user.age)}>Show Age</button> */}
//               <Button variant='contained' color='primary' onClick={()=> handleShowAge(user)}>Show Age</Button>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GreetingButton from './GreetingButton';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the App</h1>
        <h2> Hiiiii!!! AMALI PRIYA</h2>
        <h1>jko;fjkel;rjgl;</h1>
        <h2>ljdgfldjf</h2>
        <button >show me</button>
        <h3>git push</h3>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/greeting" element={<GreetingButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
















