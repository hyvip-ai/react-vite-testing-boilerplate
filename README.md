# vite-react-testing-boilerplate

Execute `npx create-vite-react-testing-boilerplate app-name` command in the folder where you want your project, and voila you have your project

---

There are way to many boilerplate template for react but as far as I can say vite is most loved one , also it is fast (extra :) ), but if you want to learn test your react app, the most famous way to do is to create your react app with

` npx create-react-app app-name`

But the problem with this is, it takes a hell lot of time to start and also on every change it takes time to compile(also the state is not persisted, and there are many other problems, but let's not talk about them.)

So the main thing is, when I wanted to learn react testing with vitejs template, I face this issue, there were no boilerplate for that, and there is next to none information over the internet, to help you setup easily and get started with the testing part.

So I created this, (you need the specific version of the packages just to avoid crash or anything)

Let's get to the fun part (explanation of what every is doing)

`"@babel/preset-env": "^7.19.4"`
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller! (Copied for [official website](!https://babeljs.io/docs/en/babel-preset-env) not really necessary to go deeper than this)

`"@babel/preset-react": "^7.18.6"`
It it used when we work with react, it transpile our jsx code into React.createElement format, like
`<h1>Hello, world!</h1>` this will be converted into

```
React.createElement(
   "h1",
   null,
   "Hello, world!"
);

```

and the `runtime:"automatic"` implies _auto import the functions that jsx transpiles to_ (last line copied from official babel docs ;))

`"@testing-library/react"`
react testing library provides you function to catch dom element and perform some action below are some of its function

```
render, fireEvent, waitFor, screen
```

`"@testing-library/user-event": "^14.4.3"`
This package is used to fireEvent that users will do on your we website like click a button or type into input field.

`"@testing-library/jest-dom": "^5.16.5"`
This package is also there, which is an extension of @testing-library/react which provides some custom matchers, which make it easier for jest and @testing-library/react to talk to each other (Is Girl friend's male best friend an idean example of this?).

`"babel-jest": "^29.2.2"`
This plugin is used to declare that we will use babel as our transpiler with jest

`"identity-obj-proxy": "^3.0.0"`
This package is used to mock css or sass files if present, for some reason if used anu stylesheet and not mocked it gives error, that's why its there (don't know more than this :'))
`"jest": "^29.2.2"`
Jets is a test runner, the simplest explanantion is `@testing-library/react` is a car, but to run the car you need key so jest is that key, in other words, with `@testing-library/react` your write your tests and with `jest` you run them and in `package.json` the test script is "jest --watchAll" --watchAll is used to watch the files, if any test files changes it will rerun the tests automatically.

`jest-environment-jsdom": "^29.2.2"`
This is just a extra package we need to install in order to run the tests with jest as we aee using jsdom and in jest previous versions it was clubbed with jest, but now we install both of them separate.

Folder structure

```bash

├── public
│   └── vite.svg
├── src
│   ├── __mocks__
│   |    └── fileMock.js
│   ├── __tests__
│   |    └── App.test.js
│   └── assets
│   └── App.jsx
│   └── index.css
│   └── main.jsx
├── .gitignore
├── babel.config.js
├── jest.config.js
├── index.html
├── package.json
├── setupTests.js
├── vite.config.js
└── README.md

```
