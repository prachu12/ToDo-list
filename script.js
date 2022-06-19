document.querySelector('#push').onclick = function(){
           if(document.querySelector('#newtask').value){
               alert("Please Enter a Task")
           }
       
           else{
               document.querySelector('#tasks').innerHTML += `
                   <div class="task">
                       <span id="taskname">
                           ${document.querySelector('#newtask').value}
                       </span>
                       <button class="delete">
                           Delete
                       </button>
                   </div>
               `;
       
               var current_tasks = document.querySelectorAll(".delete");
               for(var i=0; i<current_tasks.length; i++){
                   current_tasks[i].onclick = function(){
                       this.parentNode.remove();
                   }
               }
           }
       }