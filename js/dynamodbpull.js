//Views
var refresh = document.getElementById('refreshButton');
//DynamoDB initialization
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'us-east-1:08e41de7-9cb0-40d6-9f04-6f8956ed25bb'
});
AWS.config.region = 'us-east-1';
var db = new AWS.DynamoDB();

//Utility Variables
var megaCount = 0; //Int for the megacount
var position = 0;
var resetOrNot = false;
var beBack = false;

refresh.addEventListener('click',reset);

reset();


function reset(){
	if(position<11){
		console.log("Reset Counter: ", resetOrNot);
		if(resetOrNot == false){
	setTimeout(function(){getLast()},500);
		}
		else{
		console.log("Reached else");
		if(resetOrNot == true){
			console.log("Reset Mega");
			updateMegaCount();
			megaCount = 0;
			resetOrNot = false;
		}
		resetOrNot = false;
		position = 0;
	}
	} else{
		position = 0;
	}
}

function getLast(){
        var marams = {
            TableName : 'ashioto2',
            KeyConditionExpression :  "gateID=:gateId",
			ExpressionAttributeValues :
			{
				":gateId":{
				N: position.toString()
			},
			},
            ScanIndexForward : false,
			Limit : 1,
			ReturnConsumedCapacity : "TOTAL"
        }
        db.query(marams, function(err, data){
            if(err) console.log(err, err.stack);
            else{
				try{
					if(position!=0){
					console.log("Current Position: ", position);
                	var returnedValue = parseInt(data.Items[0].outcount.N);
					megaCount += returnedValue;
					}else{
						console.log("Position: 0")
						resetOrNot = true;
						reset();
					}
				} catch(err){
			if(err.name == 'TypeError'){
			}
		}
            }
        });
		position++;
	reset(false);
}
function updateMegaCount(){
	//HTML Views
	var megaCountTextView = document.getElementById('megaCountText');
	megaCountTextView.innerHTML = megaCount;
}