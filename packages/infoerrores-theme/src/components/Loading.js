import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => <Spinner />

export default Loading

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 58px solid #eee;
  border-top: 58px solid #54366d;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  animation: ${spin} 1s linear infinite;
  margin: 24px auto;
`
