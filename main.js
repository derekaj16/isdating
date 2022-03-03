function calculateLove() {
    let phrase = document.getElementById("phrase").value.toLowerCase();
    let name1 = document.getElementById("first-person").value.toLowerCase();
    let name2 = document.getElementById("second-person").value.toLowerCase();
    let heart = new ldBar("#show-the-love", {
                            "path": "M90.5,23.2c0-12.5-10.2-22.7-22.7-22.7c-13.6,0-20.9,8.6-22.3,13.8C44.3,8.9,35.1,0.5,23.2,0.5C10.7,0.5,0.5,10.7,0.5,23.2c0,22.2,36.5,45.3,45,55.9C53.5,67.3,90.5,46.3,90.5,23.2z",
                            "type": "fill"
                        });
    let count = 0;
    let iFactor = 1;
    let iPower;
    

    phrase = parseSpace(phrase);
    name1 = parseSpace(name1);
    name2 = parseSpace(name2);

    for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < phrase.length; j++) {
            if (name1[i] == phrase[j]) {
                count++;
            }
        }
    }
    for (let i = 0; i < name2.length; i++) {
        for (let j = 0; j < phrase.length; j++) {
            if (name2[i] == phrase[j]) {
                count++;
            }
        }
    }

    iFactor = countChecks();

    iPower = Math.ceil(((count / phrase.length) * 22) * iFactor);

    heart.set(iPower);
    
    if (iPower >= 100) {
        document.getElementById("output").innerHTML = "Perfect Marriage";
    } else if (iPower >= 85) {
        document.getElementById("output").innerHTML = "Get married!";
    } else if (iPower >= 70) {
        document.getElementById("output").innerHTML = "It might work";
    } else {
        document.getElementById("output").innerHTML = "Keep looking";
    }
    
    

}

function countChecks() {
    let checkboxes = document.getElementsByClassName("check");
    let count = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count += .25;
        }
        if (checkboxes[i].checked && (i == checkboxes.length - 1)) {
            count += .25;
        }
    }
    return count;
}

function parseSpace(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            newString += string[i];
        }
    }
    return newString;
}

function resetInput() {
    let checkboxes = document.getElementsByClassName("check");

    document.getElementById("phrase").value = '';
    document.getElementById("first-person").value = '';
    document.getElementById("second-person").value = '';
    document.getElementById("show-the-love").ldBar.set(0); 
    document.getElementById("output").innerHTML = ''; 
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        document.getElementById("phrase").focus();
    }
}