$(function(){
    $(".humberger").click(function(){
        $(".rentagle1").toggleClass("rentagleClick1")
        $(".rentagle2").toggleClass("rentagleClick2")
        $(".rentagle3").toggleClass("rentagleClick3")
		$(".drawer").toggleClass('action');
		$(".humberger").toggleClass('action');
		$(".container").toggleClass('action');
		$(".container").toggleClass('overlay');
    }); 
});
