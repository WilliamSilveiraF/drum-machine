import React, { useState, useEffect } from "react";
import { Wrapper, Container, DrumPad } from './styles'
import { bankOne } from "./data";


function App() {
  const [isPlaying, setIsPlaying] = useState('')
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
          { bankOne.map((sound, index) => {
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
