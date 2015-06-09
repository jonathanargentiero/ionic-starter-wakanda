This is an addon starter template for the [Ionic Framework](http://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library and Angular-Wakanda.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

##Prerequisite

Of course you need node, but you will also need the following modules :

* ionic framework `npm install -g ionic`
* cordova `npm install -g cordova`
* bower `npm install -g bower`
- [Wakanda Server V11 based on JSCore](http://www.wakanda.org/downloads) (optional)

##Initialize
###with the Ionic tool:

The project will be initialized in the `myApp` folder. If you are inside a Wakanda Solution run this command inside the `WebFolder`of your project. Dependencies will be installed with bower.

```
$ ionic start myApp https://github.com/jonathanargentiero/ionic-starter-wakanda
$ cd myApp/www
$ bower install
```

You can also initialize some dummy data provided in the `import` folder. In order to do that just copy all the files inside the `import` folder in the main directory of your project, overwriting the existing data model files.

##Run
###with wakanda:

You can start the solution inside Wakanda Studio or directly [via command line](http://livedoc.wakanda.org/Command-Line-Access/Administrating-Wakanda-Server-Unix.300-583228.en.html) (example on MAC): 

```
 $ path/to/your/Wakanda\ Server.app/Contents/MacOS/Wakanda\ Server /path/to/your/solution/solution.waSolution 
```

Then navigate to `http://127.0.0.1:8081/myApp/www`

###with cordova:

Then, to run it, cd into `myApp` and run:

```
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

##Services

The template will provide visual feedback if:

- Wakanda Server is detected running on the same address of the project
- Wakanda Data Model contains the dummy data, then the first 5 rows will be retrieved from the Database.

## Demo
http://plnkr.co/edit/QdYHmybTcKWQyB88TZ3a?p=preview
