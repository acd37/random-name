// TM - 02.09.19 - Dynamically creates script tag for student.js file.
const studentScript = document.createElement('script');
studentScript.src = './assets/js/students.js';
document.body.appendChild(studentScript);

function getRandomStudents() {
    let random = Math.floor(Math.random() * students.length + 1);
    $('#random-name').html(
        '<p>' +
            students[random].firstName +
            ' ' +
            students[random].lastName +
            '</p>'
    );
}

$('#randomize').click(function() {
    const studentInterval = setInterval(function() {
        getRandomStudents();
    }, 50);

    setTimeout(function() {
        clearInterval(studentInterval);
    }, 2000);
});
