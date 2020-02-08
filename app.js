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
