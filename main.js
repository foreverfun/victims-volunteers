//alert("main.js");

function person(name, phone, street) {
	this.name = name;
	this.phone = phone;
	this.street = street;
};

// ===============================================================
// get victims
// confirm

var moreVictims = true;
var victimsArray = [];
var i=0;

while (moreVictims) {		
	moreVictims = confirm("Click OK to Enter Victim Info");
	if (moreVictims === true) {
		victimsArray[i]= new person(
			prompt("Enter Name:", "Enter Victim's Name"), 
			prompt("Enter Phone Number", "Enter Victim's Phone Number"),
			prompt("Enter Street", "Enter Victim's Street")
			);
		i++;
	} else {
		break;
	}
};

// ===============================================================
// get volunteers
// confirm

var moreVolunteers = true;
var volunteersArray = [];
var counter = 0;

while (moreVolunteers) {
	moreVolunteers = confirm("Click OK to Enter Volunteer Info");
	if (moreVolunteers === true) {
		volunteersArray[counter]=new person(
			prompt("Enter Name:", "Enter Volunteer's Name"),
			prompt("Enter Phone Number:", "Enter Volunteer's Phone Number"),
			prompt("Enter Street:", "Enter Volunteer's Street")
			);
		counter++;
	} else {
		break;
	}
};

// Display a list
var result="";

for (var x=0; x<victimsArray.length; x++) {
	result += "Victim " + (x+1) + ": " + 
		victimsArray[x].name + " " + 
		victimsArray[x].phone + " " + 
		victimsArray[x].street + "\n";	
};

for (var y=0; y<volunteersArray.length; y++) {
	result += "Volunteer " + (y+1) + ": " +
	volunteersArray[y].name + " " + 
	volunteersArray[y].phone + " " + 
	volunteersArray[y].street + "\n";
};

alert(result);
//console.log(result);
