$(document).on("pagecreate", "#mainPage", function buildPage() {
	$.getJSON("a3_FoodGroups.json", function(json){
		FoodgroupArray = json.Foodgroups.groups ;
		$("#mainSection").html("<p id='categoryButton'></p>");
		for(var a = 0; a < FoodgroupArray.length; a++){
			$("#categoryButton").append("<a id ='"+a+"'  href='#popup' class='categoryBtns ui-btn ui-icon-"+FoodgroupArray[a].groupImage+" ui-btn-icon-right' "+
				"data-rel='dialog' data-transition='pop'>"+
				FoodgroupArray[a].groupName+
			"</a>");
			var b= a+1;
		$("#formPage select").append("<option id ='"+b+"'>"+
				FoodgroupArray[a].groupName +
			"</option>");
};
$("#mainPage h1").append(json.Foodgroups['publisher-group']);
		$("#mainPage header").append("<image id='headerImage' height='500px' width='100%' src='root_images/"+json.Foodgroups.HeaderImage+"'>");
$("#categoryButton").append("<a href='#formPage' 		 		 id='formBtn' class='ui-btn'>Survey</a><br>");
$("#categoryButton").append("<a href='#loadDataPage' id='loadBtn' class='ui-btn' data-rel='dialog' data-transition='pop'>Load data</a>");
		
		$(".categoryBtns").click(function(){
			clickId = this.id ;
			console.log(clickId);
			$("#popup div#divDescription table").html("");
			$("#popup h1").html(FoodgroupArray[clickId].groupName);
			$("#popup h5").html("Directions: "+FoodgroupArray[clickId].Directions);
			$("#popup div#divDescription table").html("<th id = 'fgID' >FG ID</th>");
			$("#popup div#divDescription table").append("<th id = 'gender' >Gender</th>");
			$("#popup div#divDescription table ").append("<th id = 'age' >Age</th>");
			$("#popup div#divDescription table").append("<th id = 'servSize' >Serving Size</th>");
			servingsArray = json.Foodgroups.groups[clickId].Servings;
			
			for(var x = 0; x < servingsArray.length; x++){
				$("#popup table").append("<tr id='"+x+"'></tr>");
				$("#popup table #"+x+"").append("<td>"+servingsArray[x].fgID+"</td>");
				$("#popup table #"+x+"").append("<td>"+servingsArray[x].gender+"</td>");
				$("#popup table #"+x+"").append("<td>"+servingsArray[x].ages+"</td>");
				$("#popup table #"+x+"").append("<td>"+servingsArray[x].servingSize+"</td>");
			}
		});
		
		$("#submitBtn").click(function(){
			var catagoryValue = document.getElementById("category").value;
			localStorage.clear();
			localStorage.setItem("email", 
							$("#emailform").val());
			if(catagoryValue != "Select a Category"){
				localStorage.setItem("selectCategory",
							$("#category").val());
			}
			else{
				localStorage.setItem("selectCategory", 
							"Null");
			}
			localStorage.setItem("comment", 
							$("#comment").val());
			if($('input[name="citizenCheckbox"]').is(':checked')){
				localStorage.setItem("canadaCitizen","Yes");	
			}
			else{
				localStorage.setItem("canadaCitizen","No");
			}
			if($('input[name="seniorCitizenCheckbox"').is(':checked')){
			localStorage.setItem("seniorCitizen","Yes");	
			}
			else{
			localStorage.setItem("seniorCitizen","No");	
			}
			alert("Data SAVED");
			
		});
			$("#loadBtn").click(function(){
			$("#emailLoad").val(localStorage.getItem("email"));
			$("#categoryLoad").val(localStorage.getItem("selectCategory"));
			$("#questionLoad").val(localStorage.getItem("comment"));
			$("#canadacitizenLoad").val(localStorage.getItem("canadaCitizen"));
			$("#seniorCitizenLoad").val(localStorage.getItem("seniorCitizen"));
		});
});
});

$(document).on("pagecreate", "#mainPage", function buildPage() {
	
	$.getJSON("Info.json", function(json){
		console.log(json);
		$("#aboutPage section#information").append(
		"<p> Name : "+json.information.Name+"</p><br>"+
		"<p> Student Number: "+json.information.Number+"</p><br>"+
		"<p> Program : "+json.information.Program+"</p><br>"+
		"<p> Quote : "+json.information.Quote+"</p><br>"
		);
		$("#aboutPage section#image").append(
		"<image width = '50%' height='50%' src ='root_images/"+json.information.Image+"'></image>"
		);
	});
});

