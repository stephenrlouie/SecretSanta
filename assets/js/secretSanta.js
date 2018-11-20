function submitData() {
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();

    adminName = document.getElementById("adminName")
    adminEmail = document.getElementById("adminEmail")
    spendingLimit = document.getElementById("spendingLimit")
    date = document.getElementById("date")
    obj = {"adminEmail": adminEmail, "adminName": adminName, "Limit": spendingLimit, "date": date}
    // xhr.open('POST', '', true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('X-Api-Key', 'cUcgmypG1F8GT4STl7y1O5zPwEdkGCTqhkut6vY8');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://stephenrlouie.github.io');
    // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    //xhr.send('');
    console.log(JSON.stringify(obj))
    console.log("Not sending")
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
    nameInput.id = index + "-name-" + p.className;

    var nameLabel = document.createElement('label');
    nameLabel.for = name.id 
    nameLabel.innerHTML = "Name: "

    p.append(nameLabel)
    p.appendChild(nameInput)

    var emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.id = index + "-email-" + p.className;

    var emailLabel = document.createElement('label');
    emailLabel.for = name.id 
    emailLabel.innerHTML = "Email: "

    p.append(emailLabel)
    p.appendChild(emailInput)

}