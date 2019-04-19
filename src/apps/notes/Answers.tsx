import React, { useRef } from "react"
import styled from "styled-components"
import { Flex } from "rebass"

import { Display } from "src/components/ui/Typography"
import { useStore, useActions } from "src/utils/hooks"
import { font, fontSize } from "src/Theme"
import { Spacer } from "src/components/ui/Spacer"
import { HintButton } from "src/components/ui/HintButton"

export const Answers = _props => {
  const { pickAnswer } = useActions(actions => actions.notes)
  const { questions } = useStore(state => state.notes)
  const { multipleChoice } = useStore(state => state.settings)

  const answerInputRef = useRef(null)

  return (
    <Flex flexDirection="column" alignItems="center">
      <Spacer mt={1} />
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
        alignItems="center"
      >
        {/*
          Create list of selectable, multiple choice answers
        */}
        {multipleChoice ? (
          <>
            {questions.map((answer, index) => {
              return (
                <Answer onClick={() => pickAnswer(answer.note)} key={index}>
                  {answer.note}
                </Answer>
              )
            })}
          </>
        ) : (
          // Create input
          <Answer>
            <Input
              onKeyDown={submitAnswerOnEnter(pickAnswer)}
              ref={answerInputRef}
              autoFocus
            />
          </Answer>
        )}
      </Flex>

      <HintButton
        onClick={showHint => {
          // Reenable focus on the input once the user is done peeking
          if (!multipleChoice && !showHint) {
            // @ts-ignore
            answerInputRef.current.focus()
          }
        }}
      />
    </Flex>
  )
}

const Answer = styled(({ children, className, ...props }) => {
  return (
    <Flex className={className} p={3} m={1} {...props}>
      <Display size="8">{children}</Display>
    </Flex>
  )
})`
  border: 1px solid #666;
  cursor: pointer;
  width: 10%;
  align-items: center;
  justify-content: center;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);
  user-select: none;

  &:hover {
    background: white;
    color: #333;
    text-shadow: none;

    input {
      color: #333;
    }
  }
`

const Input = styled.input.attrs({
  type: "text",
  maxLen: 2,
})`
  background: none;
  border-radius: 4px;
  border: 0;
  color: white;
  font-family: ${font("display")};

  ${fontSize("8")};

  outline: none;
  text-align: center;
  text-transform: uppercase;
  width: 40px;
`

// Helpers

function submitAnswerOnEnter(onSubmit) {
  return (event: React.KeyboardEvent<HTMLInputElement>) => {
    // ENTER
    if (event.keyCode === 13) {
      const input = event.currentTarget
      let [note, accidental = ""] = input.value.split("")

      if (accidental.toLowerCase() === "b") {
        accidental = "♭"
      }
      if (accidental.toLowerCase() === "#") {
        accidental = "♯"
      }

      const answer = (note + accidental).trim()
      onSubmit(answer)

      // Disable input while submitting
      input.disabled = true

      // Reset answer after submit
      setTimeout(() => {
        input.disabled = false
        input.focus()
        input.value = ""
      }, 2200) // FIXME: Consolidate these timings with fretboard
    }
  }
}
