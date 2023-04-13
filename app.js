$(document).ready(function () {
    const $tabContents = $('.tab-content');
    const $tab = $('ul.tabs li');
    const $icon = $('.icon_tab');

    $tab.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tab.removeClass('current');
        $tabContents.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        nextButtonDisable();
        prevButtonDisable();
    });

    $icon.click(function () {
        $icon.removeClass('active');
        $(this).addClass('active');
    });

    if ($('.current').hasClass('first')) {
        $('.prev-button').prop('disabled', true);
    }

    $('.next-button').click(function () {
        const nextTab = $('.tab-content.current').next('.tab-content');
        const nextIcon = $('.icon_tab.active').next('.icon_tab');

        if (nextTab.length == 1) {
            $('.tab-content').removeClass('current');
            nextTab.addClass('current');

            $('.icon_tab').removeClass('active');
            nextIcon.addClass('active');
        }
        nextButtonDisable();
    });

    $('.prev-button').click(function () {
        const prevTab = $('.tab-content.current').prev('.tab-content');
        const prevIcon = $('.icon_tab.active').prev('.icon_tab');

        if (prevTab.length == 1) {
            $('.tab-content').removeClass('current');
            prevTab.addClass('current');

            $('.icon_tab').removeClass('active');
            prevIcon.addClass('active');
        }
        prevButtonDisable();
    });
});

function nextButtonDisable() {
    if ($('.current').hasClass("last")) {
        $('.next-button').prop('disabled', $('.current').hasClass('last'));
    }
    $('.prev-button').prop('disabled', false);
}

function prevButtonDisable() {
    if ($('.current').hasClass("first")) {
        $('.prev-button').prop('disabled', $('.current').hasClass('first'));
    }
    $('.next-button').prop('disabled', false);
}