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

Sketch isn't required to test the Assistant and run the [Jest](https://jestjs.io/) tests. So using a
TDD approach together with real Sketch files as fixtures represents the fastest route to running
your Assistant code and checking that it's working as expected.

The tests can be run in watch mode for live feedback as you work.

```
yarn test --watch
```

If you want to run the tests automatically whenever a pull request is opened then enable the
included _"Test Pull Requests"_ Github Action.

1. Ensure Github Actions are enabled for your repository.
1. Rename `.github/workflows/test-pull-requests.yml.sample` to
   `.github/workflows/test-pull-requests.yml`.
1. Open a pull request, and the test status should be reported.

## Building a local development Assistant

The quickest way to get the Assistant running in Sketch is to build it locally and add it directly
to a Sketch document.

1. Run `yarn package-tarball`.
1. Note that a `*.tgz` tarball has been built to the repository root.
1. Use the _Install from disk_ option in Sketch's Assistants menu to add the freshly built Assistant
   to a document.

## Deploying the Assistant

In order for others to use your Assistant the tarball produced via the `yarn package-tarball`
command needs to be hosted publically on the web.

There are obvioulsy many ways to achieve this, which are beyond the scope of this guide. However the
_"Deploy"_ GitHub Action included in this repostory can help you get started.

1. Ensure GitHub Pages are enabled for the repository, and are configured to deploy from the `docs`.
   folder on the `master` branch.
1. Ensure Github Actions are enabled for your repository.
1. Rename `.github/workflows/deploy.yml.sample` to `.github/workflows/deploy.yml`.
1. On subsequent pushes to `master` a basic page hosting the Assistant and a one-click install
   button is deployed to the repository's GitHub Pages site.
