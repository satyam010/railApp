$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
});

function getWeather(){
    var city = $("#city").val();
    var city1 = $("#city1").val();
    var city2 = $("#city2").val();
    var city3 = $("#city3").val();
    
    if(city != '' && city1 != ''&& city2 != ''&& city3 != ''){
        
        $.ajax({
           //url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
          //url: 'https://api.railwayapi.com/v2/pnr-status/pnr/'+city+'/apikey/zvxng1766l/',
          //curl "https://api.railwayapi.com/v2/live/train/12046/date/20-06-2017/apikey/myapikey/"

//url: 'https://api.railwayapi.com/v2/check-seat/train/'+city+'/source/'+city1+'/dest/'+city2+'/date/'+city3+'/pref/CC/quota/GN/apikey/ip5dtorqbr/',
 url: 'https://api.railwayapi.com/v2/live/train/'+city+'/date/'+city1+'/apikey/q1mlppvcuf/',
 
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
    var d2 = data.route[i].status;
    var d3 = data.route[i].actarr;
    var d4 = data.route[i].scharr;
    

    text += "<h5 style='padding-left:80px; padding-bottom:30px;'><strong>"+d1 +"</strong>:     "+d2+" Actual Arrival is "+d3+" Expected Arrival is "+d4  ;


    } 

    
    return  text;

}