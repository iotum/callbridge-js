const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { Generator: dtsGenerator } = require('npm-dts');

new dtsGenerator({
  output: 'dist/index.d.ts',
}).generate();

/** @type {import('esbuild').BuildOptions} */
const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  external: Object.keys(dependencies).concat(
    Object.keys(peerDependencies || {}),
  ),
};

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'dist/index.js',
});

build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
});
