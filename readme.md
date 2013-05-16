# Grunt 3D

Grunt tasks for compressing 3D models in web-friendly formats. For a more detailed introduction, read the [launch presentation](https://gist.github.com/tracend/5368499)


## Features

* Automated 
* Simple API
* Content agnostic
* Modular

Currently supports the OBJ -> Three.js JSON conversion, using [grunt-three-obj](https://github.com/makesites/grunt-three-obj). 

More formats can be added by creating additional grunt plugins. 


## Install

Assuming Grunt.js is already available - simply add the dependency using npm:
```
npm install grunt-3d
```


## Usage

In your gruntfile.js, configure each supported converter you'd like to use seperately. 

Then include the main task repository
```
grunt.loadNpmTasks('grunt-3d');
```

Don't forget to setup (at least) a default task:
```
grunt.registerTask('default', ['three_obj']);
```


## Credits 

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://www.makesites.org/licenses/MIT)

