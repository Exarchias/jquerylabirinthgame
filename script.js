$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            case 65:
                $('img').animate({left: "-=10px", right: "-=10px"}, 15);
                break;
            case 83:
                $('img').animate({top: "+=10px",bottom: "+=10px"}, 15);
                break;
            case 87:
                $('img').animate({bottom: "-=10px",top:"-=10px"}, 15);
                break;
            case 68:
                $('img').animate({right: "+=10px", left: "+=10px"}, 15);
                break;
            default:
                break;
        }
    });
});
