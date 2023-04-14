$(document).ready(function () {
    const $tabContents = $('.tab-content');
    const $tab = $('ul.tabs li');

    $tab.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tab.removeClass('current');
        $tabContents.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        $tab.removeClass('active');
        $(this).addClass('active');
        nextButtonDisable();
    });

    $('.prev-button').prop('disabled', $('.current').hasClass('first'));

    $('.next-button').click(function () {
        const nextTab = $('.tab-content.current').next('.tab-content');
        const nextIcon = $('.tab-link.active').next('.tab-link');
        const tabsContainer = $(".tabs");
        const currentTab = $(".tab-link.active");
        const nextTab1 = currentTab.next(".tab-link");

        if (nextTab.length == 1) {
            $('.tab-content').removeClass('current');
            nextTab.addClass('current');

            $('.tab-link').removeClass('active');
            nextIcon.addClass('active');
        }
        nextButtonDisable();

        const scrollLeft = (tabsContainer.scrollLeft() + nextTab1.position().left) - 25;
        tabsContainer.animate({ scrollLeft: scrollLeft }, 100);
    });

    $('.prev-button').click(function () {
        const prevTab = $('.tab-content.current').prev('.tab-content');
        const prevIcon = $('.tab-link.active').prev('.tab-link');
        const tabsContainer = $(".tabs");
        const currentTab = $(".tab-link.active");
        const prevTab1 = currentTab.prev(".tab-link");

        if (prevTab.length == 1) {
            $('.tab-content').removeClass('current');
            prevTab.addClass('current');

            $('.tab-link').removeClass('active');
            prevIcon.addClass('active');
        }
        nextButtonDisable();
        const scrollLeft = tabsContainer.scrollLeft() + prevTab1.position().left - 200;
        tabsContainer.animate({ scrollLeft: scrollLeft }, 100);
    });
});

function nextButtonDisable() {
    $('.next-button').prop('disabled', $('.current').hasClass('last'));

    $('.prev-button').prop('disabled', $('.current').hasClass('first'));
}
