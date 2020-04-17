const cp = require('child_process')
const fs = require('fs')
const pkg = require('./package.json')

const run = (cmd) => cp.execSync(cmd, { encoding: 'utf8' })

const [owner, repo] = (process.env.GITHUB_REPOSITORY || 'owner/repo').split('/')
const tgzUrl = `https://${owner}.github.io/${repo}/${pkg.name}-latest.tgz`

const md = `
👉 [Click here to add to Sketch](sketch://install-assistant?url=${tgzUrl}) (opens in Sketch)

> Or use an alternative installation link for other Sketch release variants:
>
> - [Sketch Beta](sketch-beta://install-assistant?url=${tgzUrl})
> - [Sketch Private](sketch-private://install-assistant?url=${tgzUrl})
> - [Sketch Experimental](sketch-experimental://install-assistant?url=${tgzUrl})
> - [Sketch XCode](sketch-xcode://install-assistant?url=${tgzUrl})
`

run('rm -rf ./docs')
run('mkdir docs')
run('yarn package-tarball')
run(`mv ./${pkg.name}-v${pkg.version}.tgz ./docs/${pkg.name}-latest.tgz`)
fs.writeFileSync('./docs/index.md', md, { encoding: 'utf8' })
