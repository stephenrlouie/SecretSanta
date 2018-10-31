// On mouse-over, execute myFunction
function myFunction() {
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://aw5tpxcwq1.execute-api.us-east-1.amazonaws.com/prod/SecretSanta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', 'cUcgmypG1F8GT4STl7y1O5zPwEdkGCTqhkut6vY8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://stephenrlouie.github.io');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    xhr.send('{"admin":"admin","title":"Test Family","date":"12/20/2018","limit":"25","groups":[{"members":[{"name":"Mike","email":"stephen.r.louie@gmail.com"}]},{"members":[{"name":"Adam","email":"ssportskid1118@aol.com"}]}]}');
    console.log("Sent?")
}