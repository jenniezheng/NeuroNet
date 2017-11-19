#fs-helper

## Overview

This is a node module created in order help provide additonal functions for commonly performed file system operations.

## Methods

### getDirPathsRecursivelyByNameSync(current_directory, subdirectory_names, [subdirectories_found])
#### Description
This function takes in the top level directory to search, an array of directory names that are the desired name to be located. There is also an optional parameter "subdirectories_found", which is used for recursive calls to this function. 

Then it recursively searches sub-directories for directory names that are contained in the "subdirectory_names". If a directory is found that exists in "subdirectory_names" it is added to the "subdirectories_found" array.

This returns an array of the paths to each subdirectory with the matching directory path that was found.

#### Example Usage
Directory Structure:  
/Users/username/node project/  
|__directories  
&nbsp;&nbsp;&nbsp;&nbsp;|__example directory  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__file.txt  
&nbsp;&nbsp;&nbsp;&nbsp;|__not example directory  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__file.txt  
|__other directories  
&nbsp;&nbsp;&nbsp;&nbsp;|__example directory  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__file.txt  
&nbsp;&nbsp;&nbsp;&nbsp;|__not example directory  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__file.txt  

```javascript
var subdir_paths = fsHelper.getDirPathsRecursivelyByNameSync('/Users/username/node project/', ['example directory']);
```

The result of this operation is that subdir_paths will contain the strings:  
- /Users/username/node project/directories/example directory
- /Users/username/node project/other directories/example directory
 
