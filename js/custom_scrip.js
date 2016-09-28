$(function(){

    $(".fa-search").click(function(){
        $("#search_input_box input").fadeIn();
    });

    var boxCssClass = "zen_card2 big_zen_card2";
    var currentNumOfBlocks = $("#div_center_zend_cards").children().length;
    var lastBlock = $("#div_center_zend_cards").children().length;
    //window.addEventListener('resize', function(){
        if (window.innerWidth > 1820) {
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                if (l >= 808 && l <= 811) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                 }
                 if (l >= 977 && l <= 982) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                 }
                 if (l >= 1144 && l <= 1152) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                 }
            }
        }
        if (window.innerWidth < 1815 && window.innerWidth > 1400)
        {
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                if (l >= 684 && l <= 690) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
                if (l >= 850 && l <= 856) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }
        if (window.innerWidth <= 1366 && window.innerWidth > 1245){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                if (l >= 775 && l <=780) { // 777
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
                if (l >= 608 && l <= 613) { // 610
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }
        if (window.innerWidth <= 1345 && window.innerWidth >= 1355){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                console.log(l);
                if (l >= 546 && l <= 551) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
                if (l >= 598 && l <= 605) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }

        if (window.innerWidth <= 1157){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                if (l >= 506 && l <= 551) {
                    $("#div_center_zend_cards").append('<div id="ett" class="zen_card2 big_zen_card2"></div>');
                    break;
                }
            }
        }

        if (window.innerWidth <= 1357) {
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock - 1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                console.log(l);
                if (l >= 605 && l <= 608) {
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }
    
        if (window.innerWidth <= 1450 && window.innerWidth > 1440){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                if (l >= 775 && l <=780) { // 777
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
                if (l >= 650 && l <= 655) { // 610
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }
    
        if (window.innerWidth <= 1306 && window.innerWidth > 1295){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                console.log(l);
                if (l >= 575 && l <=580) { // 777
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }
    
        if (window.innerWidth <= 1740 && window.innerWidth > 1734){
            for (var i = 0; i < currentNumOfBlocks; i++) {
                var zenObject = document.getElementsByClassName('big_zen_card');
                var myClient = $(zenObject)[i].getBoundingClientRect();
                var myClient2 = $(zenObject)[lastBlock-1].getBoundingClientRect();
                var l = Math.round(myClient2.left);
                console.log(l);
                if (l >= 1129 && l <=1134) { // 777
                    $("#div_center_zend_cards").append('<div id="ett" class="'+boxCssClass+'"></div>');
                    break;
                }
            }
        }

            //}, true);




});