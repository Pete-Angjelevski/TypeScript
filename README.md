# TypeScript
Sandbox to refine TypeScript 



**WATCH NODE INDIV FILE**

  - apply watch node to your file which will rerun tsc on file with out your command 
    - tsc *file name* --watch || tsc *filename* -w



**WATCH WHOLE REPO**
  - apply watch on everything within the folder/repo.
    - tsc --init          // creates tsc config file
    - tsc                 // will then create new js file for all ts files 
    - tsc -w              // watches all files 


**EXCLUDE SELECT FILE**
  - within tsconfig.json you can choose to exclude selected ts files . . .
    - "exclude": [" *fileName*", " *fileName2*"] selected files
    - ensure to exclude "node_modules" if including exclude option.


**EXCLUDE FILE ALL SUFFIX**
  - exclude all files ending in the selected suffix
    - "exclude": [" *. *fileSuffix* "] // exclude all within current folder
    - "excluse": ["  **/* *fileSuffix* "] excludes all in all folders of repo 
    - ensure to exclude "node_modules" if including exclude option. 


**INCLUDE SELECT FOLDERS**
  - includes select folders - once you have chosen include as an option parameter you must then ensure to include all folders you want
    - "include": [" *folderName* "]

**INCLUDE FILES**
  - includes select files
    - "files": [" *fileName* "]


**OUTDIR LIB**
  -activating this library will designate where your js files are stored once parsed from the typescript compiler


**ROOTDIR LIB**
  - source folder in which compiler looks to compile ts code


**NO EMIT LIB**
  - when set to true the ts compiler will check for errors but emit js files from the ts files


**NO EMIT ON ERROR**
  - when set to true no files will be emmitted when there when there are errors 
