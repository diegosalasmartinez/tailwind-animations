import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = plugin => {
  const { theme, matchUtilities, addUtilities } = plugin

  const dynamicUtils = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') },
    'animate-fill-mode': { css: 'animation-fill-mode', values: theme('animationFillMode') }
  }

  Object.entries(dynamicUtils).forEach(([name, { css, values }]) => {
    matchUtilities({
      [name]: value => ({
        [css]: value
      })
    }, {
      values
    })
  })

  addUtilities({
    '.animate-ease': {
      'animation-timing-function': 'ease'
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in'
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out'
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out'
    },
    '.animate-linear': {
      'animation-timing-function': 'linear'
    }
  })
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
