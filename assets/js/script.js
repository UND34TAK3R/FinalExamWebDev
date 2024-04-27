$(document).ready(function () {
    const username = getCookie('Name');
    const email = getCookie('Email');
    const Subject = getCookie('Subject');
    const Message = getCookie('Message');

    // Set values to input fields
    if (username) {
        document.getElementById('name').value = username;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (Subject) {
        document.getElementById("subject").value = Subject;
    }
    if (Message) {
        document.getElementById("textbox").value = Message;
    }
    $(window).scroll(function (){ 
    if (this.scrollY > 20) {
    $('.navbar').addClass("sticky");
    $('#background').css({
       'display': 'block',
       'display': 'none' 
    });
    
    } 
    else {
    $('.navbar').removeClass("sticky");
    $('#background').css({
        'display': 'block',
     });
    }
    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
} else {
$('.scroll-up-btn').removeClass("show");
}
});

$("#background").on("click", function(){
    var currentimg = $('#background').attr('src');
if (currentimg === 'assets/images/moon-stars-svgrepo-com (1).svg'){
    $('#background').attr('src', 'assets/images/light-mode-svgrepo-com.svg')
    $('html').addClass('dark-mode').removeClass('light-mode'); 
}
else{
    $('#background').attr('src', 'assets/images/moon-stars-svgrepo-com (1).svg')
    $('html').addClass('light-mode').removeClass('dark-mode');
}
});
});

$(document).on('submit','#form', function(e) {
    e.preventDefault(); // Prevent form submission

    // Validate form fields
    var isValid = true;

    // Check Username field
    var name = $('#name').val();
    if (name.trim() === '') {
        $('#errorName').text('Please enter your username').show();
        $('.contact .right form .name').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else if (name.length < 3 || name.length > 10) {
        $('#errorName').text('Length of username must be between 3 and 10').show();
        $('.contact .right form .name').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorName').hide();
        $('.contact .right form .name').css({
            'border': '1px solid #ccc'
        });
    }

    // Check Email field
    var email = $('.email').val();
    var emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (email.trim() === '') {
        $('#errorEmail').text('Please enter your email').show();
        $('.contact .right form .email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else if (!emailRegex.test(email)) {
        $('#errorEmail').text(' Please enter a valid email address').show();
        $('.contact .right form .email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorEmail').hide();
        $('.contact .right form .email').css({
            'border': '1px solid #ccc'
        });
    }

    // Check Surname field
    var subject = $('#subject').val();
    if (subject.trim() === '') {
        $('#errorSubject').text('Please enter your Subject').show();
        $('.contact .right form .subject').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorSubject').hide();
        $('.contact .right form .subject').css({
            'border': '1px solid #ccc'
        });
    }

    // Check TextBox field
    var textbox = $('#textbox').val();
    if (textbox.trim() === '') {
        $('#errorTextBox').text('Please enter a message').show();
        $('.contact .right form .textarea textarea').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorTextBox').hide();
        $('.contact .right form .textarea textarea').css({
            'border': '1px solid #ccc'
        });
    }


    // Check if all fields are valid
    if (isValid) {
        // Variables
        let Name = name;
        let Email = email;
        let Subject = subject;
        let TextBox = textbox;
        let text = `
        Do you want to confirm the saving of your information?
             Your name: ${Name}
             Your email: ${Email}
             Your subject: ${Subject}
             Your message: ${TextBox}
        `;
        let info = `
        Name: ${Name}
        Email: ${Email}
        Subject: ${Subject}
        Message: ${TextBox}
        `;

        // Creates text file and appends info to file
        if (confirm(text)) {
        const blob = new Blob([info], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = $("<a>")
            .attr("href", url)
            .attr("download", "info.txt")
            .appendTo("body");
        a[0].click();
        URL.revokeObjectURL(url);
        a.remove();
        setCookie(Name, Email, Subject, textBox)
        }
    } 
       

});

var options = {
    strings: ["LaSalle College Student Developer", "Front-end Developer", "programmer in HTML,JAVA,CSS,JQUERY"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
};

$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
}); 

function setCookie(name, email, Subject, Message){
    document.cookie = "Name=" +name+ ";";
    document.cookie = "Email=" +email+ ";";
    document.cookie = "Subject=" + Subject+ ";";
    document.cookie = "Message=" + Message + ";"
    }
    
    function getCookie(name, password, HighScore, Color){
        const cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name || cookieName === password || cookieName === HighScore || cookieName === Color) {
        return cookieValue;
        }
        }
        return null;   }