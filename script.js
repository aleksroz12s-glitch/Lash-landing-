document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('clientName').value;
  const phone = document.getElementById('clientPhone').value;
  const service = document.getElementById('clientService').value;
  const status = document.getElementById('statusMessage');

  // ВСТАВЬТЕ СЮДА НОВЫЙ ТОКЕН И СВОЙ ID:
  const token = 'СЮДА_ВСТАВИТЬ_ТОКЕН_ИЗ_BOTFATHER';
  const chatId = 'СЮДА_ВСТАВИТЬ_ЧИСЛОВОЙ_ID';

  status.style.color = '#fbbf24';
  status.textContent = 'Отправка заявки...';

  const message = `🔥 Новая заявка с сайта Lash Bar!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💅 Услуга: ${service}\n⏰ Время: ${new Date().toLocaleTimeString('ru-RU')}`;

  fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)}`)
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => {
    if (response.ok) {
      status.style.color = '#34d399';
      status.textContent = '✓ Заявка принята! Мастер свяжется с вами в течение 5 минут.';
      document.getElementById('leadForm').reset();
    } else {
      status.style.color = '#f87171';
      status.textContent = 'Ошибка отправки. Пожалуйста, напишите нам в мессенджер.';
    }
  })
  .catch(error => {
    status.style.color = '#f87171';
    status.textContent = 'Ошибка сети. Попробуйте еще раз.';
  });
});
