module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Box3D',
      externals: {
        react: 'React'
      }
    }
  }
}
