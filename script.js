const showButtons = document.querySelectorAll('.question-button');

function handleClick(event){
    const clickedButton = event.target;
    const answerPanel = clickedButton.parentNode.nextElementSibling;
    if(answerPanel.classList.contains('hidden')){
        answerPanel.classList.remove('hidden');
    } else if (!answerPanel.classList.contains('hidden')){
        answerPanel.classList.add('hidden');
    }
    return
}

showButtons.forEach(function(button){
    button.addEventListener('click',handleClick);
});
