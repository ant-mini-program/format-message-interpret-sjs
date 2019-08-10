import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'pkg/index.sjs',
    format: 'esm',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
