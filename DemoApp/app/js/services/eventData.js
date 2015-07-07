eventsApp.factory('eventData',function($resource){
    return $resource('/data/event/:id.json');
  /*  var resource = $resource('/data/event/:id.json',{id:'@id'});
    return {
        getEvent: function(){
            return resource.get({id:1});
          /*  var deferred = $q.defer();
            $http.get('/data/event/1.json')
                .success(function(data,status,headers,config){
                deferred.resolve(data);
        })
        .error(function(data,status,headers,config){
                deferred.reject(status);
        });
            
            return deferred.promise; 

        },
        
        save: function(event){
            event.id=999;
             return resource.$save();
        } 
    };*/
});