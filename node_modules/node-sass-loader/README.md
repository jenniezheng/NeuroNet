#node-sass-loader

## Overview
This is a node module created to extend functionality of the [node-sass module](https://github.com/sass/node-sass).

This provides a simple function that takes in a source and a destination directory. Then it will traverse the source directory, compiling each file it finds. It will then place the compiled css into the correct output folder, relative to the source directory it was located in.

## Installation
```javascript
// to install in the local directory
npm install node-sass-loader

// to install in the local directory and save to the package.json
npm install node-sass-loader --save
```

## Example Usage
Pretend you have a directory

/Users/username/node project/

And this folder has the directory structure
/Users/username/node project/  
|__css (This is an empty directory)  
...  
|__scss  
&nbsp;&nbsp;&nbsp;&nbsp;|__main styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.scss  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.scss  
&nbsp;&nbsp;&nbsp;&nbsp;|__mobile styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.scss  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.scss  

### Loading from Source Directory to Destination Directory
```javascript
// First load the module
var nodeSassLoader = require('node-sass-loader');
// Call the compilation
nodeSassLoader.compile({ source_directory: '/Users/username/node project/sass'),
                         destination_directory: '/Users/username/node project/css') });
```

The result is that the css folder will now have the css files and directory structure that the sass folder had.

/Users/username/node project/  
|__css  
&nbsp;&nbsp;&nbsp;&nbsp;|__main styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.css  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.css  
&nbsp;&nbsp;&nbsp;&nbsp;|__mobile styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.css  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.css  
|__scss  
&nbsp;&nbsp;&nbsp;&nbsp;|__main styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.scss  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.scss  
&nbsp;&nbsp;&nbsp;&nbsp;|__mobile styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__default.scss  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__main.scss  

### Using Include Paths
If you wish to use the include paths property you can do so like this:
```javascript
// First load the module
var nodeSassLoader = require('node-sass-loader');
// Call the compilation
nodeSassLoader.compile({ source_directory: '/Users/username/node project/sass'),
                         destination_directory: '/Users/username/node project/css'),
                         include_paths: [ /* array of paths here */ ] });
```

## Additional Features
If there are additional features or issues, please file an issue in the issues section of the repository. Or, feel free to create your own addition and file a pull request to integrate the features.
