module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CreateBox3D',
      externals: {
        'react': 'React',
        'styled-components': 'styled-components'
      }
    }
  }
}
