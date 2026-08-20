// Lightweight enhancement for external links.
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.addEventListener('click',()=>{a.setAttribute('data-visited','true')}));
