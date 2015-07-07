eventsApp.controller('EditEventController',
       function EditEventController($scope,eventData){
    
        $scope.saveEvent=function(event,newEventForm){
            console.log(newEventForm);
            if(newEventForm.$valid){
               $scope.eventData = new eventData();
              
               event.id=999;
                 $scope.eventData.data = event;
               eventData.save($scope.eventData)
                   .$promise.then(function(response){console.log('sucess',response);},
                                 function(response){console.log('failure',response);});
            }
           
        };
    
    
        $scope.cancelEdit=function(){
        window.location="/EventDetails.html";
            
        };
 
});