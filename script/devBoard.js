document.getElementById('calander').addEventListener('click',function(){
   window.location.href ='questionPart.html'
    
})
document.getElementById('clear-btn').addEventListener('click',function(){
   document.getElementById('activity').innerText = "";
});
document.getElementById('change-color').addEventListener('click',function(){
   let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor=randomColor;
});
document.getElementById("dateDisplay").innerText = new Date().toDateString();


function updateTask (btnId, taskContentId,navContentId, taskNameId, activityLogId){
   document.getElementById(btnId).addEventListener('click',function(){
      alert('Board updated successfully')
      let taskContent = document.getElementById(taskContentId);
   let taskValue = parseInt(taskContent.innerText);
   let valueMinus = taskValue -1;
   taskContent.innerText = valueMinus;
   let navContent = document.getElementById(navContentId);
   let navValue = parseInt(navContent.innerText);
   let navValueAdd = navValue + 1;
   navContent.innerText = navValueAdd;
      
   let btn = document.getElementById('btn-1')
   btn.style.opacity='0.3';
   btn.style.color = 'bg-blue-100'
     btn.style.pointerEvents='none' 
 
     if(navValueAdd > 28){
      alert('congrates!! You have complated all the current Task');
     }
     
     let now = new Date();
     let formatedTime  = now.toLocaleString('en-US',{
      hour: '2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
     })
     let Task = document.getElementById(taskNameId)
     let taskName = Task.innerText;
     let activityLog = document.getElementById(activityLogId)
     let newP = document.createElement('p');
     newP.classList.add(
      'p-4',
      'bg-[#F4F7FF]',
      'rounded-lg',
      'shadow-md',
      'font-medium',
      'mt-2',
      'ml-2',
      'mr-2'
     );
     newP.innerText = `You have complete The Task ${taskName} at ${formatedTime}`;
     activityLog.appendChild(newP); 
   })
}
updateTask('btn-1','task-content','nav-value','fix-mobile','activity');
updateTask('btn-2','task-content','nav-value','fix-mobile','activity');
updateTask('btn-3','task-content','nav-value','fix-mobile','activity');
updateTask('btn-4','task-content','nav-value','fix-mobile','activity');
updateTask('btn-5','task-content','nav-value','fix-mobile','activity');
updateTask('btn-6','task-content','nav-value','fix-mobile','activity');







