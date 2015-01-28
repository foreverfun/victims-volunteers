//alert("main.js");

var numberOfVictims = prompt("How many disaster victims?", "Enter");

// 3 arrays
var victimNameArray=[];
var victimPhoneArray=[];
var victimStreetArray=[];

for (var i=0; i<numberOfVictims; i++) {
	victimNameArray.push(prompt("Enter Name:", "Enter Victim's Name"));
	//console.log(victimNameArray);
	victimPhoneArray.push(prompt("Enter Phone Number", "Enter Victim's Phone Number"));
	//console.log(victimPhoneArray);
	victimStreetArray.push(prompt("Enter Street", "Enter Victim's Street"));
	//console.log(victimStreetArray);
};


var numberOfVolunteers = prompt("How many volunteers?", "Enter");

var volunteerNameArray=[];
var volunteerPhoneArray=[];
var volunteerStreetArray=[];

for (var i=0; i<numberOfVolunteers; i++) {
	volunteerNameArray.push(prompt("Enter Name:", "Enter Volunteer's Name"));
	volunteerPhoneArray.push(prompt("Enter Phone Number:", "Enter Volunteer's Phone Number"));
	volunteerStreetArray.push(prompt("Enter Street:", "Enter Volunteer's Street"));
};

var result = "victims: ";

//var resultVictims;
//resultVictims = "victims: ";
for (var i=0; i<numberOfVictims; i++) {
	//resultVictims = resultVictims + victimNameArray[i] + " " + victimPhoneArray[i] + " " + victimStreetArray [i] + " | ";
	//console.log(resultVictims);
	result += victimNameArray[i] + " " + victimPhoneArray[i] + " " + victimStreetArray [i] + " | ";
	console.log(result);	
}

result += "volunteers: ";
//var resultVolunteer;
//resultVolunteer="volunteers: ";
for (var i=0; i<numberOfVolunteers; i++) {
	//resultVolunteer = resultVolunteer + volunteerNameArray[i] + " " + volunteerPhoneArray[i] + " " + volunteerStreetArray[i] + " | ";
	//console.log(resultVolunteer);
	result += volunteerNameArray[i] + " " + volunteerPhoneArray[i] + " " + volunteerStreetArray[i] + " | ";
	console.log(result);
}


//alert(result);
//console.log(resultVictims + " " + resultVolunteer);
console.log(result);