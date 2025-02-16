$(document).ready(function() {
    $('#menu-recommender-form-submit-btn').on('click', function(e) {
        if ($('#user-select').val() && $('#function-name-select').val() && $('#time-slot-select').val()) {
            $.ajax({
                url: "http://localhost:8100/app/api/menu-recommender/hint",
                data: {
                    'user_id': $('#user-select').val(),
                    'function_name': $('#function-name-select').val(),
                    'time_slot': $('#time-slot-select').val(),
                },
                method: "GET",
                success: function (response) {
                    $('#function-name-next').html('')
                    for (let i = 0; i < response?.['next_function'].length; i++) {
                        let next_function_name = response?.['next_function'][i].split('#')[0].replace('_', ' ')
                        if (next_function_name) {
                            $('#function-name-next').append(`<br><a href="#">${next_function_name}</a>`);
                        } else {
                            $('#function-name-next').text($('#trans-script').attr('data-trans-no-hint'));
                        }
                    }
                    const toastLiveExample = document.getElementById('liveToast')
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                    toastBootstrap.show()
                }
            });
        }
    })
});
