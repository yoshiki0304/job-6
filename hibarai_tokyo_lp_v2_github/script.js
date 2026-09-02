document.querySelectorAll(".faq-item button").forEach(btn=>{
  btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open"));
});
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
