//DynamoDB initialization
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'us-east-1:08e41de7-9cb0-40d6-9f04-6f8956ed25bb'
});
AWS.config.region = 'us-east-1';
var db = new AWS.DynamoDB();
var getTime = setTimeout(function(){updateMegaCount()}, 4000);
var regularUpdateCount = setInterval(function(){getLast();}, 5000);
var regularSetCount = setInterval(function(){updateMegaCount();},6000);

//Utility Variables
var megaCount = 0; //Int for the megacount

function getLast(){
	megaCount = 0;
	var iteratorPosition = 0;
	for(var i=1;i<10;i++){
        var marams = {
            TableName : 'ashioto2',
            KeyConditionExpression :  "gateID=:gateId",
			ExpressionAttributeValues :
			{
				":gateId":{
				N: i.toString()
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
					iteratorPosition+=1;
                	var returnedValue = parseInt(data.Items[0].outcount.N);
					megaCount += returnedValue;
				} catch(err){
			if(err.name == 'TypeError'){
			}
		}
            }
        });
	}
}
getLast();
function updateMegaCount(){
	//HTML Views
	var megaCountTextView = document.getElementById('megaCountText');
	megaCountTextView.innerHTML = megaCount;
}