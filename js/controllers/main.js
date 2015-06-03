angular.module('starter.home', ['wakanda', 'ionic' ])

    .config(function ($stateProvider) {

        $stateProvider

            .state('home', {
                url: "/",
                templateUrl: "templates/main.html",
                controller: "MainCtrl"
            })

    })

    .controller('MainCtrl', function($scope, $wakanda) {

        $scope.components = [
            { text: "Wakanda", checked: true, image : "images/wakanda.png" },
            { text: "Angular", checked: true, image : "images/angular-wakanda.png"  },
            { text: "Ionic", checked: true, image : "images/ionic.png"  },
            { text: "Cordova", checked: true, image : "images/cordova.png" }
        ];

        $scope.plugins = [
            { text: "Angular-Wakanda", checked: true },
            { text: "Ionic JS", checked: true },
            { text: "Ionic CSS", checked: true }
        ];

        $scope.documentation = [
            { text: "AngularJS", url: "https://angularjs.org/" },
            { text: "Angular-Wakanda", url: "http://www.wakanda.org/angular-wakanda/" },
            { text: "Ionic", url: "http://ionicframework.com/docs/" },
            { text: "Cordova", url: "https://cordova.apache.org/" }
        ];
        $scope.serverStatus = { text : { online : false }, status : false };
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){
          if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.serverStatus = { text : { online : true }, status : true };
          }
        }
        xmlhttp.open("GET","/rest/$directory/currentUser",true);
        xmlhttp.send();
        

        $scope.dataModel = { status : false, model : {} };
        
        $wakanda.init().then(function (ds) {
            $scope.contacts = ds.Contact.$find({
                pageSize : 5
            });
            $scope.dataModel.status = true; 
            $scope.dataModel.model = $scope.contacts;

        }).catch(function(err){
            console.error(err)
        });
        
      
    });

