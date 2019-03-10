import { createStore, EasyPeasyConfig } from "easy-peasy"
import { createLogger } from "redux-logger"
import { settings, SettingsModel } from "src/state/settings"
import { fretboard, Fretboard } from "src/state/fretboard"

export interface StoreModel {
  settings: SettingsModel
  fretboard: Fretboard
}

export const store = createStore<StoreModel, EasyPeasyConfig>(
  {
    settings,
    fretboard,
  },
  {
    middleware: [
      createLogger({
        collapsed: true,
      }),
    ],
  }
)
