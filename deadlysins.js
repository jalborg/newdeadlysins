

$(document).ready(function(){ 


    jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    return this;
}

//Creating vars for blue overlay and explanation (definition of the word)

var $overlay =$('<div id="overlay"></div>');
var $explanation = $("<p></p>");

//Add explanation of word to overlay
$overlay.append($explanation);

//Add overlay to body
$("body").append($overlay);

var $overview =$('<img id="overview" src="Overview.jpg">');

$("body").append($overview);


$("p.showbadbars").click(function() {
$("img.bar").fadeIn("slow");
});

//On click on the comparison text, show overview image
$("p.comparegood").click(function() {
$overview.css("margin-top", "0px");
$overview.show();
});

$("p.compare").click(function() {
$overview.css("margin-top", "2700px");
$overview.show();
});
//Function for what happens when user clicks on one of the good words

$overview.click(function(){
$overview.hide();
});

$("p.goodword").click(function() {
//Show explanation text in overlay
var explanationText = $(this).next().html();
$explanation.html(explanationText);
$explanation.show();
$overview.hide();
//Position the text on the right place

$explanation.center();
//Show overlay
$overlay.show();
});


//Function for what happens when user clicks on one of the good words
$("p.badword").click(function() {
//Show explanation text in overlay
var explanationText = $(this).next().html();
$explanation.html(explanationText);
$explanation.show();
$overview.hide();
//Position the text on the right place
$explanation.center();
//Show overlay
$overlay.show();
});

//Hide the overlay on click
$overlay.click(function(){
$overlay.hide();
});


//For the scrolling

    $("html, body").animate({ scrollTop: $('h1#firstline').offset().top });
    
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 2700; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgb(245,247,249)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(28,34,58)' ); ;//what color we want to use in the end
    
    var arrowUp = $('.arrowUp');
    var arrowDown = $('.arrowDown');

    function blink() {
        arrowUp.animate({opacity:'1'}, 1500);
        arrowUp.animate({opacity:'0.2'}, 1500, blink);
        arrowDown.animate({opacity:'1'}, 1500);
        arrowDown.animate({opacity:'0.2'}, 1500, blink);
    }
    //** make intro text fade in onload
    blink();

 

    $(document).scroll(function() {

        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('body').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});

    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    

    
});





