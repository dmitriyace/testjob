$(function() {
    

    var correct_email = false;
    var correct_ph = false;
    // $("#phone").mask("+7 (999) 999-99-99");
    $("#email").focusout(function (){
        check_email();
    });
    $("#phone").focusout(function (){
        check_phone();
    });

    function check_email() {

        let pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/i);
        // debugger;
        if(pattern.test($("#email").val())) {
            // $("#email").css('background-color', '#fff');

            correct_email = true;
        } else {
            // $("#email").css('background-color', '#e0115f');
            $('#email').addClass('animated shake').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                $(this).removeClass('animated shake')
            });
            correct_email = false;
        }

    }

    function check_phone(){
        let pattern = new RegExp(/^(((\+7))|(8))?( )?((\(\d{3}\))|((\ )?\d{3}(\ )?))?((-)|( ))?\d{3}((-)|( ))?\d{2}((-)|( ))?\d{2}$/g);

        if (pattern.test($('#phone').val())){
            correct_ph = true;
        } else {
            $('#phone').addClass('animated shake').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                $(this).removeClass('animated shake')
            });
            correct_ph = true;
        }
    }


    $("#frm").submit(function () {
        if (correct_email && correct_ph) return true;
        else return false;
    })
});
