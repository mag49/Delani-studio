$(document).ready(function () {
    $(".info1").hide();
    $('.design').click(function () {
        $('.info1').toggle();
        $('#img1').toggle();

    });
    $
});

$(document).ready(function () {
    $('.info2').hide();
    $('.develop').click(function () {
        $('.info2').toggle();
        $('#img2').toggle();

    });
    $
});

$(document).ready(function () {
    $('.info3').hide();
    $('.product').click(function () {
        $('.info3').toggle();
        $('#img3').toggle();

    });
    $

});
$(document).ready(function () {
    $("#proj1").hover(function () {
        $("#text1").toggle("slow");
    })
    $("#proj2").hover(function () {
        $("#text2").toggle("slow");
    })
    $("#proj3").hover(function () {
        $("#text3").toggle("slow");
    })
    $("#proj4").hover(function () {
        $("#text4").toggle("slow");
    })
    $("#proj5").hover(function () {
        $("#text5").toggle("slow");
    })
    $("#proj6").hover(function () {
        $("#text6").toggle("slow");
    })
    $("#proj7").hover(function () {
        $("#text7").toggle("slow");
    })
    $("#proj8").hover(function () {
        $("#text8").toggle("slow");
    })


});

function validateForm() {
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").Value;
    var message = document.getElementById("message").Value;
    if (name == "" || email == "" || message == "") {
        alert("wrong info");
    }
    else {
        alert("Thank you for contacting us.we have recieved your message")
    }
}
