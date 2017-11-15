(function($){
    
    'use strict';
    
    //------------------------------------- Smoth Scroll ------------------------------------------------//
    
    $('a[href*=#]:not([href=#])').click(function(){
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    //------------------------------------- End Smoth Scroll ------------------------------------------------//
    
    
    
    //------------------------------------- Scroll Spy Setup ------------------------------------------------//
   
    var lastId,
        topMenu = $("ul.labs-menu"),
       
        menuItems = topMenu.find("a"),
        
        scrollItems = menuItems.map(function(){
            
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
            
        });

    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top + 10;
        
        $('html, body').stop().animate({ 
            
            scrollTop: offsetTop
            
        }, 900);
        e.preventDefault();
        
        return false;
    });

    $(window).scroll(function(){

        var fromTop = $(this).scrollTop();
 
        var cur = scrollItems.map(function(){
            
            if ($(this).offset().top < fromTop)
            return this;
            
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
    
        if (lastId !== id) {
            lastId = id;

            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    
    //------------------------------------- End Scroll Spy Setup ------------------------------------------------//
    
})(jQuery);