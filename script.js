const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}

const galleryItems=[...document.querySelectorAll('.gallery-item')];
const loadMore=document.getElementById('loadMore');
if(loadMore){loadMore.addEventListener('click',()=>{galleryItems.forEach(i=>i.style.display='block');loadMore.closest('.gallery-more').style.display='none';});}

const lightbox=document.getElementById('lightbox');
const lightboxImg=lightbox?.querySelector('img');
const close=lightbox?.querySelector('.lightbox-close');
document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{if(!lightbox)return;lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}
close?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.service-card,.gallery-item,.steps>div,.contact-line').forEach(el=>observer.observe(el));
