# dotenvx-ext-vault

> 🔐 manage .env.vault files

## Quickstart [![npm version](https://img.shields.io/npm/v/@dotenvx/dotenvx-ext-vault.svg)](https://www.npmjs.com/package/@dotenvx/dotenvx-ext-vault)

Extend `dotenv` with vault.

```sh
npm install @dotenvx/dotenvx-ext-vault --save
```
&nbsp;

or install globally

<details><summary>with brew 🍺</summary><br>

```sh
brew install dotenvx/brew/dotenvx-ext-vault
dotenvx ext vault help
```

&nbsp;

</details>

<details><summary>with curl 🌐 </summary><br>

```sh
curl -sfS https://dotenvx.sh/ext/vault | sh
dotenvx ext vault help
```

&nbsp;

</details>

<details><summary>or with github releases 🐙</summary><br>

```sh
curl -L -o dotenvx-ext-vault.tar.gz "https://github.com/dotenvx/dotenvx-ext-vault/releases/latest/download/dotenvx-ext-vault-$(uname -s)-$(uname -m).tar.gz"
tar -xzf dotenvx-ext-vault.tar.gz
./dotenvx-ext-vault help
```

</details>


&nbsp;

## Usage

```sh
$ dotenvx ext vault
Usage: @dotenvx/dotenvx-ext-vault [options] [command]

🔐 manage .env.vault files

Options:
  -l, --log-level <level>        set log level (default: "info")
  -q, --quiet                    sets log level to error
  -v, --verbose                  sets log level to verbose
  -d, --debug                    sets log level to debug
  -V, --version                  output the version number
  -h, --help                     display help for command

Commands:
  migrate                        instructions for migrating .env.vault to encrypted env file(s)
  encrypt [options] [directory]  encrypt .env.* to .env.vault
  decrypt [options] [directory]  decrypt .env.vault to .env*
  status [directory]             compare your .env* content(s) to your .env.vault decrypted content(s)
  help [command]                 display help for command
```

