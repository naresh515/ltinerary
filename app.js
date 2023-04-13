$(document).ready(function () {
    if ($('.current').hasClass('first')) {
        $('.prev-button').prop('disabled', true);
    }

    $('.next-button').click(function () {
        const nextTab = $('.tab-content.current').next('.tab-content');
        const nextIcon = $('.icon_tab.active').next('.icon_tab');
        const nextIconActive = $('.icon.icon-active').next('.icon');

        if (nextTab.length == 1) {
            $('.tab-content').removeClass('current');
            nextTab.addClass('current');

            $('.icon_tab').removeClass('active');
            nextIcon.addClass('active');

            $('.icon').removeClass('icon-active');
            nextIconActive.addClass('icon-active');
        }

        $(this).prop('disabled', $('.current').hasClass('last'));

        $('.prev-button').prop('disabled', false);
    });

    $('.prev-button').click(function () {
        const prevTab = $('.tab-content.current').prev('.tab-content');
        const prevIcon = $('.icon_tab.active').prev('.icon_tab');
        const prevIconActive = $('.icon.icon-active').prev('.icon');

        if (prevTab.length == 1) {
            $('.tab-content').removeClass('current');
            prevTab.addClass('current');

            $('.icon_tab').removeClass('active');
            prevIcon.addClass('active');

            $('.icon').removeClass('icon-active');
            prevIconActive.addClass('icon-active');
        }

        $(this).prop('disabled', $('.current').hasClass('first'));

        $('.next-button').prop('disabled', false);
    });
});