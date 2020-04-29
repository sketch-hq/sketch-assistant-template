# sketch-assistant-template

> 💁‍♀️ This repository contains a starter project for developing a new Assistant.

👉
[Click here to generate a new project using this repository as a template](https://github.com/sketch-hq/sketch-assistant-template/generate)

## Skills needed

- JavaScript and TypeScript
- npm
- Git

## Tools

These tools are required to work on the Assistant locally.

- Node 12
- Yarn
- Visual Studio Code (recommended)

## Getting started

1. [Generate](https://github.com/sketch-hq/sketch-assistant-template/generate) a new repository
   using this template.
1. Check out your new repository locally.
1. Install the dependencies with `yarn install`.
1. Open the folder in Visual Studio Code.
1. Find and replace all instances of the `sketch-assistant-template` string with the name of your
   new Assistant project. Name your Assistant as you would an npm package, i.e. all lower case, no
   spaces.
1. Update the Assistant metadata under the `sketch-assistant` field in package.json to reflect your
   project.
1. Update the `homepage` field in package.json to point to your Assistant's homepage - this is
   likely just the GitHub repository page for now. Sketch will direct users to this page for rule
   documentation, so make sure to explain rule uses and configuration on this page.
1. Review whether the MIT license applied to the repository is right for your purposes, and if
   necessary change or remove it.
1. You are now ready to implement your Assistant.

> ⚠️ How to write rules, configure Assistants, extend from existing Assistants and many other
> activities are out of scope of this README. For more information on these topics consult the
> [Assistant Developer Documentation](./).

## Testing the Assistant

The Sketch Mac app isn't required to test the Assistant and run the [Jest](https://jestjs.io/)
tests. So a TDD approach using Sketch files as fixtures represents the fastest route to running your
Assistant and checking that it's working as expected.

The tests can be run in watch mode for live feedback as you work.

```
yarn test --watch
```

### Testing using Github Actions

If you want to run the tests automatically whenever a pull request is opened then enable the
included _"Test Pull Requests"_ Github Action.

1. Ensure Github Actions are enabled for your repository.
1. Rename `.github/workflows/test-pull-requests.yml.sample` to
   `.github/workflows/test-pull-requests.yml`.
1. Open a pull request, and the test status should be reported.

## Building a local development Assistant

The next quickest way to get the Assistant running is to build it locally and add it directly to a
Sketch document.

1. Run `yarn package-tarball`.
1. Note that a `*.tgz` tarball has been built to the repository root.
1. Use the _Install from disk_ option in Sketch's Assistants menu to add the freshly built Assistant
   to a document.
1. Sketch will check the disk location for updates to the tarball, so you can continue to re-build
   the Assistant to the same location and see live updates in Sketch

> ⚠️ Assistants must be published to be used across multiple devices or within a team. Sketch documents with local Assistants added to them are not portable because the Assistant is referenced using a file path.

## Publish the Assistant

In order for others to use your Assistant via the _Install from URL_ option in Sketch its `*.tgz`
tarball package needs to be hosted publically on the web.

Following is a guide describing how to publish an Assistant to npm.

1. Review the npm [documentation](https://docs.npmjs.com/packages-and-modules) to familiarize
   yourself about publishing packages, but read on for a quick guide.
1. Ensure you have an npm account and are logged-in to npm on the command line via `npm login`.
1. Update your Assistant code as needed, implement any rules you want to and ensure any tests are
   passing.
1. Ensure the `name` field in package.json has been set to a valid, unique npm package name.
1. Ensure the `version` field in package.json is updated to reflect the version you want to publish.
1. Run `yarn build` to prepare the Assistant for publishing.
1. Run `npm publish`.
1. After publishing is complete run `npm info <your-package-name>`, and take note of the
   distribution tarball url ending `*.tgz`. Copy and pasting this into the _Install from URL_
   dialogue box in Sketch will result in a shareable Sketch document with your Assistant added and
   ready-to-go.
