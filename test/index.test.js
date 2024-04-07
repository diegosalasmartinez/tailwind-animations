import { generatePluginCSS } from './utils'
import { describe, it, expect } from 'vitest'

describe('tailwind-animations plugin', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Hello</div>'
    })

    expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out both}')
  })

  it('use a predefined delay animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>'
    })

    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })

  it('use a custom delay animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[120ms]">Hello</div>'
    })

    expect(css).toMatch('.animate-delay-\\[120ms\\]{animation-delay:120ms}')
  })

  it('use a predefined delay duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>'
    })

    expect(css).toMatch('.animate-duration-100{animation-duration:100ms}')
  })

  it('use a custom duration animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[120ms]">Hello</div>'
    })

    expect(css).toMatch('.animate-duration-\\[120ms\\]{animation-duration:120ms}')
  })

  it('use a predefined animation fill mode', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-fill-mode-both">Hello</div>'
    })

    expect(css).toMatch('.animate-fill-mode-both{animation-fill-mode:both}')
  })

  it('use an animation timing function', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-ease">Hello</div>'
    })

    expect(css).toMatch('.animate-ease{animation-timing-function:ease}')
  })
})
