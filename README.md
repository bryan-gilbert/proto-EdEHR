# EdEHR

> Educational Electronic Health Record System

> A BCcampus project



## Installation
```
cd /your/development/area
git clone https://github.com/bryan-gilbert/proto-EdEHR.git
```

This project depends on another project that provide LTI support
Outside of the project directory 
```
cd /your/development/area
git clone https://github.com/bryan-gilbert/ims-lti.git
cd ims-lti.git 
npm install
cd ../proto-EdEHR
# WIP - may actually need to do this in the server sub-project
npm install ../ims-lti --save
```

## EHR generation
The EHR side of the project contains almost 40 seperate screens, each needs to be in the menu and routing tables.  These tasks are automated via a script in the makeEhr subdirectory. 
```
cd makeEhr
./deploy.sh
```

## Run ...
Work in progress
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
