//Gate Counts
var gate1IsOpened = true;
var gate2IsOpened = true;
var gate3IsOpened = true;
var gate4IsOpened = true;
var gate6IsOpened = true;
var gate7IsOpened = true;
var gate8IsOpened = true;
var gate9IsOpened = true;
var gate10IsOpened = true;
var gate1Stamp = "";
var gate2Stamp = "";
var gate3Stamp = "";
var gate4Stamp = "";
var gate5Stamp = "";
var gate6Stamp = "";
var gate7Stamp = "";
var gate8Stamp = "";
var gate9Stamp = "";
var gate10Stamp = "";

function initMap() {
	//Main Map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 20.0000, lng: 73.7800},
		zoom: 12,
		'mapTypeId': google.maps.MapTypeId.ROADMAP
	});
	//Rokdoba
	var rokdobaLatLong = {lat:20.00294, lng:73.79324};
	var rokdobaTitle = "Rokdoba Exit";
	
	var rokdobaMarker = new google.maps.Marker({
		position : rokdobaLatLong,
		animation: google.maps.Animation.DROP,
		title : rokdobaTitle,
		map : map,
        count : gate1
	});
	
	var rokdobaInfoWindow = new google.maps.InfoWindow({
		content :   '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Rokdoba</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate1+'</h6>'
	});
	
	rokdobaMarker.addListener('click', function(){
        if(gate1IsOpened == true){
		rokdobaInfoWindow.open(map, rokdobaMarker);
            if(gate2IsOpened == false){
                amardhamInfoWindow.close();
            } else if(gate8IsOpened == false){
                console.log("Hey There!");
                homeInfoWindow.close();
            }
            gate1IsOpened = false;
        } else if(gate1IsOpened == false){
            rokdobaInfoWindow.close();
            gate1IsOpened = true;
        }
	});
	//Amardham
	var amardhamLatLong = {lat:19.99866, lng:73.79690};
	var amardhamTitle = "Amardham Exit";
	
	var amardhamMarker = new google.maps.Marker({
		position : amardhamLatLong,
		animation: google.maps.Animation.DROP,
		title : amardhamTitle,
		map : map,
        count : gate2
	});
	
	var amardhamInfoWindow = new google.maps.InfoWindow({
		content : '<span class="card-title">Amardham Exit Gate</span>'+
                    '<h1 id="megaCountText" style="font-size: 30px;text-align: center;">'+gate2+'</h1>'
		});
	
	amardhamMarker.addListener('click', function(){
        if(gate2IsOpened == true){
		amardhamInfoWindow.open(map, amardhamMarker);
            if(gate1IsOpened == false){
                rokdobaInfoWindow.close();
            } else if(gate8IsOpened == false){
                homeInfoWindow.close();
            }
            gate2IsOpened = false;
        } else if(gate2IsOpened == false){
            amardhamInfoWindow.close();
            gate2IsOpened = true;
        }
	});
    //Kothawde
    var kothawdeLatLong = {lat:19.992728, lng:73.805187};
    var kothawdeTitle = "Kothawde Trading";
    
    var kothawdeMarker = new google.maps.Marker({
        position : kothawdeLatLong,
        animation: google.maps.Animation.DROP,
		title : gate3,
		map : map,
        count : gate3
    });
    //Laxmi Ghat
    var laxmiLatLong = {lat:20.001449, lng:73.811142};
    var laxmiTitle = "Laxmi Ghat";
    
    var laxmiMarker = new google.maps.Marker({
        position : laxmiLatLong,
        title : laxmiTitle,
        count : gate4,
        map : map,
        animation : google.maps.Animation.DROP
    });
    
    //Gharpure Ghat
    var gharpureLatLong = {lat:20.008742, lng:73.7838397};
    var gharpureTitle = "Gharpure Ghat";
    
    var gharpureMarker = new google.maps.Marker({
        position : gharpureLatLong,
        title : gharpureTitle,
        count : gate5,
        map : map,
        animation : google.maps.Animation.DROP
    });
    
    //Saraf Bazar
    var sarafLatLong = {lat:20.00544559, lng:73.79083704};
    var sarafTitle = "Saraf Bazar";
    
    var sarafMarker = new google.maps.Marker({
        position : sarafLatLong,
        title : sarafTitle,
        count : gate6,
        map : map,
        animation : google.maps.Animation.DROP
    });
    
	//MarkerClustering
	var markerClustererCollection = [amardhamMarker,rokdobaMarker,kothawdeMarker,laxmiMarker,gharpureMarker,sarafMarker];
    var totalCount = 0;
    for(var i=0;i<markerClustererCollection.length;i++){
        totalCount += markerClustererCollection[i].count;
    }
	var markerClustererOptions = {gridSize: 50, maxZoom: 13, count: totalCount};
	var markerClusterer = new MarkerClusterer(map, markerClustererCollection, markerClustererOptions);
}