

$(function() {


function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2015, 8, 27);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(
	document.getElementById("days"),
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds"));



	$('#show').html('Показать текст полностью...');

$('#show').on('click', function(e){
  e.preventDefault();
  
  var
    $this = $(this),
    content = $('#block');  
  
  
  if(!$this.hasClass('trigger')){
    $this.addClass('trigger');
    $this.html('Скрыть текст');
    
    content.slideDown();
  } else {
    $this.removeClass('trigger');
    $this.html('Показать текст полностью...');
    
    content.slideUp();
  }
});

$(".popup").magnificPopup();

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


var accordion = function(){
  var data = $('.accordion').attr('data-accordion')
  
  $('.accordion-header').on('click', function(){
  	    $(this).next('.accordion-body').not(':animated').slideToggle()
  })
}

accordion();

	var owl =$(".slider");

$("#slider_container").owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        }
    },
    navText : ""

});	
		
	
$("#slider_container2").owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:4,
            nav:true   
        }
    },
    navText : ""

});	




$(".nav_blogs .tab").click(function() {
	$(".nav_blogs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".nav_blogs .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


