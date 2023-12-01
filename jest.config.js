export default {
  testEnvironment: 'jest-environment-jsdom',
  // configura o arquivo padrão de importação do React Testing Library.
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  setupFiles: ['./jest.polyfills.js'],
  moduleNameMapper: {
    // serve para configurar um arquivo fake para possibilitar a utilização de imagens nos testes
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.ts',
    // serve para configurar um arquivo fake para possibilitar a utilização de css nos testes
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  testEnvironmentOptions: {
    customExportConditions: ['']
  }
}
