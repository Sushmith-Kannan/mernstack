import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Element } from 'react-scroll';
import Header from './Components/Header/Header'
import Unleash from './Components/Unleash/Unleash'
import Container from './Components/Containers/container'
import Popular from './Components/Popular/Popular'
import Picbox from './Components/Picbox/Picbox'
import Guide from './Components/Guide/guide'
import Container2 from './Components/Containers2/Container2'
import Says from './Components/Says/Says'
import Cus from './Components/Cus/Cus'
import Ques from './Components/Quests/Ques'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
    <Header/>
    <Element name="unleash">
      <Unleash/>
      </Element>
      <Container/>
      <Element name="popular">  
      <Popular/>
      <Picbox/>
      </Element>
      
      <Element name="guide">
      <Guide/>
      </Element>
      <Container2/>
      <Element name="blog">
      <Says/>
      <Cus/>
      </Element>
      <Element name ="ques">
      <Ques/>
      </Element>
      
    </body>
      
    </>
  )
}

export default App
