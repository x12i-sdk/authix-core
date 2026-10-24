# @x12i/authix-core usage example

Pure token create, sign, encrypt, verify logic for Authix.

This consuming application demonstrates **create and verify signed and encrypted tokens locally** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Create and verify Authix tokens within a host that owns the relevant keys.
- Sign or encrypt a token through the pure core API without starting an HTTP service.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/authix-core)
- [Implementation monorepo](https://github.com/x12i/authix)
- [Reviewed package source](https://github.com/x12i/authix/tree/dc63d85812526248b1dade3f25131205c36be51f/packages/token-core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
