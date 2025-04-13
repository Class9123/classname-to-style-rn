# babel-plugin-classname-to-twrnc-style

A Babel plugin that lets you use `className` (like in Tailwind CSS) in React Native components by transforming them to `style={tw\`...\`}` using [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames).

Perfect for those who prefer Tailwind syntax in their React Native apps.

---

## ✨ Features

- Converts `className="..."` to `style={tw\`...\`}` automatically.
- Adds `import tw from 'twrnc'` at the top if not already present.
- Works with both `.jsx` and `.tsx` files.
- Enables Tailwind-like styling in React Native without hassle.

---

## 🚀 Installation

### 1. Install the plugin and `twrnc`

```bash
pnpm add -D babel-plugin-classname-to-twrnc-style
pnpm add twrnc
