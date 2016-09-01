


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
var hackatons;

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

						            $.each(res, function( index, value ) {
						            	$(".campus").append('<option value="'+value.id+'">'+value.name+'</option>');
									  
									});
					        
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });

});


//============================================ 

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
		if (step===1) {

				if (step1() === true) {
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


			}else if (step===2) {

				if(step2() == true){
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

			}else if (step===3){

						step3();

							$(".process .uno").addClass('pro_nice');
							$(".process .dos").addClass('pro_nice');
							$(".step3").jAnimateOnce("fadeOut",function(){
								$(".step3").addClass('hidden');
								$(".step4").removeClass('hidden');
							$(".step4").jAnimateOnce("fadeIn");
							$(".conten_reg").jAnimateOnce("fadeIn");
							});


							$(".inst").jAnimateOnce("fadeOut",function(){
								$(".step4").removeClass('hidden');
							});

							$(".exclam").jAnimateOnce("fadeOut",function(){
								$(".exclam").addClass('hidden');
							});
							$(".btn_siguiente").jAnimateOnce("fadeOut",function(){
								$(".btn_siguiente").addClass('hidden');
							});



				console.log("terminaste");

				


			}
	});
	



function step1(){

	name = $(".name").val();
	lastn = $(".lastn").val();
	edad = $(".edad").val();
	genero = $(".genero").val();
	telefono = $(".telefono").val();
	if (genero== "masculino" ) { male=true; female=false; }else{female=true; male=false;}
	//-------------------------
	
	idu = $(".idu").val();
	campus = $(".campus").val();
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
	}else if(uni == "--"){
		$(".message div").html("Te falta la escuela");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(idu == ""){
		$(".message div").html("Te falta tu id");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(campus == ""){
		$(".message div").html("Te falta el campus");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(inicio == ""){
		$(".message div").html("Te falta cuando iniciaste");
	  	$(".message div").jAnimateOnce("fadeInUp");
	}else if(fin == ""){
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

		 	f1=false;
		 	f2=false;
			
		 	//---------------------------------------

					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/personal/',
					        type: 'PUT',
					        data: { 
					        	first_name: name,
					        	last_name: lastn,
					        	age:edad,
					        	male:male,
					        	female:female,
					        	phone_number:telefono,
					        } ,
					        success: function (res) {
					            console.log(res);
					            console.log("f1");
					            f1=true;
					        },
					        error: function (res) {
					            console.log(res);
					            
					            
					        }
					    }); 

			//-----------------------------------------

					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/education/',
					        type: 'PUT',
					        data: { 
					        	school: uni,
					        	campus: campus,
					        	school_join_year:inicio,
					        	school_identification:idu,
					        	school_graduation_year:fin,
					        	education_level:nivel,
					        	major:carrera
					        } ,
					        success: function (res) {
					            console.log(res);
					            console.log("f2");
					            
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });

			//-----------------------------------------



		 	if (f1=true && f2==true) {return true}else{

					$(".message div").html("Revisa de nuevo el formulario");
				  	$(".message div").jAnimateOnce("fadeInUp");	

		 	}

		 	return true;


		 

	  }


}

//==================== step2 

var	size="";
var	food="";


function step2(){
	var	specials=$(".specs").val();
	if (size== "" || food === "") {
		
	 	$(".message div").html("Revisa de nuevo el formulario");
	 	$(".message div").jAnimateOnce("fadeInUp");
	 	console.log("mal");
	 	return false;
	}else{
		$(".message div").empty();

		
			//-----------------------------------------
					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/goodies/',
					        type: 'PUT',
					        data: { 
					        	tshirt_size:size,
					        	dietary_restrictions:specials,
					        } ,
					        success: function (res) {
					            console.log(res);
					            console.log("f2");
					            
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });

			//-----------------------------------------





		return true;
	}

}


function step3(){



					//-----------------------------------------

					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/experience/',
					        type: 'PUT',
					        data: { 
					        	first_time_hacker:experience
					        } ,
					        success: function (res) {
					            console.log(res);
					            
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });


					  //-----------------------------------------

					//-----------------------------------------


				
					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/events/',
					        type: 'POST',
					        data: {
					        	events: hackatons
					        } ,
					        success: function (res) {
					            console.log(res);
					            
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });


					  //-----------------------------------------

					  // //-----------------------------------------

					    $.ajax({
					        url: 'https://api.mxhacks.mx/applications/'+mail+'/finish/',
					        type: 'PUT',
					        success: function (res) {
					            console.log(res);
					            
					        },
					        error: function (res) {
					            console.log(res);
					            
					        }
					    });


					  // //-----------------------------------------




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



$(".l_1 .circle").click(function(){
	$(".l_1 .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');
	experience=$(this).attr('ex');
});


$(".edic .circle").click(function(){
	$(".edic .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');
	hackatons=$(this).attr('hacks');


});


$(".work .circle").click(function(){
	$(".work .circle").removeClass('pro_nice');
	$(this).addClass('pro_nice');


});


















// ========================================================================================== 