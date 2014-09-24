$(document).ready(function() {
    var score = 0;
    $('#start').click(function() {
        $(this).fadeOut();
        $('.score').show();
        generateLetters();

        var seconde = 500;
        function timer(){
            setTimeout(timer, 1000);
            $('.countdown').html(seconde);
            seconde--;
            if (seconde<0) {
                seconde = 0;
                $('.countdown').html('cest finit');
                var url = "http://www.google.fr";
                $(location).attr('href', url);
            }
        }
        timer();
    });

    $(document).keypress(function(event) {
        var keycode = String.fromCharCode(event.which);
        $('.letter'+keycode).animate({ "top" : "20px", "opacity" : 0 }, "fast");
        $('.letter'+keycode).fadeOut('slow').hide('slow', function() {
            score +=5;
            $('.score .nb').html(score);
            $(this).remove();
        });

    });

    function generateLetters() {
        var color = generateColor();
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var string_length = 1;
        var randomstring = '';

        for (var i = 0; i<string_length; i++) {
            var num = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(num, num+1);
        }

        var top = Math.floor(Math.random() * 400);
        var left = Math.floor(Math.random() * 700);

        $('.main').append(
            '<div class="letter letter' + randomstring +'" style="left:' + left +'px;' + ' top:' + top + 'px;' + ' background-color:#' + color +';">' + randomstring + '</div>'
        );
        setTimeout(generateLetters, 1000)
    }

    function generateColor() {
        var color = '';
        var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4','5', '6', '7', '8', '9', '0'];

        for (j = 0; j < 6; j++) {
            letter = Math.floor(Math.random() * 10);
            color += values[letter];
            console.log()
        }
        return color;

    }

});
