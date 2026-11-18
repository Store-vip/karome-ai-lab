const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const outputs = {
  curious: 'حوّل السؤال إلى سلسلة لقطات: لاعب يكتشف أن كل مرحلة من اللعبة تفتح سؤالاً جديداً عن نفسه.',
  bold: 'ابنِ الفكرة كإعلان من المستقبل: اللعبة لا تعطيك شخصية، بل تعكس الشخصية التي جلبتها معك.',
  calm: 'احكِ القصة من لحظة هادئة: شاشة، نفس عميق، ثم عالم صغير يبدأ بالحركة من حول اللاعب.'
};
let mood = 'curious';
$$('.mood').forEach((button) => button.addEventListener('click', () => {
  $$('.mood').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  mood = button.dataset.mood;
}));
$('#runLab').addEventListener('click', () => {
  const output = $('#labOutput');
  const prompt = $('#promptInput').value.trim() || 'فكرة جديدة';
  output.innerHTML = '<div class="output-label">OUTPUT / PROCESSING</div><p>نرتّب الإشارة ونبحث عن اتجاه...</p><div class="output-tags"><span>thinking</span><span>01 / 03</span></div>';
  setTimeout(() => {
    output.innerHTML = `<div class="output-label">OUTPUT / ${mood.toUpperCase()}</div><p>${outputs[mood]} <small style="color:#80788c">(${prompt.slice(0, 32)}...)</small></p><div class="output-tags"><span>human-led</span><span>prototype</span></div>`;
  }, 850);
});
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
$$('.reveal').forEach((element) => observer.observe(element));

