$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
});

function getWeather(){
    var city1 = $("#city1").val();
    
    if(city1 != ''){
        
        $.ajax({
           //url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
          //url: 'https://api.railwayapi.com/v2/pnr-status/pnr/'+city+'/apikey/zvxng1766l/',
//url: 'https://api.railwayapi.com/v2/check-seat/train/'+city+'/source/'+city1+'/dest/'+city2+'/date/'+city3+'/pref/CC/quota/GN/apikey/zvxng1766l/',
 url: 'https://api.railwayapi.com/v2/code-to-name/code/'+city1+'/apikey/ip5dtorqbr/',
            type: "GET",
            dataType: "json",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather4").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
}




function showResults(data)
{   
    
    var text = "<br>"+"<br>"+"<h1 style='padding-left:60px; text-align='center'; padding-bottom:30px;'><strong>"+data.stations[0].name +"</strong>"+ "<br>"+"<br>";
    return  text;
}









