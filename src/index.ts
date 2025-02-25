import type { CommonOptions } from './types'

export { resolvePackage, resolveDependencies, resolveDependency } from './io/resolves'
export { loadPackage, loadPackages, writePackage } from './io/packages'
export { dumpDependencies, parseDependencies } from './io/dependencies'
export { CheckPackages } from './api/check'
export * from './types'

export function defineConfig(config: CommonOptions) {
  return config
}
