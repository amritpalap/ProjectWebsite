var aboutpages = new Array();
var labelarr =new Array();
var xmlData;
var rowID; 
$(document).on("pagecreate", "#mainPage", function buildPage() 
{
	$.getJSON("JSON06-fitnessdefinitions.json", function(json){
		 labelarr = json.fitnessInfo.labelGroup;
		console.log(labelarr);
	for(var x = 0; x < labelarr.length; x++){
			$(".left").append("<a id ='"+x+"'  href='#popup' class='categoryBtns ui-btn ui-icon-"+labelarr[x].symbol+" ui-btn-icon-right' "+
				"data-rel='dialog' data-transition='pop'>"+
				labelarr[x].label+
			"</a>");
	
};
$(".categoryBtns").click(function(){
			clickId = this.id ;
			console.log(clickId);
			$("#popup div#divInfo ").html("");
			$("#popup h1").html(labelarr[clickId].label);
			$("div#divInfo").html("<p> <strong>characterization:</strong> "+labelarr[clickId].characterization+"</p> <br>"+
			"<p> <strong>Reference: </strong>"+labelarr[clickId].reference+"</p> <br>"+
			"<p> <strong>Reference URL: </strong> <a href='"+labelarr[clickId].referenceURL+"' > GotoWebsite<a></p>"			);
	});
});
});

$(document).on("pagecreate", "#mainPage", function buildPage() {	
 aboutpages = ["#aboutAmritpal", "#aboutJaskaran", "#aboutJamal"];
	$.getJSON("Info.json", function(json){
        console.log("lol");		
		console.log(json.memberinfo);
		for(var inc=0; inc<aboutpages.length;inc++){
		$(""+aboutpages[inc]+" section#information").append(
		"<p> Name : "+json.memberinfo[inc].Name+"</p><br>"+
		"<p> Student Number: "+json.memberinfo[inc].Number+"</p><br>"+
		"<p> Login : "+json.memberinfo[inc].Login_Name+"</p><br>"
		);
		$(""+aboutpages[inc]+" section#image").append(
		"<image width = '50%' height='50%' src ='root_images/"+json.memberinfo[inc].Image+"'></image>"
		);
		};
	});
});

$(document).on("pagecreate", "#mainPage", function () 
{
	
	console.log("in xmlCall");
	$.ajax({ 
		type:"GET", url:"Pharmaceutical.xml", dataType:"xml",
		success: function (xml) {
			buildBtn(xml); },
		error: function (e) {
			alert(e.status + "-" + e.statusText); }
	});
	
});

function buildBtn(xml) {
	xmlData = xml;
console.log("in builBtn");
		$("div #name").append(
		"<strong>Company Name:</strong>"+$(xml).find("companyname").text());
		$("div #number").append(
		"<strong>phone Number:</strong>"+$(xml).find("phoneNumber").text());
	
	$(xml).find("products").find("prd").each(function(n){
		$("ul#prdList").append(
			"<li li-id='" + n + "'>" +
				"<a href='#xmlpopup'class='ui-btn ui-icon-arrow-r  ui-btn-icon-right' data-rel='dialog' data-transition='pop'>" +
					$(this).find("name").text() +
				"</a>" +
			"</li>"
	);
	
});


}

$(document).on("click", "ul#prdList >li", function() {
	rowID = $(this).closest("li").attr("li-id");
});

$(document).on("pageshow", "#xmlpopup", function() {
	console.log("in pageshow for individual");
	buildind(xmlData, rowID);
});


function buildind(xml, choice) {
	console.log("in buildind");
	
	$("#name").html("<strong>Name:</strong>"+$(xml).find("name:nth(" + choice + ")").text());
	$("#brandName").html("<strong>Brand Name:</strong> "+$(xml).find("brandName:nth(" + choice + ")").text());
	$("#drugName").html( "<strong>Drug Name:</strong> "+$(xml).find("drugName:nth(" + choice + ")").text());
	$("#desc").html("<strong>Description:</strong> "+$(xml).find("desc:nth(" + choice + ")").text());
	$("#administered").html("<strong>Administered:</strong> "+$(xml).find("administered:nth(" + choice + ")").text());
	$("#contradication1").html("<strong>Contrandication:</strong>"+$(xml).find("contradication1:nth(" + choice + ")").text());
	
	
}


























