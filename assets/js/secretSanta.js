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
    var form = document.getElementById('form');
    form.appendChild(makeGroup());
}

// make a div of the group
function makeGroup() {
    groupClass = 'groups';
    var index = document.getElementsByClassName(groupClass).length + 1;

    var div = document.createElement('div');
    div.id = 'group-' + index;

    var newGroup = document.createElement('h2');
    newGroup.innerHTML = 'Group: ' + index;
    newGroup.className = groupClass;
    div.appendChild(newGroup);

    var memButton = document.createElement('input');
    memButton.id = 'mem-group' + index;
    memButton.type = 'button';
    memButton.value = 'Add Member';
    memButton.className = 'memButton';
    memButton.onclick = function() { addMember(div.id); };
    div.appendChild(memButton);

    return div;
}

function addMember(thisId){
    console.log('Adding Member: ' + thisId);
    makeMember(thisId);
}

function makeMember(id) {
    var p = document.createElement('p');
    p.className = "mem-"+id;
    var index = document.getElementsByClassName(p.className).length + 1;
    document.getElementById(id).appendChild(p);

    var nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name-" + p.className;

    var nameLabel = document.createElement('label');
    nameLabel.for = name.id 
    nameLabel.innerHTML = "Name: "

    p.append(nameLabel)
    p.appendChild(nameInput)

    var emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.id = "email-" + p.className;

    var emailLabel = document.createElement('label');
    emailLabel.for = name.id 
    emailLabel.innerHTML = "Email: "

    p.append(emailLabel)
    p.appendChild(emailInput)

}