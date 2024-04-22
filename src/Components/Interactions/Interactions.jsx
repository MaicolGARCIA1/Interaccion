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
    saveRating(rating);
  };

  const saveRating = async (rating) => {
    const estudiante = {
      id_estudiante: 1,
      tipo_interaccion: "Clase",
      comentario: "Muy buena clase",
      calificacion: rating
    };

    try {
      const response = await fetch('http://localhost:5000/interactions/save-rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(estudiante)
      });
      if (!response.ok) {
        throw new Error('Error saving rating');
      }
      setRatingsHistory(prevHistory => [...prevHistory, rating]);
      Swal.fire({
        title: '¡Gracias por tu calificación!',
        text: `Calificación seleccionada: ${rating}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  return (
    <section className="interactions-section">
      <header className="header">
        <img className='header-logo' src="https://media.discordapp.net/attachments/1101500368397029496/1231006226280878081/Imagen_de_WhatsApp_2024-04-19_a_las_16.29.08_28e1b83e.jpg?ex=663562e3&is=6622ede3&hm=1ea062dfa7e82a64c2f16fa35fd2349ffb77689d924926f998a62dbfb8cfb8b3&=&format=webp&width=1012&height=345" alt="" />
        <nav className="header-nav">
          <ul>
            <button className='web'><img src="https://cdn-icons-png.flaticon.com/128/558/558593.png" alt="" /> </button>
          </ul>
        </nav>
      </header>

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
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [ratingsHistory, setRatingsHistory] = useState([]);

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

//   const handleInteractionClick = (rating) => {


//     saveRating(rating);
//   };

//   const saveRating = async (rating) => {

//     const estudiante = {
//       id_estudiante: 1,
//       tipo_interaccion: "Clase",
//       comentario: "Muy buena clase",
//       calificacion: rating
//     }


//     try {
//       const response = await fetch('http://localhost:5000/interactions/save-rating', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(estudiante )
//       });
//       if (!response.ok) {
//         throw new Error('Error saving rating');
//       }
//       setRatingsHistory(prevHistory => [...prevHistory, rating]);
//       Swal.fire({
//         title: '¡Gracias por tu calificación!',
//         text: `Calificación seleccionada: ${rating}`,
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//       });
//     } catch (error) {
//       console.error('Error saving rating:', error);
//     }
//   };



//   return (
//     <section>
//   <header className="header">
//           <img className='header-logo' src="https://media.discordapp.net/attachments/1101500368397029496/1231006226280878081/Imagen_de_WhatsApp_2024-04-19_a_las_16.29.08_28e1b83e.jpg?ex=663562e3&is=6622ede3&hm=1ea062dfa7e82a64c2f16fa35fd2349ffb77689d924926f998a62dbfb8cfb8b3&=&format=webp&width=1012&height=345" alt="" />
//           <nav className="header-nav">
//              <ul>
//               <button className='web'><img src="https://cdn-icons-png.flaticon.com/128/558/558593.png" alt="" /> </button>
//              </ul>
//           </nav>        </header>


//       <div className="interactions-container">
//         <div className="interaction-section">
//           <div className="card">
//             <h2>Califica tu experiencia en La Gran Colombia</h2>
//             <p>Por favor, selecciona una de las siguientes caras para calificar tu experiencia</p>
//             <div className="rating-container">
//             <button className="rating-button" onClick={() => handleInteractionClick('muy_bueno')} title="Muy Bueno">
//   😄 <p>Muy bueno</p>
// </button>
// <button className="rating-button" onClick={() => handleInteractionClick('bueno')} title="Bueno">
//   🙂 <p>Bueno</p>
// </button>
// <button className="rating-button" onClick={() => handleInteractionClick('neutral')} title="Neutral">
//   😐 <p>Neutral</p>
// </button>
// <button className="rating-button" onClick={() => handleInteractionClick('malo')} title="Malo">
//   😞 <p>Malo</p>
// </button>
// <button className="rating-button" onClick={() => handleInteractionClick('muy_malo')} title="Muy Malo">
//   😠 <p>Muy Malo</p>
// </button>

//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <h2>¡Descubre La Gran Colombia!</h2>
//           <div className='carousel'>
//             <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Interactions;