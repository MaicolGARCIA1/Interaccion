// Importa el componente de autenticación
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Interactions from './Components/Interactions/Interactions';
import Campus from './Components/Campus/Campus';
import Norte from './Components/Norte/Norte';
import Login from './Components/Autenticacion/Autenticacion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Autenticacion" element={<Login />} />
        <Route path="/" element={<Interactions />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/Norte" element={<Norte />} />
        <Route path="/interactions" element={<Interactions />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Interactions from './Components/Interactions/Interactions';
// import Campus from './Components/Campus/Campus';
// import Norte from './Components/Norte/Norte';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Interactions />} />
//         <Route path="/campus" element={<Campus />} />
//         <Route path="/Norte" element={<Norte />} />
//         <Route path="/interactions" element={<Interactions />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


