# minecraft-icons-react ⛏️

[![NPM Version](https://img.shields.io/npm/v/minecraft-icons-react.svg)](https://www.npmjs.com/package/minecraft-icons-react)

A collection of **708** high-quality, scalable Minecraft icons (primarily blocks and items) available as easy-to-use React components.

Based on SVG, these icons are crisp at any size and can be styled with standard CSS or inline styles. All props are passed directly to the underlying SVG element using `{...props}`, giving you complete control over appearance and behavior.

## Features

*   **708 Icons:** Covers a wide range of blocks and items initially. (See Future Plans!)
*   **Scalable SVGs:** Looks great at any size, perfect for responsive designs.
*   **React Components:** Simple integration into your React projects.
*   **Fully Customizable:** Pass any SVG props (`className`, `style`, `width`, `height`, `onClick`, etc.) directly to the icon components.
*   **Tree-shakeable:** Only the icons you import will be included in your final bundle (if your bundler supports tree-shaking, like Webpack or Rollup).

## Installation

```bash
# Using npm
npm install minecraft-icons-react

# Using yarn
yarn add minecraft-icons-react
```

## Usage

Import the specific icons you need and use them like any other React component. With the actual PascalCase name of the Minecraft item/block you want to use (e.g., `DiamondSword`, `CraftingTable`, `IronIngot`).

```jsx
import React from 'react';
import { IronIngot } from 'minecraft-icons-react';

function MyComponent() {
  return (
    <div>
        <IronIngot width="32" height="32" />
    </div>
  );
}

export default MyComponent;
```

## Future Plans

I plan to expand the icon set in the future! Contributions are welcome.

*   [ ] Add **Mob Icons** (e.g., `[Creeper]`, `[Zombie]`, `[Villager]`)
*   [ ] Add **UI Element Icons** (e.g., `[Heart]`, `[Armor]`, `[Hunger]`, `[ExperienceOrb]`)
*   [ ] Explore possibilities of animated icons


## Contributing

Contributions are welcome, especially for expanding the icon set (see Future Plans)! Please feel free to submit a pull request or open an issue for bugs, feature requests, or icon additions.

## License

This project is licensed under the [MIT License](./LICENSE).

---

*Minecraft content and materials are trademarks and copyrights of Mojang AB or its licensors. This project is not affiliated with Mojang AB.*
