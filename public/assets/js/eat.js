$(document).ready(
    $('#submit-burger').on('click', () => {
        anime({
            targets: '#uneaten',
            keyframes: [
                { rotate: 360 },
                // { translateX: -500 },
                { scale: 5 },
                { rotate: 360 },
                // { translateX: -200 },
                // { translateX: 0 },
            ],
            duration: 1000,
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