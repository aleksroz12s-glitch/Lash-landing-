document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('clientName').value;
  const phone = document.getElementById('clientPhone').value;
  const service = document.getElementById('clientService').value;
  const status = document.getElementById('statusMessage');

  // Визуальное подтверждение для демо-режима:
  status.style.color = '#34d399';
  status.textContent = '✓ Заявка принята! Мастер перезвонит в течение 5 минут.';

  // Очистка формы
  document.getElementById('leadForm').reset();

  /* 
    Для реального заказчика сюда подключается отправка в Telegram-бота:
    const token = 'ВАШ_ТОКЕН_БОТА';
    const chatId = 'ID_ЧАТА_МАСТЕРА';
    const text = `Новая запись!\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service}`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`);
  */
});
