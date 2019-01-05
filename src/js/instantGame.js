var canvas = null;
var context = null;
var audio = null;
var offset = 0;
var scratchWidth = '400';
var scratchHeight = '750';
var coveredImage = 'https://dev.v8.palottery.state.pa.us/Custom/uploadedimages/WONKA_Cropped.jpg';
var uncoveredImage = 'https://dev.v8.palottery.state.pa.us/Custom/uploadedimages/WONKA_Cropped_Scratched.jpg';
var swfTicket = '';

window.onload = function () {
    init();
    if (isMobile.any()) {
        $('#instructions').html('Use your finger to Scratch For Fun and see an example of how this game is played. Scratch for Fun examples do not award prizes.');
    }                    
};

function init() {
    var imgAspectRatio = scratchHeight / scratchWidth;
    if ($(window).width() < 767) {
        var newWidth = (Math.round($('#ticket-display').width()) - 40);
        var newHeight = Math.round(newWidth * imgAspectRatio);
        scratchWidth = newWidth;
        scratchHeight = newHeight;
    } else {
        var newWidth = 400;
        var newHeight = Math.round(newWidth * imgAspectRatio);
        scratchWidth = newWidth;
        scratchHeight = newHeight;
    }

    $('#ticket-contain').html('<iframe seamless="seamless" scrolling="no" frameborder="0" width="' + scratchWidth + '" height="' + scratchHeight + '" src="https://' + location.hostname + '/Custom/uploadedfiles/ig-scratch/ScratchImage.aspx?id=2859"></iframe>');

    $('#ScratchTicketView').show();
    $('#ClassicTicketView').hide();
}

function initIE() {
    $('#ScratchTicketView').hide();
    $('#ClassicTicketView').show();
    $('#btn-covered-view').click(function () {
        $('.ticket-view').removeClass('on');
        $(this).addClass('on');
        $('#ig-scratched-image').hide();
        $('#ig-image').show();
    });
    $('#btn-uncovered-view').click(function () {
        $('.ticket-view').removeClass('on');
        $(this).addClass('on');
        $('#ig-image').hide();
        $('#ig-scratched-image').show();
    });
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    iPad: function () {
        return navigator.userAgent.match(/iPad/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
