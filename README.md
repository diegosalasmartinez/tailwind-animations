# Tailwind CSS Animations

A collection of beautifull animations ready to use for your project.

## Installation :book:
- npm
```bash
npm install @midudev/tailwind-animations
```
- pnpm
```bash
pnpm install @midudev/tailwind-animations
```
- yarn
```bash
yarn add @midudev/tailwind-animations
```

#### Plugin Implementation
Add plugin to your project configuration

```js
// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'

export default {
  // rest of the options
  plugins: [
    animations
  ],
}
```

## Usage :gear:

#### Example

```html
<div class="animate-fade-in">
  Fade in box
</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Slow animation after 300ms to slide in from bottom
</div>
```
