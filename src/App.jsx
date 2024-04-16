import Reach from 'react'
import './App.css'
import Navbar from "./Navbar"
import Travel from "./Travel"
import data from "./data"

function App() {

  const sortedData = data.slice().sort((a, b) => b.id - a.id);

  const cards = sortedData.map((item) => {
    return <Travel key={item.id} item={item} />;
  });

  return (
    <>
    <Navbar />
    {cards}
    </>
  )

}

export default App
