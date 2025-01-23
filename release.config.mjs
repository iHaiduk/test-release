// @ts-check
/* eslint-disable no-template-curly-in-string */

const preset = 'conventionalcommits'

/**
 * @type {import('semantic-release').Options}
 **/
export default {
  "plugins": [
    ['@semantic-release/commit-analyzer', {preset}],
    ['@semantic-release/release-notes-generator', {preset}],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    "@semantic-release/github",
    ["@semantic-release/git", {
      "assets": ["docs", "package.json"],
      "message": "chore(release): ${nextRelease.version} :tada: [skip ci]\n\n${nextRelease.notes}"
    }]
  ]
}
