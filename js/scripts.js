$(document).ready(function() {
	var name, email, a1, a2,a3,q1,q2,q3, java,csharp, ruby,php,ui;
	$('.page1 button').click(function() {
		$('.page1').addClass('hide')
		$('.page2').removeClass('hide')
	})
	$('.page2 button').click(function() {
		name = $('input[name="userName"]').val();
		email = $('input[name="userEmail"]').val();
		if(name== '' || email == ''){
			$('.error').removeClass('hide');
		}else{
			$('.page2').addClass('hide')
			$('.page3').removeClass('hide')
		}
		

	})
	$('input').focus(function(){
		$('.error').addClass('hide');
	})
	$('.page3 button').click(function() {
		name = $('input[name="userName"]').val();
		email = $('input[name="userEmail"]').val();
		$('.page3').addClass('hide')
		$('.page4').removeClass('hide')

	})
	$('.page4 button').click(function() {
		name = $('input[name="userName"]').val();
		email = $('input[name="userEmail"]').val();
		$('.page4').addClass('hide')
		$('.page5').removeClass('hide')

	})
	$('.page5 button').click(function() {
		name = $('input[name="userName"]').val();
		email = $('input[name="userEmail"]').val();
		$('.page5').addClass('hide')
		$('.page6').removeClass('hide')

	})
	$('.page6 button').click(function() {
		name = $('input[name="userName"]').val();
		email = $('input[name="userEmail"]').val();
		$('.page6').addClass('hide')
		$('.page7').removeClass('hide')
		$('.page7 .header').prepend(`Hii ${name}`)

	})
	$('label').click(function(){ 
		if($(this).parent().attr('title') != 'true'){
			$(this).parent().attr('title', 'true');
			$(this).addClass('true');
			$(this.firstChild).css('background', '#00b3b4')

		}else {
			$(this).parent().attr('title', '');
			$(this).removeClass('true');
			$(this.firstChild).css('background', '#fff')
		}
		
	})

	$('.page3 button').click(function() {
		a1 = [false,false,false,false,false]
		q1 =$('.page3 .checkboxWrapper').children();
		for(var i=0; i < q1.length; i++){
			if($(q1[i]).attr("title") == 'true'){
				a1[i] = true;
			}
		}
	})
	$('.page4 button').click(function() {
		a2 = [false,false,false,false,false]
		q2 =$('.page4 .checkboxWrapper').children();

		for(var i=0; i < q2.length; i++){
			if($(q2[i]).attr("title") == 'true'){
				a2[i] = true;
			}
		}
	})
	$('.page5 button').click(function() {
		a3 = [false,false,false,false,false]
		q3 =$('.page5 .checkboxWrapper').children();
		for(var i=0; i < q3.length; i++){
			if($(q3[i]).attr("title") == 'true'){
				a3[i] = true;
			}
		}
		
	})
	$('.page6 button').click(function() {
		ruby = csharp = php =java= ui =false;
		a4 = [false,false,false,false,false]
		q4 =$('.page5 .checkboxWrapper').children();
		for(var i=0; i < q4.length; i++){
			if($(q4[i]).attr("title") == 'true'){
				a4[i] = true;
			}
		}
		if(a1[1]==true && a2[3] == true || a2[3] == true && a4[1]== true ){
			ruby = true;
			$('.ruby').removeClass('hide')
		}
		if(a1[0]==true && a2[1] == true  || a2[1] == true && a4[1]== true ){
			csharp = true;
			$('.net').removeClass('hide')
		}
		if(a1[2]==true && a2[4] == true || a2[4] == true && a4[1]== true ){
			php = true;
			$('.php').removeClass('hide')
		}
		if(a1[0]==true && a2[2] == true || a2[2] == true  && a4[1]== true ){
			java = true;
			$('.java').removeClass('hide')
		}
		if(a4[0]== true){
			ui = true;
			$('.ui').removeClass('hide')
		}
		if(ruby == false && ui == false && java == false && csharp == false){
			$('.page7 .errorMsg').removeClass('hide')
			$('.page7 .errorMsgP').removeClass('hide')
			$('.page7 .header').addClass('hide')
			$('.page7 .headerInfo').addClass('hide')
			$('.page7 .errorMsg').prepend(`Hey ${name}`)
		}
	})
});