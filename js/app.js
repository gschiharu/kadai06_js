$(document).ready(function() {
    console.log("Document ready!"); // To check if jQuery is working

    // Ensure each button is properly referenced and clickable
    $('#interpretation').on('click', function() {
        console.log("Interpretation button clicked!"); // Debugging log
        window.location.href = 'available_interpreters.html'; // Redirect to Available Interpreters page
    });

    $('#translation').on('click', function() {
        console.log("Translation button clicked!"); // Debugging log
        window.location.href = 'https://calendly.com/coopro_jp/30min'; // Redirect to COO 1:1 consultation page
    });

    $('#project-management').on('click', function() {
        console.log("Project Management button clicked!"); // Debugging log
        window.location.href = 'https://calendly.com/coopro_jp/30min'; // Redirect to COO 1:1 consultation page
    });
});

$(document).ready(function() {
    // Interpreter profiles data
    const interpreterProfiles = {
        chiharu: {
            name: "Chiharu",
            description: "Expert in business interpretation between English and Japanese.",
            img: "img/chiharu.jpg",
            calendly: "https://calendly.com/chiharuon/30min"
        },
        naoko: {
            name: "Naoko",
            description: "Specializes in technical interpretation for industrial negotiations.",
            img: "img/naoko.jpg",
            calendly: "https://calendly.com/selfcompassion-leader-info/30min"
        },
        maria: {
            name: "Maria",
            description: "Experienced in legal and medical interpretations.",
            img: "img/maria.jpg",
            calendly: "https://calendly.com/bodyandmind0320/30min"
        }
    };

    // Show interpreter details when "View Details" is clicked
    $('.show-details').click(function() {
        var interpreterId = $(this).data('id');
        var interpreter = interpreterProfiles[interpreterId];

        if (interpreter) {
            // Hide interpreter list and show profile section
            $('#interpreter-list').hide();
            $('#profile-container').show();

            // Update profile info
            $('#interpreter-name').text(interpreter.name);
            $('#interpreter-photo').attr('src', interpreter.img);
            $('#interpreter-description').text(interpreter.description);

            // Embed the Calendly schedule for the interpreter
            $('#schedule').html('<iframe src="' + interpreter.calendly + '" width="100%" height="600" frameborder="0"></iframe>');
        }
    });
});
