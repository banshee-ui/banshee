# Banshee Contributing Guide

Thank you for being interested in contributing to Banshee! Before contributing please read through this document to make this process as painless as possible for both parties.

## Reporting Issues and Feature Requests

If you find an issue or have an idea to improve Banshee, please open an issue [here](https://github.com/banshee-ui/banshee/issues). Please find and fill the templates for your respective request before submitting.

## Contributing to an Issue/Feature Request:

If you find an issue/feature that you want to tackle please say so in a comment. If you find that someone has already commented please assume they are actively working on it. If some time has passed, you can ask them to make sure. We do not want two separate parties working on the same thing (but you can collaborate!).

## PR Guidelines

- Do not submit PRs against the `master` branch.
- Create a branch based on issue type
  - ie: `feature/{{ branch_name }}`, `bugfix/{{ branch_name }}`
- Multiple commits are fine as they will be squashed
- Do not work in the `dist/` folder and do not commit it
- Do not commit work done in the `playground/` directory

## Development Setup

Clone the repository and run:

```bash
$ npm install # or yarn
```

To get running the development server running use:

```bash
$ npm run serve
```

Make sure all work is done within the `src/` directory.

To physically test components as you develop you can use the `playground/` directory. All modules of Banshee are automatically imported from the `src/` folder for you. You should not have to touch `main.js`.

## Project Structure

- **playground**: imports all Banshee modules and mounts a Vue instance to play around with components while developing.
  - `playground/main.js`: imports Vue and Banshee and mounts App.vue to a Vue instance
  - `playground/App.vue`: Root Vue component to do your testing within

- **public**: holds `index.html` file, shouldn't needed to be touched ever

- **src**: contains all the source code to each Banshee component and their utilities
  - `src/components/`: the component source code for each Banshee component
  - `utils/`: utility functions for use within Banshee component files, you can add more if you see fit for whatever issue/feature you're working on
  - `index.js`: exports all Banshee component files, shouldn't need to be touched unless you are creating more components

## Credits

Your name here!