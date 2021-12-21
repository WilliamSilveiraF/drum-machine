import React, { useState, useEffect } from "react";
import { Wrapper, Container, DrumPad } from './styles'
import { bankOne } from "./data";


function App() {
  const [topLevel, setTopLevel] = useState(bankOne)
  const [isPlaying, setIsPlaying] = useState('Q')
  const [audio, setAudio] = useState('')
  
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const id = e.key.toUpperCase()
      setIsPlaying(id)
    })
    return () => window.removeEventListener('keydown', setIsPlaying)
  }, [])

  if (audio) {
    audio.play()
    setAudio('')
  }

  return (
    <main>
      <Wrapper>
        <Container id='drum-machine'>
          { topLevel.map((sound, index) => {
            const drumId = sound.keyTrigger
            if (drumId === isPlaying) {
              setIsPlaying('')
              setAudio(new Audio(`${sound.url}`))
            }
          
            return (
              <DrumPad 
                id={ drumId } 
                key={index} 
                onClick={ () => setIsPlaying(drumId) }
                className={ drumId }
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
