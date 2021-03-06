 

(function (){

    var app = angular.module('eventsApp');
    
    var EventController = function($scope,eventData,$anchorscroll){
        $scope.myStyle= {color:'red'};
        $scope.snippet = '<span style="color.red"> hi there </span>';
         
        $scope.myClass="blue";
        $scope.boolValue = true;
      /*  eventData.getEvent().then(
            function(event){ $scope.event=event;},
            function(statusCode){ console.log(statusCode);}
        );
        */
        
        $scope.event=eventData.get({id:4});
        
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
        
        $scope.scrollToSession= function(){
            $anchorscroll();
        };
    };
    
    app.controller("EventController",["$scope","eventData",EventController]);
    
})();