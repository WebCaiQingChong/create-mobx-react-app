# create-mobx-react-app
a cli what can create init project with mobx + react


### current function
```
Options:

  -V, --version           output the version number
  -l, --list              print the template list
  -h, --help              output usage information

Commands:

  new <project-name>      create init project
  add <config-file-path>  add your own template list
```


### add file template
```js
module.exports = {
  TEM_LIST: {
    'templateName': {
      desc: 'template description',
      addr: 'template git repository'
    }
  }
}
```
git repository address should like this [download-git-repo](https://github.com/flipxfx/download-git-repo)