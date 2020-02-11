// TM - 02.09.19 - Dynamically creates script tag for student.js file.
const studentScript = document.createElement('script');
studentScript.src = './assets/js/students.js';
document.body.appendChild(studentScript);

function getRandomStudents() {
    const random = Math.floor(Math.random() * students.length);

    $('#random-name').html(
        '<p>' + students[random].firstName + ' ' + students[random].lastName
    );
}

$('#randomize').click(function() {
    getRandomStudents();
});
