Sure! Here's a complete and well-structured README.md for your Babel plugin, without any personal links. It includes everything from description to examples, usage, and customization notes—all written in a clear and developer-friendly way.


---

# babel-plugin-classname-to-twrnc-style

A Babel plugin that transforms JSX `className` attributes into `style` props compatible with [`twrnc`](https://github.com/jaredh159/tailwind-react-native-classnames) for React Native apps using Tailwind CSS utility classes.

This plugin is built for developers using **React Native**, **Expo**, and **Tailwind CSS** through `twrnc`, allowing you to write Tailwind-style class names and have them automatically compiled to style objects during Babel transformation.

---

## ✨ Features

- Converts `className="..."` into `style={tw\`...\`}`
- Designed for React Native and `twrnc`
- Supports multi-class strings
- Easy to plug into Expo / React Native projects
- Makes JSX cleaner and more declarative
- Reduces the need to manually import or wrap components in `tw(...)`

---

## 📦 Installation

Install the plugin and `twrnc`:

```bash
npm install --save-dev babel-plugin-classname-to-twrnc-style

Also, ensure twrnc is installed as a project dependency:

npm install twrnc


---

⚙️ Setup

Update your babel.config.js to include the plugin:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // or your preferred preset
    plugins: ['babel-plugin-classname-to-twrnc-style'],
  };
};

If you're using a scoped version like @yourname/babel-plugin-classname-to-twrnc-style, include the full name:

plugins: ['@yourname/babel-plugin-classname-to-twrnc-style']


---

🧠 How It Works

This Babel plugin searches for JSX elements with a className prop and converts it to a style prop with a tw tagged template string, which is compatible with twrnc.

Input:

<View className="bg-blue-500 p-4 rounded">
  <Text className="text-white text-lg">Hello, world!</Text>
</View>

Output:

<View style={tw`bg-blue-500 p-4 rounded`}>
  <Text style={tw`text-white text-lg`}>Hello, world!</Text>
</View>


---

✅ Why Use This?

Clean up your React Native codebase

Reduce repetitive imports of tw

Avoid manually wrapping class strings with tw

Automatically support Tailwind syntax in native environments



---

📁 Example

Here's a minimal example using this plugin:

Before:

import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-blue-600 font-bold text-xl">Welcome</Text>
    </View>
  );
}

After Babel + Plugin Transform:

import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-blue-600 font-bold text-xl`}>Welcome</Text>
    </View>
  );
}


---

⚠️ Limitations

This plugin assumes tw is available in the file. You must define or import it globally.

Does not handle dynamic className (like variables or expressions).

Currently transforms only static string values in JSX.



---

✨ Recommended Setup

If you want to avoid importing tw in every file, you can create a global utility file like this:

// tw.js
import twrnc from 'twrnc';
export default twrnc();

Then in babel.config.js, define an alias using a module resolver plugin:

npm install --save-dev babel-plugin-module-resolver

plugins: [
  'babel-plugin-classname-to-twrnc-style',
  ['module-resolver', {
    alias: {
      tw: './tw.js'
    }
  }]
]

Then just use tw in your code:

<View className="mt-4 bg-green-500" />


---

🧪 Testing

If you want to test the plugin locally:

1. Clone this repo


2. Run npm install


3. Create a small test file and transpile it with Babel using this plugin



You can use @babel/cli to test:

npm install --save-dev @babel/cli
npx babel input.jsx --out-file output.js --plugins ./path-to-your-plugin


---

🤝 Contributing

Pull requests, issues, and ideas are welcome! Feel free to improve the plugin or expand its capabilities (e.g., handling dynamic expressions, supporting more JSX frameworks, etc.)


---

📄 License

This project is licensed under the MIT License.


---

Happy hacking!

---

Let me know if you'd like to add badges (like npm version/downloads), or auto-generate the output using `@babel/core` in a script.

