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
    var groups = document.getElementsByClassName(groupClass);
    var index = (groups.length + 1);

    var div = document.createElement('div');
    div.id = 'group-' + index;

    var newGroup = document.createElement('h2');
    newGroup.innerHTML = 'Group: ' + index;
    newGroup.className = groupClass;
    div.appendChild(newGroup);

    var memButton = document.createElement('input')
    memButton.type = 'button'
    memButton.onclick='addMember(this.parentElement.id)'
    memButton.value='Add Member'
    return div;
}

function addMember(thisId){
    console.log('Adding Member: ' + thisId);
    makeMember(thisId)
}

function makeMember(groupId) {
    var newMem = document.createElement('h4');
    newMem.innerHTML = 'Member';
    document.getElementById(groupId).appendChild(newMem)
}