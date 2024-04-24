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
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);
  const handleInteractionClick = (rating) => {
  // Ajusta los valores de rating si es necesario para que coincidan con los esperados en el backend
  if (rating === 'muy_bueno') {
    rating = 'muy bueno';
  } else if (rating === 'muy_malo') {
    rating = 'muy malo';
  }
  saveRating(rating);
};


  // const handleInteractionClick = (rating) => {
  //   saveRating(rating);
  // };
  const saveRating = async (rating) => {
    const estudiante = {
      id_estudiante: 1,
      tipo_interaccion: "Clase",
      comentario: "Muy buena clase",
      calificacion: rating,
      sede: "Interactions"
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
        text: `Tu calificación ha sido aceptada. ¡Gracias por tu participación!`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 3000, // Tiempo en milisegundos (en este caso, 3 segundos)
        timerProgressBar: true, // Muestra una barra de progreso para el temporizador
        onClose: () => { // Función que se ejecuta cuando se cierra la alerta
          // Coloca aquí cualquier código adicional que desees ejecutar después de que se cierre la alerta
        }
      });
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  return (
    <section className="interactions-section">
      <div className='Encabezado'>
      <header className="header">
        <img className='header-logo' src="https://media.discordapp.net/attachments/1101500368397029496/1231006226280878081/Imagen_de_WhatsApp_2024-04-19_a_las_16.29.08_28e1b83e.jpg?ex=663562e3&is=6622ede3&hm=1ea062dfa7e82a64c2f16fa35fd2349ffb77689d924926f998a62dbfb8cfb8b3&=&format=webp&width=1012&height=345" alt="" />
      
      </header>
      </div>

      <div className="interactions-container">
        <div className="interaction-section">
          <div className="card1">
            <h2>Califica tu experiencia en La Gran Colombia</h2>
            <p>Por favor, selecciona una de las siguientes caras para calificar tu experiencia.</p>
<p>¿Cómo te sientes con respecto a tu experiencia? Tu opinión es muy importante para nosotros y nos ayuda a mejorar nuestros servicios. Utiliza las caras a continuación para expresar tu satisfacción:</p>

            <div className="rating-container">
              <button className="rating-button" onClick={() => handleInteractionClick('muy_bueno')} title="Muy Bueno">
                 <img src="https://media.discordapp.net/attachments/1101500368397029496/1232796054596882504/muy_bueno.png?ex=662ac24b&is=662970cb&hm=094d4395dac2b63418bd1e8fc9a4973bc2105df4582779e6912fb68cb33bf1f0&=&format=webp&quality=lossless&width=547&height=549" alt="" /><p>Muy bueno</p>
              </button>
              <button className="rating-button" onClick={() => handleInteractionClick('bueno')} title="Bueno">
                <img src="https://media.discordapp.net/attachments/1101500368397029496/1232796054018195476/bueno.png?ex=662ac24b&is=662970cb&hm=8d17b3c5106cd9eaf5ec4fc720603b3df22b8d6cea6e4d4e0e303864121e281e&=&format=webp&quality=lossless&width=549&height=549" alt="" /> <p>Bueno</p>
              </button>
              <button className="rating-button" onClick={() => handleInteractionClick('neutral')} title="Neutral">
                <img src="https://media.discordapp.net/attachments/1101500368397029496/1232796054840410154/neutral.png?ex=662ac24b&is=662970cb&hm=35a0dc6bf3495dfc647076eedee91d35944543ea5653ad9bcd6a5f9545379a9f&=&format=webp&quality=lossless&width=549&height=549" alt="" /> <p>Neutral</p>
              </button>
              <button className="rating-button" onClick={() => handleInteractionClick('malo')} title="Malo">
                <img src="https://media.discordapp.net/attachments/1101500368397029496/1232796054269722735/malo.png?ex=662ac24b&is=662970cb&hm=8386b6c04af0fba5063cd91a4355cc613c3977bfb5bececf05abf0c86d21c63d&=&format=webp&quality=lossless&width=549&height=549" alt="" /><p>Malo</p>
              </button>
              <button className="rating-button" onClick={() => handleInteractionClick('muy_malo')} title="Muy Malo">
                <img src="https://media.discordapp.net/attachments/1101500368397029496/1232794694136758362/MUYPUTO.png?ex=662ac107&is=66296f87&hm=95187695002c3357267c2fa08afb9b2ec22eb8f67c8020284fc2e2fb1ce7b48d&=&format=webp&quality=lossless&width=549&height=549" alt="" /> <p>Muy Malo</p>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className='carousel'>
            <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Interactions;