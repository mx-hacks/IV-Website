
//============================================  GET THE MAIL
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}



//============================================  SEND DATA
var mail = $.urlParam('mail');
var name;
var lastn;
var edad;
var male;
var female;
var telefono;
var uni;
var idu;
var campus;
var inicio;
var fin;
var nivel;
var carrera;

var experience;
var selected_id;
var accept;
var variable_var

var	size = "";
var	food = "";

var mxHackatons = "";
var hackatons = "";

//============================================  GRADE

	   					 $.ajax({

					        url: 'https://api.mxhacks.mx/hackers/levels/',
					        type: 'GET',
					        success: function (res) {
					            console.log('levels'+res);


						            $.each(res, function( index, value ) {

									  $(".nivel").append('<option value="'+value+'">'+value+'</option>');
									});

					        },
					        error: function (res) {
					            console.log(res);

					        }
					    });



//============================================  School list
var schools;

	   					 $.ajax({

					        url: 'https://api.mxhacks.mx/hackers/schools/',
					        type: 'GET',
					        success: function (res) {
					            console.log(res);


						            $.each(res, function( index, value ) {

									  $(".uni").append('<option value="'+value.id+'">'+value.name+'</option>');
									});

					        },
					        error: function (res) {
					            console.log(res);

					        }
					    });




		$('.uni').change(function () {

				uni = $(".uni").val();


			   				$.ajax({
					        url: 'https://api.mxhacks.mx/hackers/schools/'+uni+'/campus/',
					        type: 'GET',
					        success: function (res) {
					            console.log(res);

					            	if (res== "") {
					            		$(".campus").html("");
											$(".campus").append('<option value="0">----</option>');
											$(".campus").attr('disabled', 'disabled');
					            	 }else{
					            		// $(".campus").removeClass('hidden');
					            		// $(".campus_txt").addClass('hidden');
					            		// $(".campus").jAnimateOnce("rubberBand");
					            		$(".campus").html("");
							            $.each(res, function( index, value ) {
							            	$(".campus").append('<option value="'+value.id+'">'+value.name+'</option>');

										});

						            }


					        },
					        error: function (res) {

					    			escuelaNueva(uni);

					        }
					    });

});


$('.campus').focusout(function () {

		retrieveCampus();

});




function escuelaNueva(data){


	   					 $.ajax({

					        url: 'https://api.mxhacks.mx/hackers/schools/',
					        type: 'POST',
					        data:{
					        	name:uni
					        },
					        success: function (res) {
					            console.log(res.id);
					            uni=res.id;
					            variable_var=uni;

					        },
					        error: function (res) {
					            console.log(res);

					        }
					    });

}


//=============================================  Acept


$(".final_check").click(function(event) {
	accept = $(this).find("input").is(":checked")
	console.log(accept);
});






//============================================ MAIL PRINT

var themail = $.urlParam('mail').split("@");
var themail = themail[0];
$("#themail").html(themail);






// ============================================= REGISTRO

$(function(){
    var $select = $(".1-100");
    for (i=14;i<=80;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});




var step=1;

$(".btn_siguiente").click(function(event) {
	switch (step) {
		case 1:
			step1();
			break;
		case 2:
			step2();
			break;
		case 3:
			step3();
			break;
		default:
	}
});

function animate1(){
	$(".process").jAnimateOnce("fadeOut",function(){
		$(".process div").removeClass('pro_nice');
		$(".process .dos").addClass('pro_nice');
	});

	$(".step1").jAnimateOnce("fadeOutDown",function(){
		$(".step1").addClass('hidden');
		$(".step2").removeClass('hidden');



			$(".step2").jAnimateOnce("fadeInUp");
			$(".head_reg").jAnimateOnce("fadeIn");
	});

	$(".content_reg2").animate({
		height: 0,
		padding:0},
		1000,function(){
			$(".content_reg2").addClass('hidden');
			$(".message").css({
				color: 'aliceblue',
				background: '#222222'
			});

		});

	step+=1;
}

function animate2() {
	$(".process div").removeClass('pro_nice');
			$(".process .tres").addClass('pro_nice');

	$(".step2").jAnimateOnce("fadeOut",function(){
		$(".step2").addClass('hidden');
		$(".step3").removeClass('hidden');
		$(".step3").jAnimateOnce("fadeIn");



			$(".step1").jAnimateOnce("fadeInUp");
			$(".head_reg").jAnimateOnce("fadeIn");
	});

	step+=1;
}

function animate3(){
	$(".process .uno").addClass('pro_nice');
	$(".process .dos").addClass('pro_nice');
	$(".step3").jAnimateOnce("fadeOut",function(){
		$(".step3").addClass('hidden');
		$(".step4").removeClass('hidden');
	$(".step4").jAnimateOnce("fadeIn");
	$(".conten_reg").jAnimateOnce("fadeIn");
	});
	$(".message").remove();

	$(".inst").jAnimateOnce("fadeOut",function(){
		$(".step4").removeClass('hidden');
	});

	$(".exclam").jAnimateOnce("fadeOut",function(){
		$(".exclam").addClass('hidden');
	});
	$(".btn_siguiente").jAnimateOnce("fadeOut",function(){
		$(".btn_siguiente").addClass('hidden');
	});
}

function step1(){

	name = $(".name").val();
	lastn = $(".lastn").val();
	edad = $(".edad").val();
	genero = $(".genero").val();
	telefono = $(".telefono").val();
	if (genero== "masculino" ) { male=true; female=false; }else{female=true; male=false;}
	pais = $(".pais").val();
	estado = $(".estado").val();
	//-------------------------
	// uni = selected_id
	idu = $(".idu").val();
	// campus = campus
	inicio = $(".inicio").val();
	fin = $(".fin").val();
	nivel = $(".nivel").val();
	carrera = $(".carrera").val();


  //
	if (name == "") {
	  	$(".message div").html("Te falto el nombre");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(lastn == ""){
		$(".message div").html("Te falta el apellido");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(edad == "--"){
		$(".message div").html("Te falta la edad");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(genero == "--"){
		$(".message div").html("Te falta el género");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(telefono == ""){
		$(".message div").html("Te falta tu teléfono");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(telefono.length < 8 || telefono.length > 15){
		$(".message div").html("Tu teléfono esta mal");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(estado == ""){
		$(".message div").html("Tu estado esta mal");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(pais == ""){
		$(".message div").html("Tu país esta mal");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(uni == ""){
		$(".message div").html("Te falta la escuela");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(idu == ""){
		$(".message div").html("Te falta tu id");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(campus == ""){
		$(".message div").html("Te falta el campus");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(inicio == "--"){
		$(".message div").html("Te falta cuando iniciaste");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(fin == "--"){
		$(".message div").html("Te falta cuando vas a terminar la escuela");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(nivel == ""){
		$(".message div").html("Te falta en que grado estas estudiando");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(carrera == ""){
		$(".message div").html("Te falta tu carrera");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}
	  else{
		 $(".message div").empty();
		 	//---------------------------------------
			var personalData = {
				first_name: name,
				last_name: lastn,
				age:edad,
				male:male,
				female:female,
				phone_number:telefono,
				state:estado,
				country:pais
			};
			var schoolData = {
				school: uni,
				campus: campus,
				school_join_year:inicio,
				school_identification:idu,
				school_graduation_year:fin,
				education_level:nivel,
				major:carrera
			};

			putData(personalData, 1, function() {
				putData(schoolData, 1.1, function() {
					console.log("cool steped");
					animate1();
				});
			});

	  }

}

//==================== step2

function step2(){
	var	specials=$(".specs").val();
	if (size== "" || food === "") {

	 	$(".message div").html("Revisa de nuevo el formulario");
	 	$(".message div").jAnimateOnce("fadeInUp");
	 	return false;
	}else{
		$(".message div").empty();

		var sizeFoodObj = {
			tshirt_size:size,
			dietary_restrictions:specials
		};

		putData(sizeFoodObj, 2, function() {
			animate2();
		});
	}

}


function step3(){

	if (accept==true) {
		var hackatonsPendant = [];

		hackTags.find(".tagit-label").each(function(index) {
			var name = $(this).html();
			for (var i = 0; i < api_hackathonsId.length; i++) {
				if( name.replace(/\s+/g, '') == api_hackathonsId[i].name.replace(/\s+/g, '') ) {
					hackatons += api_hackathonsId[i].id;
				} else {
					hackatonsPendant.push(name);
				}
			}
		});

		var hackathonsObj = {
				hackathons: hackatons
		};

		var mxhackathonsObj = {
				events: mxHackatons
		};

		var experienceObj = {
			first_time_hacker:experience,
			currently_working:worky
		};

		if (hackatons.length == 0 && mxHackatons.length == 0){
			experienceObj.first_time_hacker = true;
		}

		//putData(hackathonsObj, 3, function() {
			//putData(mxhackathonsObj, 4, function() {
				putData(experienceObj, 5, function() {
					putData({}, 6, function(){
						animate3();
					});
				});
			//});
		//});


		//sendHacks();

	} else{
		$(".message div").html("Acepta el codigo de conducta");
		$(".message div").jAnimateOnce("fadeInUp");
	}

}




// ================================================   switchers

$(".size .circle").click(function(){
	$(".size .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');
	size=$(this).attr('size');
	console.log(size);

});



$(".love .circle").click(function(){
	$(".love .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');
	$(".specs").jAnimateOnce("jello");


	food=$(this).attr('spec');
	console.log(food);

	if (food=="no") {
		$(".specs").attr("disabled","disabled");
		$(".specs").val("");
		$(".specs").css('opacity', '.5');
	}else{
		$(".specs").css('opacity', '1');
		$(".specs").removeAttr('disabled');
	}


});

flag_hack=0;

$(".l_1 .circle").click(function(){
	$(".l_1 .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');
	experience=$(this).attr('ex');
				if (flag_hack==0) {
				$(".hackton").removeClass('hidden');
				$(".hackton").jAnimateOnce("rubberBand");
}else if (flag_hack == 1) {
	$(".hackton").jAnimateOnce("fadeOut",function(){
			$(".hackton").addClass('hidden');
	});
}

});



	$(".non").click(function(event) {

	$(".edic .circle").removeClass('pro_nice');

	});
var hack_number

	$(".h1, .h2, .h3").click(function(event) {

		$(this).addClass('pro_nice');
			hack_number=$(this).attr('hacks');

		if (hack_number==0) {
			mxHackatons= "";
		}else if(hack_number==1 ){
			mxHackatons+="1";
		}else if(hack_number==2 ){
			mxHackatons+="2";
		}else if(hack_number==3 ){
			mxHackatons+="3";
		}

	});




$(".work .circle").click(function(){
	$(".work .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');

	var h_number=$(this).attr('work');
	worky=$(this).attr('work');
	if (worky=="true") {worky=true;}
	if (worky=="false") {worky=false;}
	// hackatons = jQuery.grep(hackatons, function(value) {
	//   return value != h_number;
	// });


});









// GET Hackathons
var hacks_url = 'https://api.mxhacks.mx/hackers/hackathons/',
    api_hackathons = [],
    api_hackathonsId = [],
    new_hacks = [],
    hackTags = $('#hackTags');

$.get(hacks_url, function(data) {})
    .done(function(data) {
        for (hackathon in data){
					api_hackathons.push(data[hackathon].name);
					api_hackathonsId.push({"id": data[hackathon].id, "name": data[hackathon].name});
				}
    })
    .fail(function() {
    });

var sendHacks = function () {
	new_hacks.forEach(function (hackathon) {
        $.ajax({
            url: hacks_url,
            method: 'POST',
            data: {name: hackathon},
            success: function (response) {
            },

            error: function (response) {
                console.log(response);
            }
    	});
	});
};

hackTags.tagit({
    availableTags: api_hackathons,
    afterTagAdded: function(evt, ui) {

        if($.inArray(ui.tagLabel, api_hackathons) === -1)
            new_hacks.push(ui.tagLabel);
    },
    afterTagRemoved: function(evt, ui) {

        if($.inArray(ui.tagLabel, new_hacks) != -1)
            new_hacks.splice($.inArray(ui.tagLabel, new_hacks),1);
    },
});

$('#hackTags').tagit({
    availableTags: api_hackathons,
    allowSpaces: true
});

// GET Schools

var schools_url = 'https://api.mxhacks.mx/hackers/schools/',
	selected_id,
    api_schools = [],
    school_id = [],
    new_shools = [];

$.get(schools_url, function(data) {})
    .done(function(data) {
        for (school in data) {
            api_schools.push(data[school].name);
            school_id.push(data[school].id);
        }

    })
    .fail(function() {
    });

var sendHacks = function () {
	new_shools.forEach(function (school) {
        $.ajax({
            url: schools_url,
            method: 'POST',
            data: {name: school},
            success: function (response) {
            },

            error: function (response) {
                console.log(response);
            }
    	});
	});
};

$("#school_list").autocomplete({
  source: api_schools
});

$("#school_list").focusout(function () {
	selected_id = $.inArray($("#school_list").val(), api_schools);
	$('#campus_list').attr('school', school_id[selected_id]);
	variable_var=school_id[selected_id];
});




$('#campus_list').focus(function () {
	uni=variable_var;
	campus_url = 'https://api.mxhacks.mx/hackers/schools/'+ uni +'/campus/',
    api_campus = [],
    new_campus = [],
    campus_ids_list = [];


	$.get(campus_url, function() {})
	    .done(function(data) {
	        for (campus in data) {
	            api_campus.push(data[campus].name);
	            campus_ids_list.push(data[campus].id);

	        }
	    })
	    .fail(function() {
	    });

	$("#campus_list").autocomplete({
		source: api_campus
	});

});

var retrieveCampus = function () {

	var campus_index = $.inArray($("#campus_list").val(), api_campus);
	if (campus_index < 0) {
		$.ajax({
			url: campus_url,
			method: 'POST',
			data: {name: $('#campus_list').val()},
			success: function (response) {
				console.log('****************************************************');
				console.log('Este es el campus ID que tienes que mandar NUEVO');
				console.log(response.id);
				campus=response.id;
				console.log('****************************************************');
			}
		});
	} else {
		console.log('****************************************************');
		console.log('Este es el campus ID que tienes que mandar');
		console.log(campus_ids_list[campus_index]);
		campus=campus_ids_list[campus_index];
		console.log('****************************************************');
	}

};



// ==========================================================================================



function putData(obj, step, callback) {
	var endpointUrl = "https://api.mxhacks.mx/applications/"+mail;
	switch (step) {
		case 1:
			endpointUrl = endpointUrl + "/personal/";
			break;
		case 1.1:
			endpointUrl = endpointUrl + "/education/";
			break;
		case 2:
			endpointUrl = endpointUrl +'/goodies/';
			break;
		case 3:
			endpointUrl = endpointUrl + '/hackathons/';
			break;
		case 4:
		endpointUrl = endpointUrl + '/events/';
			break;
		case 5:
		 	endpointUrl = endpointUrl + '/experience/';
		break
		default:
			endpointUrl = endpointUrl + '/finish/';
		break;
	}

	$.ajax({
			url: endpointUrl,
			type: 'PUT',
			data: obj ,
			success: function (res) {
					console.log(res);
					callback();
			},
			error: function (res) {
				$(".message div").html("Revisa de nuevo el formulario");
				$(".message div").jAnimateOnce("fadeInUp");
			}
	});


}
