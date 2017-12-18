# React-Starter-Kit

1. Create a project folder and change directory into it, `cd <project-folder>`
2. run `npm init -y`
3. We need to add some dev dependencies:
   `npm install -D babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 webpack webpack-dev-server`
4. We also need some regular dependencies:
   `npm install react react-dom react-router-dom redux react-redux reselect`
5. Ok, we're getting there, let's add a babel property to our package.json file. This will config our babel to leverage es2015, react, and stage-2 for transpile.

```js
"babel": {
    "presets": [
      [
        "es2015",
        {
          "modules": false
        }
      ],
      "stage-2",
      "react"
    ]
}
```

6. Let's also set our npm start script to the following `"start": "webpack-dev-server --open"`
7. OK, so close. Let's create our webpack.config.js file in the root of our application and it should looke like this:

```js
const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  entry: resolve(__dirname, "src", "index.js"),

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
    publicPath: "/"
  },

  context: resolve(__dirname, "src"),

  devtool: "inline-source-maps",

  devServer: {
    contentBase: resolve(__dirname, "public"),
    publicPath: "/",
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
```

8. With our webpack, we've told it our app files are going to be in `scr/` and the content is going to be served out of `public/`. Let's create our public **folder** and put the index.html file in it. This will also have our div with id attribute to insert our react app into, and also the script to load our bundled application

```HTML
<!doctype html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>
```

9. Last File!!! We need a **folder** `src`, and in it we're gonna put our index.js, this is the entry point into our application. We can just start with a console log to ensure it's all wired up.

```js
console.log("Hello React!!!");
```

10. From the command line run `npm start` and you should get a webpage at localhost:8080, open the dev tools, check the console.log you should see your message.
11. OK, you're ready to go!
