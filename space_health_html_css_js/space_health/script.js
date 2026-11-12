const buttons=[...document.querySelectorAll('.nav')];
const pages=[...document.querySelectorAll('.page')];
const titles={home:'نظرة عامة',readings:'القراءات الصحية',alerts:'التنبيهات',watch:'الساعة الذكية'};
const toast=document.getElementById('toast');
function notify(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2500)}
function go(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));buttons.forEach(b=>b.classList.toggle('active',b.dataset.page===id));document.getElementById('title').textContent=titles[id];window.scrollTo({top:0,behavior:'smooth'})}
buttons.forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.goto)));
document.getElementById('clear').addEventListener('click',()=>{document.querySelectorAll('.unread').forEach(x=>x.classList.remove('unread'));document.getElementById('badge').hidden=true;notify('تم تحديد التنبيهات كمقروءة')});
let connected=false;
document.getElementById('connect').addEventListener('click',()=>{connected=!connected;document.getElementById('watchState').textContent=connected?'● متصلة (حالة تجريبية)':'● غير متصلة';document.getElementById('connect').textContent=connected?'إلغاء حالة الاتصال التجريبية':'تجربة تغيير حالة الاتصال';notify(connected?'تم تفعيل حالة الاتصال التجريبية فقط':'تم إلغاء حالة الاتصال التجريبية')});
