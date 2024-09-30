$(document).ready(function() {
    // Thème par défaut
    let currentTheme = localStorage.getItem('theme') || 'light';
    $('body').addClass(currentTheme + '-mode');
    $('#sun-icon').toggleClass('d-none', currentTheme === 'dark');
    $('#moon-icon').toggleClass('d-none', currentTheme === 'light');

    // Bouton de changement de thème
    $('#theme-toggle, #theme-toggleSideBar').click(function() {
        if ($('body').hasClass('light-mode')) {                             //dark
            $('body').removeClass('light-mode').addClass('dark-mode');
            localStorage.setItem('theme', 'dark');
            $('#sun-icon').addClass('d-none');
            $('#moon-icon').removeClass('d-none');
            $('hr').css('background','white');
            $('.row').css('color','white')
        } else {
            $('body').removeClass('dark-mode').addClass('light-mode');     //light
            localStorage.setItem('theme', 'light');
            $('#sun-icon').removeClass('d-none');
            $('#moon-icon').addClass('d-none');
            $('hr').css('background','black');
            $('.row').css('color','')
        }
    });

    if($('body').hasClass('dark-mode')){            // dark
        $('hr').css('background','white');
        $('.row').css('color','white')
    }
    else if($('body').hasClass('light-mode')){      //light
        $('hr').css('background','black');
        $('.row').css('color','')
    }

    // Volet latéral
    $('#sidebar-toggle').click(function() {
        $('#theme-sidebar').toggleClass('open');
    });

    $(".BtnMoodBoard").off('click').on('click', function () {
        // window.open('Images/Mb.pdf', '_blank');
        window.open('https://sorasilver25.github.io/PortfolioMB/Mb.pdf', '_blank');
    })

    $(".BtnCV").off('click').on('click', function () {
        // window.open('Images/CV.pdf', '_blank');
        window.open('https://sorasilver25.github.io/PortfolioMB/CV.pdf', '_blank');
    })
});
