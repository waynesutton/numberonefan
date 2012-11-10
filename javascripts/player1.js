$(document).ready(function () {
	sendAJAX();
});

//sendAJAX
//core AJAX wrapper for sending json objects to a particular webservice method
//
//@param action : string : the webservice method to send a request to
//@param data : object : an object to be serialized an sent as a request to the webservice
function sendAJAX() {
	$.get("http://api.espn.com/v1/sports/basketball/womens-college-basketball/athletes/5934?apikey=yeary2uryb7w7vru4z7j5cu3",
	   function(data){
			dispatchAJAXResponse(data);
	   }, "json");
}

//dispatchAJAXResponse
//forward the webservice response to the appropriate handler method
//
//@param action : string : the webservice method the request was sent to
//@param request : object : the object sent in the request
//@param response : object : the object received as a response
function dispatchAJAXResponse(response) {

}