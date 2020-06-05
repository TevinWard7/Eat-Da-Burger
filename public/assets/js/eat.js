$(document).ready(
    $('.eat').on('click', function () {
        const id = $(this).data('id');
        console.log(id);
        $.ajax({
            method: 'GET',
            url: `/${id}`,
            success: location.reload()
        });
    }),

    $('.x').on('click', function () {
        const id = $(this).data('id');
        console.log(id);
        $.ajax({
            method: 'DELETE',
            url: `/${id}`,
            success: location.reload()
        });
    })
);