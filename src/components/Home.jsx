import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState } from "react";
import { pizzaCart } from "../js/pizzas";

const Home = () => {
  const [listaPizza] = useState(pizzaCart);

  // Dividir el arreglo en dos: primeras 3 y últimas 3
  const primeraFila = listaPizza.slice(0, 3);
  const segundaFila = listaPizza.slice(3, 6);

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

      {/* Segunda fila de pizzas */}
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

