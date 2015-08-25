
var bio = {
	"name":"Andrey Semenov",
	"role":"Web developper",
	"welcomeMessage":"Hard worker",
	"contacts":{
		"email":"andrey.a.semenov@gmail.com",
		"twitter":"asemen",
		"mobile":"+971568561191",
		"location":"UAE",
		"github":"Semenka"
	},
	"skills": [
	"Python","JS","Artificial Intellegence"
	],

	"picture_url":"images/AS.jpeg"
};
var work={
	"jobs":[
		{
			"employer":"Total",
			"title":"Engineer",
			"location":"AbuDhabi",
			"dates":"01/05/2011-present",
			"description":"engineering of project subsurface part"
		}
	]
};

var education={
	"schools": [
		{"name":"MIPT",
		"major":"Molecual biology",
		"location":"Moscow",
		"degree":"BA",
		"dates":"01/09/2002-01/07/2004 ",
		"url":"https://mipt.ru"

		},
		{"name":"MIPT",
		"major":"Petroleum engineering",
		"location":"Moscow",
		"degree":"MA",
		"dates":"01/09/2004-01/07/2006 ",
		"url":"https://mipt.ru"
		}
	],
	"online cources":[
		{"title":"Artificial intellegince",
		"school":"Stanford",
		"dates":"01/09/2011-01/12/2011",
		"url":"https://www.udacity.com/course/viewer#!/c-cs373/l-48739381"
		}

	]
};
var projects={
	"projects":[
		{"title":"Field development",
		"dates":"01/10/2008-01/05/2011",
		"description":"Field development project",
		"images":[
				"images/rig.jpg",
				"images/pad.jpg"
				]

		}
	]
};
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);

//$("#header").append(HTMLcontactGeneric);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic=HTMLbioPic.replace("%data%",bio.picture_url);
$("#header").append(formattedPic);
var formattedMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);

if(bio.skills.length>0) {
 	$("#header").append(HTMLskillsStart);
 	for (skill in bio.skills){
 		var formattedSkill=HTMLskills.replace("%data%", bio.skills[skill]);
    	$("#skills").append(formattedSkill);
 	};
};

function displayWork(){
	for (job_id in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job_id].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job_id].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job_id].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job_id].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job_id].description);
		$(".work-entry:last").append(formattedDescription);
	};
}

//$(document).click(function(loc){
//	var x=loc.pageX;
//	var y=loc.pageY;
//	logClicks(x,y);
//});

displayWork();

projects.display=function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length>0) {
 			for (image in projects.projects[project].images){
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
 				};
		};
	};
};
projects.display();

education.display=function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		//$(".education-entry:last").append(education.schools[school].url);
	};

};

education.display();



//function inName(name){
//	var finalName = name;
//    var names = name.trim().split(" ");
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
//    return finalName;
//}
//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



