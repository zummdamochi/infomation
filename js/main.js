'use strict';

{
  const body = document.querySelector('body');

  const answer = confirm('製作中です...。サイトを見ますか？');
  if (answer) {
    body.classList.remove('hidden');
 } else {
    body.classList.add('hidden');
  }
  
  const notice = document.querySelector('.notice');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  notice.addEventListener('click' , () => {
    overlay.classList.add('show');
  });

  close.addEventListener('click' , () => {
    overlay.classList.remove('show');
  });

}