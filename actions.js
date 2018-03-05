function populateLists() {
    for(var i=0;i<allItems[0].length;i++) {
        document.getElementById("studentList").innerHTML +=
            "<option value='" + allStudents[i].id + "'>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var j=0;j<allItems[1].length;j++) {
        document.getElementById("teacherList").innerHTML +=
            "<option value='" + allTeachers[j].id + "'>" + allItems[1][j].firstName + " " + allItems[1][j].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList").innerHTML +=
            "<option value='" + allSections[k].id + "'>" + allItems[2][k].name + "</option>"
    }
    for(var l=0;l<allItems[2].length;l++) {
        document.getElementById("sectionList2").innerHTML +=
            "<option value='" + allSections[l].id + "'>" + allItems[2][l].name + "</option>"
    }
}

function resetLists(){
    for(var i=0;i<allItems[0].length;i++) {
        document.getElementById("studentList").innerHTML -=
            "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var j=0;j<allItems[1].length;j++) {
        document.getElementById("teacherList").innerHTML -=
            "<option>" + allItems[1][j].firstName + " " + allItems[1][j].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList").innerHTML -=
            "<option>" + allItems[2][k].name + "</option>"
    }
    for(var l=0;l<allItems[2].length;l++) {
        document.getElementById("sectionList2").innerHTML -=
            "<option>" + allItems[2][l].name + "</option>"
    }
}

function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type == "text"){
            elements[i].value = "";
        }
    }
}

function listItems() {
    var selection = document.getElementById("list").value;
    var items = allItems[selection];
    var result = "";
    console.log(this.currentSize)

    for(var i = 0; i<items.length; i++) {
        for(key in items[i]) {
            result += items[i][key] + " ";
        }
        result += "<br>";
    }
    document.getElementById("listOutput").innerHTML = result;
    resetLists();
    populateLists();
}

function addStudent() {
    var firstName = document.getElementById("sfn").value;
    var lastName = document.getElementById("sln").value;
    var grade = document.getElementById("sg").value;

    allStudents.push(new Student(firstName,lastName,grade));
    document.getElementById("confirm").innerHTML = "Student Added";
    clearBoxes();
}

function addTeacher() {
    var firstName = document.getElementById("tfn").value;
    var lastName = document.getElementById("tln").value;
    var subject = document.getElementById("ts").value;

    allTeachers.push(new Teacher(firstName,lastName,subject));
    document.getElementById("confirm").innerHTML = "Teacher Added";
    clearBoxes();
}

function addSection() {
    var name = document.getElementById("sn").value;
    var count = document.getElementById("sc").value;
    allSections.push(new Section(name,count));
    document.getElementById("confirm").innerHTML = "Section Added";
    clearBoxes();
}

function getSectionById(secId){
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].id == secId){
            return allSections[i];
        }
    }
}

function getStudentById(studentId){
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id ==studentId){
            return allStudents[i];
        }
    }
}

function getTeacherById(teacherId){
    for(var i = 0; i < allTeachers.length; i++){
        if(allTeachers[i].id ==teacherId){
            return allTeachers[i];
        }
    }
}


function addStudentToSection(){
    var stud = getStudentById(document.getElementById("studentList").value);
    var sec = getSectionById(document.getElementById("sectionList").value);
    if(sec.currentSize != sec.maxSize) {
        sec.students.push(stud.firstName + " " + stud.lastName);
        sec.currentSize++;
        sec.sectionSeatsRemaining--;
        document.getElementById("confirm").innerHTML = stud.firstName + " " + stud.lastName + " Added to section";
    }
    if(sec.currentSize == sec.maxSize){
        alert("You cannot add any more students to this section")
    }
    console.log(sec.currentSize)
}

function removeStudentFromSection(){
    var stud = getStudentById(document.getElementById("studentList").value);
    console.log(stud);
    var sec = getSectionById(document.getElementById("sectionList").value);
    var array = sec.students;
    console.log(array);
    var stud2rm = stud.firstName + " " + stud.lastName;
    console.log(stud2rm);
    var index = array.indexOf(stud2rm);
    console.log(index);
    if(sec.currentSize != 0) {
        if (index != -1) {
            sec.students.splice(index, 1);
            sec.currentSize--;
            sec.sectionSeatsRemaining++;
            document.getElementById("confirm").innerHTML = stud.firstName + " " + stud.lastName + " Removed from section";
        }
    }
    else {
        alert("You cannot remove a student from this section")
    }
}

function addTeacherToSection() {
    var Tea = getTeacherById(document.getElementById("teacherList").value);
    var sec = getSectionById(document.getElementById("sectionList2").value);
    console.log(Tea);
    if(sec.tmcSize != sec.tmSize){
        sec.teacher.push(Tea.firstName + " " + Tea.lastName);
        sec.tmcSize++;
        console.log(Tea);
        document.getElementById("confirm").innerHTML = Tea.firstName + " " + Tea.lastName + " Added to section";
    }
    else {
        alert("You cannot add another teacher to this section")
    }

}

function removeTeacherFromSection() {
    var TEA = getTeacherById(document.getElementById("teacherList").value);
    console.log(TEA);
    var sec = getSectionById(document.getElementById("sectionList2").value);
    var array = sec.teacher;
    console.log(array);
    var TEA2rm = TEA.firstName + " " + TEA.lastName;
    console.log(TEA2rm);
    var index = array.indexOf(TEA2rm);
    console.log(index);
    if(sec.tmcSize != 0) {
        if (index != -1) {
            sec.teacher.splice(index, 1);
        }
        sec.tmcSize--;
        document.getElementById("confirm").innerHTML = TEA.firstName + " " + TEA.lastName + " Removed from section";
    }
    else{
        alert("You cannot remove a teacher from this section")
    }
}