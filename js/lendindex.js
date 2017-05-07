    //==>rem布局
    ~(function () {
        function layoutInit() {
            var desW = 750,
                winW = $(window).width();
            $(document.documentElement).css("fontSize", winW / desW * 100);
        }
        layoutInit();
        window.onresize = layoutInit;
    })();
    
    
    
    

    
    
    
    
    
    
    







