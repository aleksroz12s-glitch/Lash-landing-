document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('clientName').value;
  const phone = document.getElementById('clientPhone').value;
  const service = document.getElementById('clientService').value;
  const status = document.getElementById('statusMessage');

  // Укажите ваш логин Telegram (без символа @):
  const myUsername = 'aleksroz12s'; 

  status.style.color = '#34d399';
  status.textContent = 'Перенаправляем в Telegram...';

  const text = `Здравствуйте! Заявка с сайта:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💅 Услуга: ${service}`;

  setTimeout(() => {
    window.location.href = `https://t.me/${myUsername}?text=${encodeURIComponent(text)}`;
  }, 400);
});
