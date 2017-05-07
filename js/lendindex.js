//==>rem布局
function layoutInit() {
    var desW = 750,
        winW = document.documentElement.clientWidth||document.body.clientWidth;
    document.documentElement.style.fontSize=winW / desW * 100+"px";
}
layoutInit();
window.onresize = layoutInit;

    
    
    
    

    
    
    
    
    
    
    







