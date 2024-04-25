// import React from 'react';
// import './Autenticacion.css'; // Cambia el nombre del archivo CSS a Autenticacion.css

// const Autenticacion = () => {
//   return (
// <section>
//   <div className="form-box">
//     <div className="form-value">
//       <form action="">
//         <h2>Iniciar sesión</h2>
//         <p className="login-text">Por favor, inicia sesión para poder calificar tu experiencia.</p>
//         <div className="inputbox">
//           <ion-icon name="mail-outline"></ion-icon>
//           <input type="email" required />
//           <label htmlFor="">Usuario</label>
//         </div>
//         <div className="inputbox">
//           <ion-icon name="lock-closed-outline"></ion-icon>
//           <input type="password" required />
//           <label htmlFor="">Clave</label>
//         </div>
       
//         <button>Iniciar sesión</button>
//       </form>
//     </div>
//   </div>
// </section>

//   );
// };

// export default Autenticacion;

import React, { useState } from 'react';
import './Autenticacion.css'

const Autenticacion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos de autenticación al servidor o realizar cualquier otra acción necesaria
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    // Luego de procesar los datos, podrías redirigir al usuario a la página de inicio o mostrar un mensaje de bienvenida, etc.
  };

  return (
    <div className='container'>
      <img src="https://media.discordapp.net/attachments/1101500368397029496/1231006226280878081/Imagen_de_WhatsApp_2024-04-19_a_las_16.29.08_28e1b83e.jpg?ex=663562e3&is=6622ede3&hm=1ea062dfa7e82a64c2f16fa35fd2349ffb77689d924926f998a62dbfb8cfb8b3&=&format=webp&width=1012&height=345" alt="" />
      <h2>Iniciar sesión</h2>
      <p>Por favor, inicia sesión para poder calificar tu experiencia.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Autenticacion;