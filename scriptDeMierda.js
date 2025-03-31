window.addEventListener('load', () => {
    console.log('¡Un pichon!');

    localStorage.setItem('datosUltraPrivados', JSON.stringify({
        contraseñas: ['123456', 'password', 'qwerty'],
        tarjetasDeCredito: ['4111 1111 1111 1111', '5500 0000 0000 0004'],
        ubicacion: 'Tu casa, probablemente',
        secretosOscuros: 'Soy heterosexual'
      }));
      
      console.log('Te cabió por gil');

    setTimeout(() => {
        document.title = 'YOU JUST LOST'

    }, 3000)

    setTimeout(() => {
        alert('Ah... ¿Seguís acá, masoquista?');
    
        for (let i = 0; i > 0; i++) {
            window.open(window.location.href);
        }
    }, 5000);
});

