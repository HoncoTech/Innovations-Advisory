const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav-links');
if(toggle) toggle.addEventListener('click',()=>{ nav.style.display = nav.style.display==='flex'?'none':'flex'; });

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    if(window.innerWidth<768) nav.style.display='none';
  });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('contact-status');
if(form) {
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    status.textContent='Sending…';
    try {
      const data = new FormData(form);
      const res = await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
      if(res.ok) { form.reset(); status.textContent='Thank you! We will reply soon.'; }
      else { status.textContent='Something went wrong. Please email us directly.'; }
    } catch(err) { status.textContent='Network error. Try again later.'; }
  });
}
