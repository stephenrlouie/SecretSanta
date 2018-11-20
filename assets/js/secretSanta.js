function submitData() {
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();

    // collecting high level data
    adminName = document.getElementById("adminName").value;
    adminEmail = document.getElementById("adminEmail").value;
    spendingLimit = document.getElementById("spendingLimit").value;
    date = document.getElementById("date").value;
    title = document.getElementById("title").value;
    // check if empty ^

    obj = {"adminEmail": adminEmail, "adminName": adminName, "limit": spendingLimit, "date": date, "title": title};

    stuff = fetchMembers();
    console.log(stuff);
    obj.groups = stuff;
    

    xhr.open('POST', 'https://aw5tpxcwq1.execute-api.us-east-1.amazonaws.com/prod/SecretSanta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', 'cUcgmypG1F8GT4STl7y1O5zPwEdkGCTqhkut6vY8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://stephenrlouie.github.io');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    xhr.send(JSON.stringify(obj));
    console.log(JSON.stringify(obj));
    console.log("Sent");
    alert("Thank you for submitting your secret santa!")
    location.reload()
}

function fetchMembers(){
    groupCount = document.getElementsByClassName("groups").length;
    groupArray = new Array(groupCount)
    for (var g = 0; g < groupCount; g++) {
        groupNum = g + 1;
        memCount = document.getElementsByClassName("mem-group-" + groupNum).length;
        groupArray[g] = new Array(memCount)
        for (var m = 0; m < memCount; m++){
            memNum = m + 1;
            n = document.getElementById("name-mem-" + memNum + "-group-" + groupNum).value
            e = document.getElementById("email-mem-" + memNum + "-group-" + groupNum).value
            mem = {"name": n, "email": e}
            groupArray[g][m] = mem
        }
    }
    return groupArray
}

function addGroup(){
    var form = document.getElementById('form');
    form.appendChild(makeGroup());
}

// make a div of the group
function makeGroup() {
    groupClass = 'groups';
    var index = document.getElementsByClassName(groupClass).length + 1;

    var div = document.createElement('div');
    div.id = 'group-' + index;

    var newGroup = document.createElement('h4');
    newGroup.innerHTML = 'Group: ' + index;
    newGroup.className = groupClass;
    div.appendChild(newGroup);

    var addMemButton = document.createElement('input');
    addMemButton.id = 'add-mem-group-' + index;
    addMemButton.type = 'button';
    addMemButton.value = 'Add Member';
    addMemButton.className = 'addMemButton';
    addMemButton.onclick = function() { addMember(div.id); };
    div.appendChild(addMemButton);

    return div;
}

function addMember(thisId){
    makeMember(thisId);
}

function makeMember(id) {
    var p = document.createElement('p');
    p.className = "mem-"+id;
    // Get length of members
    var index = document.getElementsByClassName(p.className).length + 1;

    document.getElementById(id).appendChild(p);

    var nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name-mem-" + index + "-" + id;

    var nameLabel = document.createElement('label');
    nameLabel.for = name.id 
    nameLabel.innerHTML = "Name: "

    p.append(nameLabel)
    p.appendChild(nameInput)

    var emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.id = "email-mem-" + index + "-" + id;

    var emailLabel = document.createElement('label');
    emailLabel.for = name.id 
    emailLabel.innerHTML = "Email: "

    p.append(emailLabel)
    p.appendChild(emailInput)

}