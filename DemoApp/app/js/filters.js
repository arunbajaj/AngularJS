'use strict';

eventsApp.filter('duration', function(){
   return function(duration){
       switch(duration){
           case 1:
               return "Half Hour";
           case 2: 
               return "One hour";
           case 3: 
               return "Hald day";
           case 4:
               return "Full day";
       };
   };
});
