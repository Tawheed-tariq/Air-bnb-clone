import './App.css'
import  NavBar  from './components/NavBar'
import Hero from './components/Hero'
import ListData from './components/List'
import Card from './components/Card'



function App() {


  const CardElements = ListData.map(item => {
    return <Card
     key={item.id} 
     item={item} //or {...item} then prop will be prop.img instead of prop.item.img
     />
  })


  return (
    <>
      <NavBar />
      <Hero/>
      <section className='cards-list'>
        {CardElements}
      </section>
    </>
  )
}

export default App
