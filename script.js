const showButtons = document.querySelectorAll('.question-button');

function handleClick(event){
    const clickedButton = event.target;
    const question = clickedButton.parentNode;
    const arrow = question.lastElementChild;
    console.dir(arrow);
    const answerPanel = clickedButton.parentNode.nextElementSibling;
    if ( !answerPanel.classList.contains('hidden') ){
        
        question.style.fontWeight = "";
        answerPanel.classList.add('hidden');
    } else if( answerPanel.classList.contains('hidden') ){
        question.style.fontWeight = "bold";
        answerPanel.classList.remove('hidden');
    } 
    return
}

showButtons.forEach(function(button){
    button.addEventListener('click',handleClick);
});
