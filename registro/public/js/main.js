
// ============================================= REGISTRO

$(function(){
    var $select = $(".1-100");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});




var step=1;


$(".btn_siguiente").click(function(event) {
		if (step===1) {
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
					});
				step+=1;
			}else if (step===2) {

				$(".step2").jAnimateOnce("fadeOutDown",function(){
					$(".step2").addClass('hidden');
					$(".step3").removeClass('hidden');

				

						$(".step1").jAnimateOnce("fadeInUp");
						$(".head_reg").jAnimateOnce("fadeIn");
				});


			}
	});
	





























// ========================================================================================== 