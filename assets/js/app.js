// TM - 02.09.19 - Dynamically creates script tag for student.js file.
const studentScript = document.createElement('script');
studentScript.src = './assets/js/students.js';
document.body.appendChild(studentScript);

function getRandomStudents() {
    if (students.length > 0) {
        const random = Math.floor(Math.random() * students.length);

        $('#random-name').html(
            '<p>' +
                students[random].firstName +
                ' ' +
                students[random].lastName +
                '</p>'
        );

        students.splice(random, 1);

        console.log(students);
    } else {
        const init = confirm(
            "You're out of students. Hit okay to re-populate."
        );

        console.log(init);
        if (init) {
            initStudents();
        }
    }
}

$('#randomize').click(function() {
    getRandomStudents();
});
