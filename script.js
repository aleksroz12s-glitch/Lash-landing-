function sendToTelegram(e) {
  e.preventDefault();

  var name = document.getElementById('clientName').value;
  var phone = document.getElementById('clientPhone').value;
  var service = document.getElementById('clientService').value;

  // Вставьте ваш юзернейм Telegram (без знака @)
  var username = 'aleksroz12s';

  var text = 'Здравствуйте! Заявка с сайта:%0A%0A' +
             '👤 Имя: ' + encodeURIComponent(name) + '%0A' +
             '📞 Телефон: ' + encodeURIComponent(phone) + '%0A' +
             '💅 Услуга: ' + encodeURIComponent(service);

  window.location.href = 'https://t.me/' + username + '?text=' + text;
}
