const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quisquam, ut! Amet, exercitationem" +
    " ipsum itaque labore provident quae quos reiciendis velit voluptas. Corporis ex quia quibusdam quos tenetur vel veniam?";

let indexText = 0;
const time = 50;


const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active')
}
const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);