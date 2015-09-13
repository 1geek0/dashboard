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
	var map = new google.maps.Map(document.getElementById('mapFull'), {
		center: {lat: 20.12000165, lng: 73.792308},
		zoom: 15,
		'mapTypeId': google.maps.MapTypeId.ROADMAP
	});
	//Rokdoba
	var rokdobaLatLong = {lat:20.00294, lng:73.79324};
	var rokdobaTitle = "Rokdoba";
	
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
    
    rokdobaInfoWindow.open(map, rokdobaMarker);
	
	rokdobaMarker.addListener('click', function(){
        if(gate1IsOpened == true){
            rokdobaInfoWindow.open(map, rokdobaMarker);
            gate1IsOpened = false
        } else{
            rokdobaInfoWindow.close();
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
		content : '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Amardham</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate2+'</h6>'
		});
    
	amardhamInfoWindow.open(map, amardhamMarker);
	amardhamMarker.addListener('click', function(){
        if(gate2IsOpened == true){
		amardhamInfoWindow.open(map, amardhamMarker);
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
    var kothawdeInfoWindow = new google.maps.InfoWindow({
        content : '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Kothawde</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate3+'</h6>'
    });
    kothawdeInfoWindow.open(map,kothawdeMarker);
    kothawdeMarker.addListener('click', function(){
        if(gate3IsOpened == true){
		kothawdeInfoWindow.open(map, kothawdeMarker);
            gate3IsOpened = false;
        } else if(gate3IsOpened == false){
            kothawdeInfoWindow.close();
            gate3IsOpened = true;
        }
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
    var laxmiInfoWindow = new google.maps.InfoWindow({
        content : '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Laxmi Ghat</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate4+'</h6>'
    });
    laxmiInfoWindow.open(map, laxmiMarker);
    laxmiMarker.addListener('click', function(){
        if(gate4IsOpened == true){
		laxmiInfoWindow.open(map, laxmiMarker);
            gate4IsOpened = false;
        } else if(gate4IsOpened == false){
            laxmiInfoWindow.close();
            gate4IsOpened = true;
        }
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
    
    var gharpureInfoWindow = new google.maps.InfoWindow({
        content : '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Gharpure</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate5+'</h6>'
    });
    gharpureInfoWindow.open(map, gharpureMarker);
    gharpureMarker.addListener('click', function(){
        if(gate5IsOpened == true){
		gharpureInfoWindow.open(map, gharpureMarker);
            gate5IsOpened = false;
        } else if(gate5IsOpened == false){
            gharpureInfoWindow.close();
            gate5IsOpened = true;
        }
	});
    /*
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
    
    var sarafInfoWindow = new google.maps.InfoWindow({
        content : '<h5 id="totalCountTitle" class="card-title" style="text-align: center;">Saraf</h5>'+
                    '<h6 id="megaCountText" style="text-align: center; font-size="30px">'+gate6+'</h6>'
    });
    sarafInfoWindow.open(map, sarafMarker);
    sarafMarker.addListener('click', function(){
        if(gate6IsOpened == true){
		sarafInfoWindow.open(map, sarafMarker);
            gate6IsOpened = false;
        } else if(gate6IsOpened == false){
            sarafInfoWindow.close();
            gate6IsOpened = true;
        }
	});
    */
	//MarkerClustering
	var markerClustererCollection = [amardhamMarker,rokdobaMarker,kothawdeMarker,laxmiMarker,gharpureMarker];
    var totalCount = 0;
    for(var i=0;i<markerClustererCollection.length;i++){
        totalCount += markerClustererCollection[i].count;
    }
	var markerClustererOptions = {gridSize: 50, maxZoom: 13, count: totalCount};
	var markerClusterer = new MarkerClusterer(map, markerClustererCollection, markerClustererOptions);
}