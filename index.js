let lower = document.getElementById("lower-case");
let upper = document.getElementById("upper-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file");

let input = document.querySelector("#text-area");


upper.addEventListener("click", function () {
    let text = input.value.toUpperCase();
    input.value = text;
    // document.getElementById("text-area").value = input.toUpperCase();
    // console.log(document.getElementById("text-area").value);
    // console.log(text);
});

lower.addEventListener("click", function () {
    let text = input.value.toLowerCase();
    input.value = text;
    // document.getElementById("text-area").value = input.toUpperCase();
    // console.log(document.getElementById("text-area").value);
    // console.log(text);
});

proper.addEventListener("click", function () {
    let str = input.value.toLowerCase();
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(' ');
    input.value = str;

    // console.log(str);
});

sentence.addEventListener('click', function () {
    let str = input.value.toLowerCase();

    str = str.split(". ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    str = str.join(". ");

    input.value = str;
});


save.addEventListener("click", function () {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    // Start file download.
    let stri = document.getElementById("text-area").value;
    download("text.txt", stri);
});