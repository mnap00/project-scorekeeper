# Score Keeper
An application to practice Jest unit tests for React.

[Github pages](https://mnap00.github.io/project-scorekeeper/)

## Content

### Tests organisation
* `component.test.js` for each `component.js` in the same directory
* Enzyme library for DOM manipulation

### Tests implemented
* smoke tests (test if components render properly) for App and each component in `components` directory
* tests for each method of App class
* tests for props of each component from `components` directory

### Styling
* separate CSS file for App and each component and one global
* Flat UI colors with 'American Palette'
* flex for grid and aligning

## Todo
* add RWD: CSS for mobile devices
* add score multiplier (similar to `AddPlayer` component)
* add table sorting after score update (from high to low score)
* add player name edition
