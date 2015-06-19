 

(function (){

    var app = angular.module('eventsApp');
    
    var EventController = function($scope,$sce){
        $scope.myStyle= {color:'red'};
        $scope.snippet = '<span style="color.red"> hi there </span>';
        $scope.snippetUnSafe = $sce.trustAsHtml('<span style="color.red"> hi there </span>');
        $scope.myClass="blue";
        $scope.boolValue = true;
         $scope.event = {         
            name: 'Angular Boot Camp',   
            date: '6/16/2015',
            time: '7:30 pm',
            location: {
                address: 'Penn Circle',
                city: 'King of Prussia',
                province: 'PA'
                
            },
            
             imageUrl: 'img/angularJS_logo.png',
             sessions: [
                 {
                     name: 'Directive Masterclass',
                     creatorName: 'Bob Smith',
                     duration: 1,
                     level: 'Advanced',
                     abstract: ' In this session...'  ,
                     upVoteCount: 0
                 },
                 {
                     name: 'Scopes for fun and profit',
                     creatorName: 'John Doe',
                     duration: 2,
                     level: 'Advanced',
                     abstract: ' In this session...',
                     upVoteCount: 0
                 },                 
                 {
                     name: 'Well Behaved Controllers',
                     creatorName: 'Bob Smith',
                     duration: 4,
                     level: 'Advanced',
                     abstract: ' In this session...',
                     upVoteCount: 0
                 }
            ]
             
             
         };
        
        
        $scope.upVoteSession=function(session)
        {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession=function(session)
        {
            if(session.upVoteCount>0){
                session.upVoteCount--;
            }
        };
        
    };
    
    app.controller("EventController",["$scope","$sce",EventController]);
    
})();