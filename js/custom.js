// Hamburger toggle

$(document).ready(function () {
    $('.hamburgur-menu-toggle').click(function () {
        $('.hamburgur-menu-toggle').toggleClass('active')
        // $('nav').toggleClass('active')
    })
})

// Dark/ Light theme

const themeButton = document.getElementById('theme-button');
// const iconButton = document.getElementById('icon');
const darkTheme = 'dark-theme';
// const iconTheme = 'fa-sun';

// Selected theme
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// Validate current theme
// getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'

// Validate if a user selected a theme previously
// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme)
// } else {

// }

// Actvate theme change
themeButton.addEventListener('click', () => {
    // console.log('clicked');
    $(document).ready(function () {
        document.body.classList.toggle(darkTheme)
        $('.dark-light-mode').toggleClass('active')



        // $('.change-theme').click(function () {
        //     $('.change-theme').toggleClass('active')
        // })
    });
    // iconButton.classList.toggle(iconTheme)
    //current icon that user chose
    // localStorage.setItem('selected-theme', getCurrentTheme)
    // localStorage.setItem('selected-icon', getCurrentIcon)
})




