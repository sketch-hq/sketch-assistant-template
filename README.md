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

- Node 12 (comes with npm 6)
- Visual Studio Code (recommended)

## Getting started

> Refer to the [Assistants Developer Documentation](https://developer.sketch.com/assistants) for
> more in-depth guides on setting up your system for Assistant authoring, writing rules, testing
> Assistants locally and in Sketch and more. The guide below is narrowly focussed about getting up
> and running with this template repository

1. [Generate](https://github.com/sketch-hq/sketch-assistant-template/generate) a new repository
   using this template.
1. Check out your new repository locally.
1. Install the dependencies with `npm install`.
1. Open the folder in Visual Studio Code.
1. Find and replace all instances of the `sketch-assistant-template` string with the name of your
   new Assistant project. Name your Assistant as you would an npm package, i.e. all lower case, no
   spaces.
1. Update the Assistant metadata under the `sketch-assistant` field in package.json to reflect your
   project.
1. Update the `homepage` field in package.json to point to your Assistant's homepage - this is
   likely just the GitHub repository page for now. Sketch will direct users to this page to find out
   more about your Assistant, so make sure to explain rule uses and configuration on this page.
1. Review whether the MIT license applied to the repository is right for your purposes, and if
   necessary change or remove it.
1. You are now ready to implement your Assistant.

> TODO: Replace the sections below with links to the relevant Assistants Developer Documentation
> pages when they are ready.

## Testing the Assistant

The Sketch Mac app isn't required to test the Assistant and run the [Jest](https://jestjs.io/)
tests. So a TDD approach using Sketch files as fixtures represents the fastest route to running your
Assistant and checking that it's working as expected.

The tests can be run in watch mode for live feedback as you work.

```
yarn test --watch
```

## Building a local development Assistant

The next quickest way to get the Assistant running is to build it locally and add it directly to a
Sketch document.

1. Run `npm run package-tarball`.
1. Note that a `*.tgz` tarball has been built to the repository root.
1. Use the _Install from disk_ option in Sketch's Assistants menu to add the freshly built Assistant
   to a document.
1. Sketch will check the disk location for updates to the tarball, so you can continue to re-build
   the Assistant to the same location and see live updates in Sketch

> ⚠️ Assistants must be published to be used across multiple devices or within a team. Sketch
> documents with local Assistants added to them are not portable because the Assistant is referenced
> using a file path.

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
1. Run `npm run build` to prepare the Assistant for publishing.
1. Run `npm publish`.
1. After publishing is complete run `npm info <your-package-name>`, and take note of the
   distribution tarball url ending `*.tgz`. Copy and pasting this into the _Install from URL_
   dialogue box in Sketch will result in a shareable Sketch document with your Assistant added and
   ready-to-go.
