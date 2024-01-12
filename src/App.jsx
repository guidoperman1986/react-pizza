/* eslint-disable react/prop-types */
import { useId, useState } from "react"
import "./index.css"
import pizzaData from './data';

const data = pizzaData;


function App() {

  const [pizzas, setPizzas] = useState(data);


  return <div className="container">
    <Header />
    <Menu pizzas={pizzas}/>
    <Footer />
  </div>

}

function Header() {
  return( 
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
)}

function Menu({pizzas}) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {
        pizzas.length > 0  ? (
          <>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
              {
                pizzas.map(pizza => 
                  <Pizza 
                    name={pizza.name} 
                    ingredient={pizza.ingredients} 
                    photoName={pizza.photoName} 
                    price={pizza.price} 
                    key={useId} 
                    soldOut={pizza.soldOut}
                  />
                )
              }
            </ul>
          </>
        ) : <p>We are working on our Menu, please come back later.</p> 
      }
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)
  /* if (isOpen) alert("We're currently open");
  else alert("Sorry, we're closed") */

  return <footer className="footer">
    {
      isOpen && 
        <Order closeHour={closeHour}/>
    }
  </footer>
  //return React.createElement('footer', null, 'We are currently open!')
}

function Pizza({soldOut, photoName, name, ingredient, price}) {
  //if (soldOut) return null

  return <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
    <img src={photoName} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <span>{ soldOut ? 'SOLD OUT' : price }</span>
    </div>


  </li>
  
}

function Order({closeHour}) {
  <div className="order">
    <p>We are open until {closeHour}:00. Come visit us or order onlien.</p>
    <button className="btn">Order</button>
  </div>
}

export default App
