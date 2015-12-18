$(document).ready(function(){
    $.ajax({
        type: 'POST',
        dataType: "json",
        data: '{"event_code":"test_event"}',
        url: "http://ashioto.in:8888/per_gate",
        success: function (responseData, textStatus, jqXHR) {
            alert(responseData);
            console.log("in");
            var data = JSON.parse(responseData['AuthenticateUserResult']);
            alert(data);
        },
        error: function (responseData, textStatus, errorThrown) {
            var data = JSON.parse(responseData['AuthenticateUserResult']);
            alert(data);
        },
        crossDomain: true
    });
});