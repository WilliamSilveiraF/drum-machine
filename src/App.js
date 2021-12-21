import React, { useState} from "react";
import { Wrapper, Container, DrumPad } from './styles'
import { bankOne } from "./data";


function App() {
  const [topLevel, setTopLevel] = useState(bankOne)
  return (
    <main>
      <Wrapper>
        <Container id='drum-machine'>
          { topLevel.map((sound, index) => {
            const audio = new Audio(`${sound.url}`)

            return (
              <DrumPad key={index} onClick={() => audio.play()}>
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
