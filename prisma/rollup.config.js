// @file: rollup.config.js
// import dts from 'rollup-plugin-dts'
// import { bundleImports } from 'rollup-plugin-bundle-imports'
import typescript from 'rollup-plugin-typescript2'

let defaults = { 
  compilerOptions: { 
    declaration: true
  } 
};

const config = [
  {
    input: './db.ts',
    output: { dir: '.' },
    plugins: [
      typescript({
        tsconfigDefaults: defaults,
      }),
    ]
  }
]

export default config