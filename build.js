const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { rollup } = require('rollup');
const { dts } = require('rollup-plugin-dts');

// Bundle the public type declarations into a single flat dist/index.d.ts.
rollup({
  input: 'src/index.ts',
  plugins: [dts()],
  external: [/node_modules/, 'events'],
}).then((bundle) => bundle.write({ file: 'dist/index.d.ts', format: 'es' }));

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
