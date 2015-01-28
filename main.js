//alert("main.js");

function person(name, phone, street) {
	this.name = name;
	this.phone = phone;
	this.street = street;
};

// ===============================================================
// get victims
var numberOfVictims = prompt("How many disaster victims?", "Enter");

/*
// using 3 arrays
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
*/

// using an object
var victimsArray = [];

for (var i=0; i<numberOfVictims; i++) {
	victimsArray[i] = new person(
		prompt("Enter Name:", "Enter Victim's Name"), 
		prompt("Enter Phone Number", "Enter Victim's Phone Number"),
		prompt("Enter Street", "Enter Victim's Street"));
	console.log(victimsArray[i]);
};


// ===============================================================
// get volunteers
var numberOfVolunteers = prompt("How many volunteers?", "Enter");

/*
// using 3 arrays
var volunteerNameArray=[];
var volunteerPhoneArray=[];
var volunteerStreetArray=[];

for (var i=0; i<numberOfVolunteers; i++) {
	volunteerNameArray.push(prompt("Enter Name:", "Enter Volunteer's Name"));
	volunteerPhoneArray.push(prompt("Enter Phone Number:", "Enter Volunteer's Phone Number"));
	volunteerStreetArray.push(prompt("Enter Street:", "Enter Volunteer's Street"));
};
*/

//using an object
var volunteersArray = [];

for (var i=0; i<numberOfVolunteers; i++) {
	volunteersArray[i] = new person(
		prompt("Enter Name:", "Enter Volunteer's Name"),
		prompt("Enter Phone Number:", "Enter Volunteer's Phone Number"),
		prompt("Enter Street:", "Enter Volunteer's Street")
	);
	console.log(volunteersArray[i]);
};



// Display a list
var result="";

for (var i=0; i<numberOfVictims; i++) {
	result += "Victim " + (i+1) + ": " + 
		victimsArray[i].name + " " + 
		victimsArray[i].phone + " " + 
		victimsArray[i].street + "\n";	
}

for (var i=0; i<numberOfVolunteers; i++) {
	result += "Volunteer " + (i+1) + ": " +
	volunteersArray[i].name + " " + 
	volunteersArray[i].phone + " " + 
	volunteersArray[i].street + "\n";
	console.log(result);
}


alert(result);
console.log(result);