document.addEventListener('DOMContentLoaded', function() {

    // Randomizing gallery images
    var cols = document.querySelectorAll('.col');
    var randNums = [];

    // Fill image number array
    for (let i = 0; i < cols.length; i++)
    {
        randNums.push(i + 1);
    }

    // Randomize image number array
    randNums = randomize(randNums);

    var i = 0;

    // Set each column of grid to random image using image number
    cols.forEach(col => {
        col.innerHTML = '<img src=\"/images/gallery/' + randNums[i] + '.jpg\" alt=\"image\">';
        i++;
    });

    console.log(randNums);

    // Form checking
    var forms = document.querySelectorAll('form');

    // Add event listener to all forms
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {

            // Form input styling
            for (let i = 0; i < form.elements.length - 1; i++)
            {
                if (!form.elements[i].value)
                {
                    form.elements[i].style.border = '2px solid red';
                    console.log(form.elements[i]);
                }
                else
                {
                    form.elements[i].style.border = '2px solid green';
                    console.log(form.elements[i]);
                }
            }

            // Check if all inputs are provided
            for (let i = 0; i < form.elements.length - 1; i++)
            {
                if (form.elements[i].style.border != '2px solid green')
                {
                    break;
                }
                if (i == form.elements.length - 2)
                {
                    alert('Success');
                }
            }

            // Prevent submission
            event.preventDefault();
        });
    });

    // Get clickable blocks from homepage
    var blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        block.addEventListener('click', function(event) {
            if (this.id == 'generate' || this.id == 'create')
            {
                window.location.href = 'create.html';
            }
            else if (this.id == 'explore')
            {
                window.location.href = 'gallery.html';
            }
        });
    });

    // Logo onclick event
    logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        window.location.href = 'index.html';
    });

    // Burger dropdown
    var burger = document.querySelector('.burger');
    var right_nav = document.querySelector('.right-nav');
    var navbar = document.querySelector('.navbar');
    var line_top = document.querySelector('.line-top');
    var line_bot = document.querySelector('.line-bot');
    var line_mid = document.querySelector('.line-mid');
    var toggle = false;

    burger.addEventListener('click', function(event) {
        navbar.classList.toggle('resp-nav-height');
        right_nav.classList.toggle('resp-nav-hidden');

        // Burger dropdown cross sign toggle
        if (toggle == false)
        {
            line_top.style.transform = 'rotate(45deg) translate(5.5px, 9px)';
            line_bot.style.transform = 'rotate(-45deg) translate(5.5px, -9px)';
            line_mid.style.transform = 'translate(-30px)';
            line_mid.style.opacity = '0';
            toggle= true;
        }
        else
        {
            line_top.style.transform = 'none';
            line_bot.style.transform = 'none';
            line_mid.style.transform = 'none';
            line_mid.style.opacity = '1';
            toggle= false;
        }

    });

    // Banner button
    var banner_btn = document.querySelector('.banner-btn');
    if (banner_btn)
    {
        banner_btn.addEventListener('click', function(event) {
            window.location.href = 'create.html';
        });
    }

});


// Randomize array for images gallery using Fisher-Yates Shuffle
function randomize(arr)
{
    var i = arr.length, j = 0, temp;
    while (i--)
    {
        j = Math.floor(Math.random() * (i + 1));

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}