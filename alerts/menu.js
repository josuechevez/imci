$(document).ready(function () {

    let beat =0;
    $("#btn-menu").click(function (e) { 
        e.preventDefault();

        if( beat == 0){

            $(".menu").hide();
            beat = 1;
            
        }else{

            $(".menu").show();
            beat = 0;
        }


    });

});