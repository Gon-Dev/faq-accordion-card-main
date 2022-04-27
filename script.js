const showButtons = document.querySelectorAll('.question-button');

function handleClick(event){
    const clickedButton = event.target;
    const question = clickedButton.parentNode;
    const arrow = question.lastElementChild;
    const answerPanel = clickedButton.parentNode.nextElementSibling;
    if ( answerPanel.classList.contains('hidden') ){
        question.style.fontWeight = "bold";
        answerPanel.classList.remove('hidden');
        console.log(arrow.classList);
        arrow.classList.add('rotate');
        console.log(arrow.classList);

    } else if( !answerPanel.classList.contains('hidden') ){
        question.style.fontWeight = "";
        answerPanel.classList.add('hidden');
        console.log(arrow.classList);
        arrow.classList.remove('rotate');
        console.log(arrow.classList);
    } 
    return
}

showButtons.forEach(function(button){
    button.addEventListener('click',handleClick);
});
