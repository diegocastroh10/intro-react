import Header from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";
import { pizzaCart } from "../js/pizzas";

const Home = () => {
  const [listaPizza] = useState(pizzaCart); // lista de pizzas estáticas
  const [pizzas, setPizzas] = useState([]); // pizzas obtenidas desde la API

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((res) => setPizzas(res));
  }, []);

  // Dividir el arreglo en dos: primeras 3 y últimas 3
  const primeraFila = listaPizza.slice(0, 3);  // Primeras 3 pizzas 
  const segundaFila = pizzas.slice(-3);  // Últimas 3 pizzas desde la API

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Header />

      {/* Primera fila de pizzas */}
      <div className="d-flex flex-row flex-wrap justify-content-center mb-4">
        {primeraFila.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>

      {/* Segunda fila de pizzas (las últimas 3 obtenidas desde el fetch) */}
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {segundaFila.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
