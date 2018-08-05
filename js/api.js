
var apiURL = "https://servstore-test.herokuapp.com/parse/functions/getBusinessByName";
var apiHeader = "servstore_test";

// Assign handlers immediately after making the request,
$(document).ready(function(){

    
});
var baseUrl = (window.location).href; // You can also use document.URL
var name = baseUrl.substring(baseUrl.lastIndexOf('?')+1);
alert(name)
// and remember the jqxhr object for this request

$.ajax({
    url: 'https://servstore-test.herokuapp.com/parse/functions/getBusinessByName',
    data: {
       format: 'json'
    },
    headers:{
    "X-Parse-Application-Id": apiHeader,

    },
    data:{
        uniqueName: "Sweater"
    },
    error: function() {
       $('#info').html('<p>An error has occurred</p>');
    },
    dataType: 'json',
    success: function(data) {
       $("#title").text(data.result.businessDetails.titleAr);
       $("#description").text(data.result.businessDetails.descAr);
       $("#icon").attr("src",data.result.businessDetails.logo);
       $("body").css("background",data.result.businessDetails.secondaryColor)
    },
    type: 'POST'
 });