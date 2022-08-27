import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import quotes from './quotes.json'

function App() {

  const colors = ['#1CD6CE','#00BFE5', '#00A3ED', '#5F80DC', '#9856B0', '#AC266F']

  
  const radomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[radomColor]}`
  
  const changeColors = colors[radomColor]

  const randomQuotes = Math.floor(Math.random() * quotes.length)

  const [ index, setIndex] = useState(randomQuotes)

  const arrow = () =>{
    const randomQuotes = Math.floor(Math.random() * quotes.length)
    setIndex(randomQuotes)
  }

  return (
    <div>
      <QuoteBox changeColors={changeColors} paragraph={quotes[index].quote} author={quotes[index].author} arrowIcon={arrow}/> 
    </div>
  )
}

export default App
