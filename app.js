 console.log('HEllo JS');

 const itemi = document.querySelector('.item')

 const placeholders =document.querySelectorAll('.placeholder')

 for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover',dragover)
   placeholder.addEventListener('dragenter',dragenter)
   placeholder.addEventListener('dragleave',dragleave)
   placeholder.addEventListener('drop',drop)
 }


 itemi.addEventListener('dragstart', dragstart);
 itemi.addEventListener('dragend', dragend);


 function dragstart(event) {
   console.log('dragstart', event.target)
   event.target.classList.add('hold');
   setTimeout(() => event.target.classList.add
   ('hide'), 0)
 }

 function dragend(event) {
   console.log('dragend')
   event.target.className = 'item'
  //  event.target.classList.remove('hold');
 }

 function dragover(event){
   event.preventDefault()
 }

 function dragenter(event){
   event.target.classList.add('hovered')
}

function dragleave(event){
  event.target.classList.remove('hovered')

}

function drop(event){
  event.target.classList.remove('hovered')
  event.target.append(itemi)
}
