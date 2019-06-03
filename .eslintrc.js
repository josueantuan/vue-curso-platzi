module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended'

  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "never",
      "math": "never"
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }

}
