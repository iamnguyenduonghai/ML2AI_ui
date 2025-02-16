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
                    let next_function_name = response?.['next_function'].split('#')[0].replace('_', ' ')
                    if (next_function_name) {
                        $('#function-name-next').text(next_function_name);
                    }
                    else {
                        $('#function-name-next').text(next_function_name);
                    }
                    const toastLiveExample = document.getElementById('liveToast')
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                    toastBootstrap.show()
                }
            });
        }
    })
});
