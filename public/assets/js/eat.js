$(document).ready(
    $('#submit-burger').on('click', () => {
        anime({
            targets: '#uneaten',
            keyframes: [
                { translateY: 250 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
            loop: false
        })
    }),



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
        })
    })
);