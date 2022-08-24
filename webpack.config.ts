import path from 'path'
import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
console.log ({ n: process.env.VITE_TEST_VAR })

const config = (env: any) => {
  return ({
    mode: 'production',
    entry: './src/main.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      // new webpack.DefinePlugin({
      //   process: JSON.stringify({}),
      //   // 'process.env': JSON.stringify(process.env)
      //   // 'process.env.VITE_INFURA_ID': JSON.stringify(process.env.VITE_INFURA_ID)
      //   // process: { env: { VITE_INFURA_ID: JSON.stringify(process.env.VITE_INFURA_ID) } }
      //   'process.env.VITE_TEST_VAR': process.env.TEST_VAR
      // }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
        'process.env.VITE_TEST_VAR': JSON.stringify('Donald Hump')
      }),
      //new webpack.EnvironmentPlugin (['VITE_TEST_VAR']),

      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public', to: '.' },
        ],
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin(),
      ],
      fallback: {
        os: require.resolve('os-browserify/browser'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert'),
        stream: require.resolve('stream-browserify'),
      }
    },
    optimization: {
      usedExports: true,
    },
    devServer: {
      compress: true,
      allowedHosts: 'ape.lan.247420.xyz',
  
    },    
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
  })
}

export default config