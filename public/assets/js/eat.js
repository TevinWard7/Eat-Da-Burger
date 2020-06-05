$('#eat').on('click', function () {
    const id;
    console.log($('this').data("id"))
    $.ajax({
        method: 'POST',
        url: `/api/burgers/${id}`,
        success: location.reload()
    })
})