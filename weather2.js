$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           //url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
           //url: 'https://api.railwayapi.com/v2/pnr-status/pnr/'+city+'/apikey/zvxng1766l/',
             url: 'https://api.railwayapi.com/v2/route/train/'+city+'/apikey/q1mlppvcuf/',
            type: "GET",
            dataType: "json",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
}

function showResults(data)
{   
    var i,text="";
    text+="<br>"
    for (i = 0; i < data.route.length; i++) 
    { 
    var d1 = data.route[i].station.name;
    //text += d1 +"------------------------------"+"<br>"+"<br>";
    text += "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>"+d1 +"</strong>";
    } 
    
    return  text;

}












