// GameStyles.js
import styled from 'styled-components'

export const BoardContainer = styled.main`
  width: fit-content;
  margin: 40px auto;
  text-align: center;

  & > h1 {
    color: #fff;
    margin-bottom: 60px;
    user-select: none;
  }

  & button {
    padding: 8px 12px;
    margin: 25px;
    background: #202124;
    border: none;
    color: #14bdac;
    width: 120px;
    border-radius: 25px;
    transition: 0.2s;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }

  & button:hover {
    background: #eee;
    color: #222;
  }
`

export const Turn = styled.section`
  display: flex;
  justify-content: center;
  margin: 15px auto;
  width: fit-content;
  position: relative;
  border-radius: 10px;

  & div {
    width: 70px;
    height: 70px;
    pointer-events: none;
    border-color: transparent;
  }

  & > div {
    width: 90px;
    height: 90px;
    border: none;
    opacity: 0.575;
  }
`
