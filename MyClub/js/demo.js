require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise',
    'ojs/ojtable', 'ojs/ojrowexpander', 'ojs/ojflattenedtreetabledatasource', 'ojs/ojjsontreedatasource'],
function(oj, ko, $)
{   		
    $(
        function() 
        {
            $.getJSON( "js/projectData.json", 
            function(data) 
            {
                var options = [];
                var datasource = new oj.FlattenedTreeTableDataSource(
                    new oj.FlattenedTreeDataSource(
                        new oj.JsonTreeDataSource(data), options));
                ko.applyBindings({datasource:datasource}, 
                    document.getElementById('table'));
            });
        }
    );
});