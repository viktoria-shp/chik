# Gulp-assembler
* Install `gulp-cli`:
```
npm install gulp-cli -g
```
if MacOS
```
sudo npm install gulp-cli -g
```

**To create new project:**
* Move to assembler's directory:
```
cd assembler's_root_directory
```
* Install dependencies:
```
npm i
```
* Add your projects directory as gitmodule:
```
git submodule add -f https://github.com/{username}/{username}.github.io.git projects
```
* Start this command:
```
git rm --cached -f projects
```
* To start development run:
```
gulp ---project's_directory_name
```
or run
```
npm run help
```
