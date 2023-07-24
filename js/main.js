jQuery(document).ready(function () {

    // Gereral
    let $html = $('html');
    let $home_page = $('.home');

    // Integration
    let $integration_section = $home_page.find('#integration');
    let $logo = $integration_section.find('.partner-logo img');

    $logo.each(function(){
        let $logo_alt = $(this).attr('alt');
        $(this).attr('title', $logo_alt);
    });

    // Hamburger
    let $hamburger = $('#mobile-menu-control-wrapper');

    let $contact_btn = $('.contact-button a');

    let $menu_wrap = $('#site-navigation');
    let $menu_list = $('#menu-mvp');
    let $menu_item = $menu_list.find('.menu-item a');

    $menu_item.add($contact_btn).on('click', function(){
        $html.removeClass('mobile-menu-open');
        $hamburger.removeClass('toggled');
        $menu_wrap.removeClass('toggled');
    });
});
