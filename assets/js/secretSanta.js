function submitData() {
    names = [];
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();

    // collecting high level data
    adminName = document.getElementById("adminName").value.trim();
    if (adminName == "") {
        alert("Admin name is empty");
        return;
    }

    adminEmail = document.getElementById("adminEmail").value.trim();
    if (!isValidEmail(adminEmail)) {
        alert(adminEmail + ": is not a valid admin email");
        return;
    }

    spendingLimit = document.getElementById("spendingLimit").value.trim();
    if (spendingLimit == "") {
        alert("spending limit is empty");
        return;
    }

    date = document.getElementById("date").value.trim();
    if (date == ""){
        alert("date is empty");
        return;
    }

    title = document.getElementById("title").value.trim();
    if (title == ""){
        alert("title is empty");
        return;
    }

    obj = {"adminEmail": adminEmail, "adminName": adminName, "limit": spendingLimit, "date": date, "title": title};

    stuff = fetchMembers();
    if (stuff == false) {
        return;
    }

    obj.groups = stuff;
    
    xhr.open('POST', 'https://0bfpmrdeoc.execute-api.us-east-1.amazonaws.com/default/SecretSanta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', 'wx6EBcDdV57GOAhzaleRu4cQCmqSPFLN8ruzbb7e');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://secretsanta.dev');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
    xhr.send(JSON.stringify(obj));
    console.log("Sent");
    alert("Thank you for submitting your Secret Santa! You should receive an admin email confirming distribution. Please check your spam folder too.");
    location.reload();
}

function fetchMembers(){
    var max = 0;
    var total = 0;
    groupLen = document.getElementsByClassName("groups").length;

    if (groupLen <= 1) {
        alert("More than 1 group must exist");
        return false;
    }

    groupArray = new Array(groupLen);
    var groupCount = 0;
    for(g = 0; groupCount < groupLen; g++) {
        memLen = document.getElementsByClassName("mem-group-" + g).length;
        if (memLen == 0) {
            continue;
        }
        groupCount++;
        
        groupArray[g] = new Array(memLen);
        var memCount = 0;
        for (var m = 0; memCount < memLen; m++){
            if (document.getElementById("name-mem-" + m + "-group-" + g) == null ){
                continue;
            }
            memCount++;

            n = document.getElementById("name-mem-" + m + "-group-" + g).value.trim();
            if (!isValidName(n)){
                alert(n + " is a duplicate or empty");
                return false;
            }
            e = document.getElementById("email-mem-" + m + "-group-" + g).value.trim();
            if (!isValidEmail(e)) {
                alert(e + " is not a valid email");
                return false;
            }
            mem = {"name": n, "email": e};
            groupArray[g][m] = mem;
        }
        total += memLen;
        if (max < memLen){
            max = memLen;
        }
    }

    if (max > (total-max)){
        alert("The largest group " + max + "is too large to make valid assignments across the rest " + total);
        return false;
    }
    return groupArray;
}

function addGroup(){
    var form = document.getElementById('form');
    form.appendChild(makeGroup());
}

function deleteGroup(id){
    var group = document.getElementById(id);
    form.removeChild(group);
}

// make a div of the group
function makeGroup() {
    groupClass = 'groups';
    var length = document.getElementsByClassName(groupClass).length;
    var previousItem = document.getElementsByClassName(groupClass).item(length-1);
    var index = 0;
    // handles getting the class index out of the previous div, so we don't repeat indices on delete->add
    if (previousItem != null) {
        parent = previousItem.parentElement;
        splitArray = parent.id.split("-");
        index = parseInt(splitArray[1]) + 1;
    }
    
    var div = document.createElement('div');
    div.id = 'group-' + index;

    var newGroup = document.createElement('h4');
    newGroup.innerHTML = 'Group';
    newGroup.className = groupClass;
    div.appendChild(newGroup);

    var deleteGroupButton = document.createElement('input');
    deleteGroupButton.id = 'delete-group-' + index;
    deleteGroupButton.type = 'button';
    deleteGroupButton.value = 'Delete Group';
    deleteGroupButton.className = 'deleteGroupButton';
    deleteGroupButton.onclick = function() { deleteGroup(div.id); };
    div.appendChild(deleteGroupButton);
    
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

function deleteMember(id){
    document.getElementById(id).remove();
}

function makeMember(id) {
    var p = document.createElement('p');
    p.className = "mem-" + id;
    var length = document.getElementsByClassName(p.className).length;
    var previousItem = document.getElementsByClassName(p.className).item(length-1);
    var index = 0;
    // handles getting the class index out of the previous div, so we don't repeat indices on delete->add
    if (previousItem != null) {
        splitArray = previousItem.id.split("-");
        index = parseInt(splitArray[1]) + 1;
    }
    p.id = "mem-" + index + "-" + id;

    document.getElementById(id).appendChild(p);

    var nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name-mem-" + index + "-" + id;

    var nameLabel = document.createElement('label');
    nameLabel.for = name.id ;
    nameLabel.innerHTML = "Name: ";

    p.append(nameLabel);
    p.appendChild(nameInput);

    var emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.id = "email-mem-" + index + "-" + id;

    var emailLabel = document.createElement('label');
    emailLabel.for = name.id;
    emailLabel.innerHTML = "Email: ";

    p.append(emailLabel);
    p.appendChild(emailInput);

    var deleteMemberButton = document.createElement('input');
    deleteMemberButton.id = 'delete-member-' + index;
    deleteMemberButton.type = 'button';
    deleteMemberButton.value = 'Delete Member';
    deleteMemberButton.className = 'deleteMemberButton';
    deleteMemberButton.onclick = function() { deleteMember("mem-" + index + "-" + id); };
    p.appendChild(deleteMemberButton);
}

function isValidEmail(email) {
    if (email == "") {
        return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var names = [];
function isValidName(name) {
    if (name == "" || names.includes(name)){
        return false;
    }
    names.push(name);
    return true;
}
