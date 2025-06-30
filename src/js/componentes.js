import '../css/componentes.css';

export const saludar = (nombre) => {
    //   return `Hola, ${nombre}!`;
    console.log(`Hola, ${nombre}!`);
    
    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}!`;
    document.body.append(h1);
}

export const saludo = () => {
  const mensaje = `Hola desde ES6`;
  console.log(mensaje);
};
