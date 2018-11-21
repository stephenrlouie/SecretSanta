function submitData() {
    names = []
    console.log('Submitting Secret Santa');
    var xhr = new XMLHttpRequest();

    // collecting high level data
    adminName = document.getElementById("adminName").value.trim();
    if (adminName == "") {
        alert("Admin name is empty")
        return
    }

    adminEmail = document.getElementById("adminEmail").value.trim();
    if (!isValidEmail(adminEmail)) {
        alert(adminEmail + ": is not a valid admin email")
        return
    }

    spendingLimit = document.getElementById("spendingLimit").value.trim();
    if (spendingLimit == "") {
        alert("spending limit is empty")
        return
    }

    date = document.getElementById("date").value.trim();
    if (date == ""){
        alert("date is empty")
        return
    }

    title = document.getElementById("title").value.trim();
    if (title == ""){
        alert("title is empty")
        return
    }

    obj = {"adminEmail": adminEmail, "adminName": adminName, "limit": spendingLimit, "date": date, "title": title};

    stuff = fetchMembers();
    if (stuff == false) {
        return
    }

    obj.groups = stuff;
    
    xhr.open('POST', 'https://aw5tpxcwq1.execute-api.us-east-1.amazonaws.com/prod/SecretSanta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', 'cUcgmypG1F8GT4STl7y1O5zPwEdkGCTqhkut6vY8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://stephenrlouie.github.io');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    xhr.send(JSON.stringify(obj));
    console.log("Sent");
    alert("Thank you for submitting your Secret Santa! You should receive an admin email confirming distribution. Please check your spam folder too.")
    location.reload()
}

function fetchMembers(){
    var max = 0;
    var total = 0;
    groupCount = document.getElementsByClassName("groups").length;
    if (groupCount <= 1) {
        alert("More than 1 group must exist")
        return false
    }

    groupArray = new Array(groupCount)
    for (var g = 0; g < groupCount; g++) {
        groupNum = g + 1;
        memCount = document.getElementsByClassName("mem-group-" + groupNum).length;
        
        if (memCount == 0) {
            alert("A group must contain at least one member")
            return false
        }

        groupArray[g] = new Array(memCount)
        for (var m = 0; m < memCount; m++){
            memNum = m + 1;
            // only add if not empty
            n = document.getElementById("name-mem-" + memNum + "-group-" + groupNum).value.trim()
            if (!isValidName(n)){
                alert(n + " is a duplicate or empty")
                return false
            }
            e = document.getElementById("email-mem-" + memNum + "-group-" + groupNum).value.trim()
            if (!isValidEmail(e)) {
                alert(e + " is not a valid email")
                return false
            }
            mem = {"name": n, "email": e}
            groupArray[g][m] = mem
        }
        l = groupArray[g].length
        total += l
        if (max < l){
            max = l
        }
    }

    if (max > (total-max)){
        alert("The largest group " + max + "is too large to make valid assignments. " + total)
        return false
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

function isValidEmail(email) {
    if (email == "") {
        return false
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var names = []
function isValidName(name) {
    if (name == "" || names.includes(name)){
        return false
    }
    names.push(name)
    return true
}