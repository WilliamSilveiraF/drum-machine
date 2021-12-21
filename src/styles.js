import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`
export const Container = styled.div`
  margin: auto;
  background: #fff;
  height: 320px;
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows; 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`
export const DrumPad = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 8px;
  height: 80px;
  widht: 80px;
  border: 2px solid black;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background: cyan;
  }
`
