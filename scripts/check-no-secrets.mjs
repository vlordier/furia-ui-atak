#!/usr/bin/env node
/** Fail if tracked files look like they contain API tokens. File keys in URLs are not scanned as secrets. */
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const tracked = execSync('git ls-files', { encoding: 'utf8' }).trim().split('\n')
const banned = [
  /figd_[A-Za-z0-9_-]{10,}/,
  /FIGMA_ACCESS_TOKEN\s*=\s*['\"]?[A-Za-z0-9_-]{8,}/,
  /figma\.com\/api\/mcp\/asset\//,
  /-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/,
]
const allow = new Set(['.env.example', 'scripts/check-no-secrets.mjs'])
const hits = []
for (const file of tracked) {
  if (allow.has(file) || file.includes('node_modules')) continue
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  for (const re of banned) {
    if (re.test(text)) hits.push(`${file} matches ${re}`)
  }
}
if (hits.length) {
  console.error('Refusing commit — secret-like content:\n' + hits.join('\n'))
  process.exit(1)
}
console.log('secret scan clean (' + tracked.length + ' files)')
