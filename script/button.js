function disableButton(buttonId) {
    document.getElementById(buttonId ).addEventListener('click',function(){
        let btn = document.getElementById(buttonId);
        if (btn) {
            btn.style.opacity = '0.3';
            btn.style.backgroundColor = 'bg-blue-100'; 
            btn.style.pointerEvents = 'none';
        } 
        else {
            console.warn(`Button with ID '${buttonId}' not found.`);
        }
    })
    } 
    disableButton('btn-1')
    disableButton('btn-2')
    disableButton('btn-3')
    disableButton('btn-4')
    disableButton('btn-5')
    disableButton('btn-6')




