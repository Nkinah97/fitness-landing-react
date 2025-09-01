import './index.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Banner from "./components/Baner/Baner.jsx";
import TitleSearch from './components/Title-Search/Title-Search.jsx'
import Header from './components/header/Header.jsx'
import ProductSection from './components/ProductSection/ProductSection.jsx'


function App() {

// fetch('https://68a5f7312a3deed2960f7bc8.mockapi.io/items').then((res => 
//   return (
//     res.json()
//   ) 
// )).then(
//   json => {
//     console.log(json)
//   }
// )

  return (
    <>
      <Header />
      <Banner />
      <TitleSearch />
      <ProductSection />
      
    </>
  )
}

export default App
