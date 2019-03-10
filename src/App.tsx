import React from "react"
import styled from "styled-components"

import { Flex } from "rebass"
import { Fretboard } from "src/components/Fretboard"
import { Settings } from "src/components/Settings"
import { Answers } from "src/components/Answers"
import { Score } from "src/components/Score"
import { PosterBoard } from "src/components/PosterBoard"

export const App = () => {
  return (
    <AppContainer>
      <PosterBoard />
      <Score />
      <Fretboard />
      <Answers />
      <Settings />
    </AppContainer>
  )
}

const AppContainer = styled(Flex)`
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`
