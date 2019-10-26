$(document).ready(() => {
    $('#new_burger').on('submit', function () {
        let data = {
            name: $('#burger').val(),
        }

        $.ajax({
            type: 'POST',
            url: '/api/burgers/',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        });
    });

    $('.devour').on('click', function () {
        let data = {
            id : this.id
        }

        $.ajax({
            type: 'PUT',
            url: '/api/burgers',
           data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        });

        location.reload();
    })

})