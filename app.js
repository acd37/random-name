// TM - 02.09.19 - Dynamically creates script tag for student.js file.
const studentScript = document.createElement('script'); 
studentScript.src = "students.js";
document.body.appendChild(studentScript);

function getRandomStudents() {
    let random = Math.floor(Math.random() * students.length + 1);
    return students[random];
}

$('#randomize').click(function() {
    let randomStudent = getRandomStudents();

    $('#random-name').html(
        '<p>' + randomStudent.firstName + ' ' + randomStudent.lastName + '</p>'
    );
});
