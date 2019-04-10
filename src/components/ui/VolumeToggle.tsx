import React from "react"
import { useStore, useActions } from "src/utils/hooks"
import { color } from "src/Theme"
import { Box } from "rebass"

export const VolumeToggle: React.FC = () => {
  const { isMuted } = useStore(state => state.settings)
  const { toggleMuted } = useActions(actions => actions.settings)
  const iconColor = isMuted ? color("black60") : color("white")

  return (
    <Box my={1} onClick={() => toggleMuted()} style={{ cursor: "pointer" }}>
      {isMuted ? (
        <svg
          width="25"
          height="25"
          fill={iconColor}
          viewBox="0 0 2048 2048"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1408 480v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z" />
        </svg>
      ) : (
        <svg
          width="25"
          height="25"
          fill={iconColor}
          viewBox="0 0 2048 2048"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M960 480v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z" />
        </svg>
      )}
    </Box>
  )
}