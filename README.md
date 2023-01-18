# JS-calculator

Deploy: [Calculator](https://funny-narwhal-8a673a.netlify.app/)

This is simple Vanilla JS Calculator with **validation** and saving results to **localStorage**. You can write your math expression with Ui and also with keyboard.

1. **Task:** [link](https://drive.google.com/file/d/1MZorxQ8wu2SAyYQayNaLcPPcQ-bTeSFk/view?usp=sharing)
2. **How to run the app:** `npm install` => `npm run build` (to build prod version) or `npm run serve` (to open dev server)
3. **Folder structure**:
```
js-calculator (root of project)
  └───src (folder with source code files)
      |─── components (Render functions to create html nodes and classes with logic when are rendered. Files with .js ext)
      |─── scss (All styles with. Files .scss ext)
      |─── utils (Support functions placed in separate files. Files with.js ext)
      |─── index.html
      └─── index.js
```
4. **Functionality**:
  + Pressing is validated when entering an expression from the keyboard.
  + When page is reloaded, last value and last 10 previous expressions will saved
  + By clicking 'AC' removed current value in input and cleared last 10 previous expression board.
  + Changing the theme when you click on the theme buttons at the top.