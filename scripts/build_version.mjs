import { rm, cp, readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = join(__dirname, '..')

const version = process.argv[2]
if (!version) {
  console.error('Usage: node scripts/build_version.mjs <version>')
  console.error('Example: node scripts/build_version.mjs jetson-orin-nano-version')
  process.exit(1)
}

const validVersions = ['jetarm-jetson-nano', 'jetarm-orin-nano']
if (!validVersions.includes(version)) {
  console.error(`Invalid version: ${version}`)
  console.error(`Valid versions: ${validVersions.join(', ')}`)
  process.exit(1)
}

const contentDirName = version
const projectName = 'JetArm'
const docsBase = `/projects/${projectName}/en/${version}/`
const rootIndexPath = join(repositoryRoot, 'docs', 'index.md')
const versionIndexPath = join(repositoryRoot, 'content', contentDirName, 'docs', 'index.md')

console.log(`\n========== Building ${version} ==========`)
console.log(`DOCS_BASE: ${docsBase}`)

// 1. Copy content to docs working directory
const contentDir = join(repositoryRoot, 'content', contentDirName)
const docsDocsDir = join(repositoryRoot, 'docs', 'docs')
const docsStaticDir = join(repositoryRoot, 'docs', '_static')
const originalRootIndex = await readFile(rootIndexPath, 'utf8')
const versionRootIndex = await readFile(versionIndexPath, 'utf8')

try {
  await writeFile(rootIndexPath, versionRootIndex)

  console.log('\nCopying content files...')
  await rm(docsDocsDir, { recursive: true, force: true })
  await rm(docsStaticDir, { recursive: true, force: true })
  await cp(join(contentDir, 'docs'), docsDocsDir, { recursive: true })
  await cp(join(contentDir, '_static'), docsStaticDir, { recursive: true })
  console.log('  Done.')

  // 2. Build with VitePress
  console.log('\nBuilding with VitePress...')
  execSync('npx vitepress build docs', {
    stdio: 'inherit',
    cwd: repositoryRoot,
    env: { ...process.env, DOCS_BASE: docsBase, DOCS_VERSION: version }
  })
  console.log('  Done.')

  // 3. Stage built artifacts to the deployed projects directory
  console.log('\nStaging built files...')
  execSync(`node scripts/stage_main_site.mjs ${version}`, {
    stdio: 'inherit',
    cwd: repositoryRoot,
    env: { ...process.env, DOCS_BASE: docsBase, DOCS_VERSION: version }
  })
  console.log('  Done.')

  console.log(`\n========== ${version} build complete ==========\n`)
} finally {
  await writeFile(rootIndexPath, originalRootIndex)
}
