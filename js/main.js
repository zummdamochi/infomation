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
  const backno = document.querySelector('.backno');
  const opinion = document.querySelector('.opinion');
  const noverlay = document.querySelector('.noverlay');
  const boverlay = document.querySelector('.boverlay');
  const ooverlay = document.querySelector('.ooverlay');
  const nclose = document.getElementById('nclose');
  const bclose = document.getElementById('bclose');
  const oclose = document.getElementById('oclose');

  notice.addEventListener('click' , () => {
    noverlay.classList.add('show');
  });

  nclose.addEventListener('click' , () => {
    noverlay.classList.remove('show');
  });
  
  backno.addEventListener('click' , () => {
    boverlay.classList.add('show');
  });
  
  bclose.addEventListener('click' , () => {
    boverlay.classList.remove('show');
  });
  
  opinion.addEventListener('click' , () => {
    ooverlay.classList.add('show');
  });

  oclose.addEventListener('click' , () => {
    ooverlay.classList.remove('show');
    });
  
}