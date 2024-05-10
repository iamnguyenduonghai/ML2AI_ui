const $tab_title = $('.tab-title')
const $tab_content = $('.tab-content')
const $card = $('.card')
const $collapse_menu_btn = $('#collapse-menu-btn')

$card.on('click', function () {
    $card.css({
        'background-color': '#F4F1EB',
        'color': '#2B77A4',
        'text-align': 'left',
        'transform': 'translateX(0px)',
        'transition': 'transform 0.1s ease-in-out'
    })
    $card.removeClass('current-card')
    $(this).css({
        'background-color': '#2B77A4',
        'color': '#F4F1EB',
        'text-align': 'right',
        'transform': 'translateX(30px)',
        'transition': 'transform 0.1s ease-in-out'
    })
    $(this).addClass('current-card')
})

$tab_title.on('click', function (){
    $tab_content.prop('hidden', true)
    let tab_id = `#${$(this).attr('id')}-content`
    $(tab_id).prop('hidden', false)
})

$collapse_menu_btn.on('click', function (){
    if ($(this).text() === $(this).attr('data-state-show')) {
        $(this).text($(this).attr('data-state-hide'))
        $card.prop('hidden', false)
        $(this).css({
            'transform': 'translateX(0px)',
            'transition': 'transform 0.1s ease-in-out'
        })
    }
    else {
        $(this).text($(this).attr('data-state-show'))
        $card.prop('hidden', true)
        $('.current-card').prop('hidden', false)
        $(this).css({
            'transform': 'translateX(30px)',
            'transition': 'transform 0.1s ease-in-out'
        })
    }
})