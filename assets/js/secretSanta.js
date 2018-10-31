// On mouse-over, execute myFunction
function submitData() {
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', '');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://stephenrlouie.github.io');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    xhr.send('');
    console.log("Sent?")
}

function addGroup(){
    console.log("Adding Group")
    var groups = document.getElementsByClassName = "group"
    console.log(groups.length)
    var group = document.createElement('h2');
    group.value = "group"
    group.class = "groups" 
      
    var form = document.getElementById('form');
    form.appendChild(group);
}

function addMember(){
    console.log("Adding Member")
}