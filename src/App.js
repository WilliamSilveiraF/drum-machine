import React, { useState, useEffect } from "react";
import { Wrapper, Container, DrumPad } from './styles'
import { bankOne } from "./data";


function App() {
  const [topLevel, setTopLevel] = useState(bankOne)
  const [isPlaying, setIsPlaying] = useState('Q')
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const id = e.key.toUpperCase()
      setIsPlaying(id)
    })
    return () => window.removeEventListener('keydown', setIsPlaying)
  }, [])
  
  return (
    <main>
      <Wrapper>
        <Container id='drum-machine'>
          { topLevel.map((sound, index) => {
            const audio = new Audio(`${sound.url}`)
            const drumId = sound.keyTrigger
            const playSong = (id) => {
              setIsPlaying(id)
              audio.play()
              setTimeout(() => {
                setIsPlaying('')
              }, 500);
            }
            return (
              <DrumPad 
                id={ drumId } 
                key={index} 
                onClick={ () => playSong(drumId) }
                onKeyDown={(e) => console.log(e.target.value)}
                className={ drumId == isPlaying && 'active' }
              >
                { sound.keyTrigger }
              </DrumPad>
            );
          })}
        </Container>
      </Wrapper>
    </main>
  );
}

export default App;
