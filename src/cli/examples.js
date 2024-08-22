const encrypt = function () {
  return `
Examples:

  \`\`\`
  $ dotenvx ext vault encrypt
  \`\`\`

Try it:

  \`\`\`
  $ echo "HELLO=World" > .env
  $ echo "HELLO=production" > .env.production
  $ echo "console.log('Hello ' + process.env.HELLO)" > index.js

  $ dotenvx ext vault encrypt
  encrypted to .env.vault (.env,.env.production)
  keys added to .env.keys (DOTENV_KEY_PRODUCTION,DOTENV_KEY_PRODUCTION)

  $ DOTENV_KEY='<dotenv_key_production>' dotenvx run -- node index.js
  [dotenvx] injecting env (1) from encrypted .env.vault
  Hello production
  \`\`\`
  `
}

module.exports = {
  encrypt
}
