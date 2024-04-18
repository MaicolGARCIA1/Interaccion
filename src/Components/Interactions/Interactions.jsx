import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Interactions.css';

const Interactions = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ratingsHistory, setRatingsHistory] = useState([]);

  const images = [
    'https://media.discordapp.net/attachments/1101500368397029496/1230177795603169382/Imagen_de_WhatsApp_2024-04-17_a_las_08.55.06_f9e5071f.jpg?ex=66325f5a&is=661fea5a&hm=dbe765115a873dd9ac981fa2c50ff1266761119cb76320b35bdd7bbe2a701d87&=&format=webp&width=700&height=700',
    'https://media.discordapp.net/attachments/1101500368397029496/1230177820685107220/Imagen_de_WhatsApp_2024-04-17_a_las_09.18.12_0bdc7ad0.jpg?ex=66325f60&is=661fea60&hm=2980ccb2eaf44ad2c297ec109825e468d0783a4921f7f1f7932772c863ac913e&=&format=webp&width=700&height=700'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleInteractionClick = (rating) => {
    Swal.fire({
      title: '¡Gracias por tu calificación!',
      text: `Calificación seleccionada: ${rating}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    saveRating(rating);
  };

  const saveRating = (rating) => {
    // Guardar la calificación en el historial
    setRatingsHistory(prevHistory => [...prevHistory, rating]);
  };

  const showHistory = () => {
    // Mostrar el historial de calificaciones
    Swal.fire({
      title: 'Historial de calificaciones',
      html: `<ul>${ratingsHistory.map((rating, index) => `<li key=${index}>${rating}</li>`).join('')}</ul>`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <section>
      <div className="interactions-container">
        <div className="interaction-section">
          <div className="card">
            <h2>Califica tu experiencia en La Gran Colombia</h2>
            <p>Por favor, selecciona una de las siguientes caras para calificar tu experiencia</p>
            <div className="rating-container">
            <button className="rating-button" onClick={() => handleInteractionClick('muy_bueno')} title="Muy Bueno">
  😄 <p>Muy bueno</p>
</button>
<button className="rating-button" onClick={() => handleInteractionClick('bueno')} title="Bueno">
  🙂 <p>Bueno</p>
</button>
<button className="rating-button" onClick={() => handleInteractionClick('neutral')} title="Neutral">
  😐 <p>Neutral</p>
</button>
<button className="rating-button" onClick={() => handleInteractionClick('malo')} title="Malo">
  😞 <p>Malo</p>
</button>
<button className="rating-button" onClick={() => handleInteractionClick('muy_malo')} title="Muy Malo">
  😠 <p>Muy Malo</p>
</button>

            </div>
            <button onClick={showHistory}>Ver historial de calificaciones</button>
          </div>
        </div>
        <div className="card">
          <h2>¡Descubre La Gran Colombia!</h2>
          <div className='carousel'>
            <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactions;



// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import './Interactions.css';

// const Interactions = () => {
//   const handleInteractionClick = (rating) => {
//     // Mostrar el modal SweetAlert2
//     Swal.fire({
//       title: '¡Gracias por tu calificación!',
//       text: `Calificación seleccionada: ${rating}`,
//       icon: 'success',
//       confirmButtonText: 'Aceptar'
//     });
//   };
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     'https://media.discordapp.net/attachments/1101500368397029496/1230177795603169382/Imagen_de_WhatsApp_2024-04-17_a_las_08.55.06_f9e5071f.jpg?ex=66325f5a&is=661fea5a&hm=dbe765115a873dd9ac981fa2c50ff1266761119cb76320b35bdd7bbe2a701d87&=&format=webp&width=700&height=700',
//     'https://media.discordapp.net/attachments/1101500368397029496/1230177820685107220/Imagen_de_WhatsApp_2024-04-17_a_las_09.18.12_0bdc7ad0.jpg?ex=66325f60&is=661fea60&hm=2980ccb2eaf44ad2c297ec109825e468d0783a4921f7f1f7932772c863ac913e&=&format=webp&width=700&height=700'
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prevIndex =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//   <section>
//     <div className="header-container">
//         <header className="header">
//           <img className="header-logo" src="data:image/jpeg;base64,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" />
//           <nav className="header-nav">
//             <ul>
//               <button className='web'><img src="https://cdn-icons-png.flaticon.com/128/558/558593.png" alt="" /> </button>
//             </ul>
//           </nav>
//         </header>
//       </div>
//   <div className="interactions-container">
//       <div className="interaction-section">
//       <div className="card">
//     <h2>Califica tu experiencia en La Gran Colombia</h2>
//     <p>¡Tu opinión es importante para nosotros! Por favor,  <br />selecciona una de las siguientes caras para calificar tu experiencia</p>
//     <div className="rating-container">
//       <button className="rating-button" onClick={() => handleInteractionClick('muy_bueno')} title="Muy Bueno">
//         😄 <p>Muy bueno</p>
//       </button>
//       <button className="rating-button" onClick={() => handleInteractionClick('bueno')} title="Bueno">
//         🙂 <p>Bueno</p>
//       </button>
//       <button className="rating-button" onClick={() => handleInteractionClick('neutral')} title="Neutral">
//         😐 <p>Neutral</p>
//       </button>
//       <button className="rating-button" onClick={() => handleInteractionClick('malo')} title="Malo">
//         😞 <p>Malo</p>
//       </button>
//       <button className="rating-button" onClick={() => handleInteractionClick('muy_malo')} title="Muy Malo">
//         😠 <p>Muy Malo</p>
//       </button>
//     </div>
//   </div>
//       </div>
//       <div className="card">
//       <h2>¡Descubre La Gran Colombia!</h2>
//       <div className='carousel'>
//         <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
//       </div>
//     </div>
//     </div>
 
//     </section>

//   );
// };

// export default Interactions;
