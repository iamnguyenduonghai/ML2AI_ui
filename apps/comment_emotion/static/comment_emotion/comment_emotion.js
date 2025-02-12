$(document).ready(function() {
    $('#predict-cmt-emotion').on('click', function(e) {
        if ($('#comment-input').val()) {
            $.ajax({
                url: "http://localhost:8100/app/api/comment-emotion/message",
                data: {'comment': $('#comment-input').val()},
                method: "GET",
                success: function (response) {
                    let label_mapping = ["Tích cực", "Tiêu cực", "Bình thường", "Hỗn hợp"]
                    let label_color = ["success", "danger", "primary", "warning"]
                    $('#comment-emotion-space').html(`
                        <div class="alert alert-${label_color[response?.['comment_emotion']]}" role="alert">
                            ${label_mapping[response?.['comment_emotion']]}
                        </div>
                    `)
                }
            });
        }
    })

    $("#fileInput").on("change", function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const htmlContent = e.target.result;
            const doc = new DOMParser().parseFromString(htmlContent, "text/html");
            const elements = $(doc).find(`.${$('#comment-ele-class').val()}`);
            const outputDiv = $("#comment-crawled-table").find('tbody').html('');

            if (elements.length) {
                let label_mapping = ["Tích cực", "Tiêu cực", "Bình thường", "Hỗn hợp"]
                let label_color = ["success", "danger", "primary", "warning"]
                elements.each(function() {
                    let cmt = $(this).text()
                    if (cmt) {
                        $.ajax({
                            url: "http://localhost:8100/app/api/comment-emotion/message",
                            data: {'comment': cmt},
                            method: "GET",
                            success: function (response) {
                                outputDiv.append(`
                                <tr>
                                    <td><span class="small text-muted">${cmt}</span></td>
                                    <td style="min-width: 10vw"><span class="small text-${label_color[response?.['comment_emotion']]}">${label_mapping[response?.['comment_emotion']]}</span></td>
                                </tr>
                            `)
                            }
                        });
                    }
                });
            } else {
                outputDiv.html('');
                alert('No comment found!')
            }
        };

        reader.readAsText(file);
    });
});
