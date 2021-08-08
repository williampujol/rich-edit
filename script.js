
const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click',() =>{
        let command = element.dataset['element'];

        if(command == 'createLink'){
            let url = prompt('Insert your link here:', 'https://');
            document.execCommand(command, false, url);
        }else if(command == 'insertImage'){
            let image = prompt('Insert your image link here:', 'https://');
            document.execCommand(command, false, image);
        }else{
            document.execCommand(command, false, null);
        }
       
    });
});

