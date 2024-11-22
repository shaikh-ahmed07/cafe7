


$(".btn").click(function(){
    event.preventDefault();
    var currentopacity = $(this).css("opacity")
    if(currentopacity==1){
        $(this).animate({opacity:0.5},500);
    } else{
        $(this).animate({opacity:1},500);
    }
})
    document.querySelectorAll('.quantity').forEach(function(container) {
        const decrementButton = container.querySelector('.decrement');
        const incrementButton = container.querySelector('.increment');
        const inputField = container.querySelector('.quantity-input');

        // Decrement button click
        decrementButton.addEventListener('click', function(click) {
            event.preventDefault(click);
            let currentValue = parseInt(inputField.value) || 1;
            if (currentValue > parseInt(inputField.min)) {
                inputField.value = currentValue - 1;
            }
        });

        // Increment button click
        incrementButton.addEventListener('click', function(click) {
            event.preventDefault(click);
            let currentValue = parseInt(inputField.value) || 1;
            if (currentValue < parseInt(inputField.max)) {
                inputField.value = currentValue + 1;
            }
        });
    });

