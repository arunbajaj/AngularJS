eventsApp.factory('eventData',function(){
    
    return {
        
        event: {         
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
             
             
         }
        
    };    
});