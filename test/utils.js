import tailwind from 'tailwindcss'
import postcss from 'postcss'
import minify from '@csstools/postcss-minify'
import animationsPlugin from '../src/index.js'

const TAILWIND_UTILITIES = '@tailwind utilities;'

export function generatePluginCSS (options = {}) {
  const { inline = '', content = '' } = options

  return postcss([
    minify(),
    tailwind({
      plugins: [animationsPlugin],
      content: [{ raw: content }]
    })
  ])
    .process(`${TAILWIND_UTILITIES} ${inline}`, {
      from: undefined
    })
    .then((result) => result.css)
}
