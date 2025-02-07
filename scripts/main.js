function updateCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTimeString = `${hours}:${minutes}`;
  document.getElementById("currentTime").textContent = currentTimeString;

  const dayOfWeek = now.getDay();
  const dayOfWeekString = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ][dayOfWeek];

  // Получаем дату месяца и форматируем её
  const monthDay = now.getDate();
  const monthDayString = String(monthDay).padStart(2, "0");

  // Получаем название месяца
  const month = now.toLocaleDateString("ru-RU", { month: "short" });

  // Формируем итоговую строку
  const currentDayString = `${dayOfWeekString}, ${monthDayString} ${month}`;

  // Выводим результат
  document.getElementById("currentDay").textContent = currentDayString;
}

// Обновляем время сразу при загрузке страницы
updateCurrentTime();

const now = new Date();
const delayUntilNextMinute = (60 - now.getSeconds()) * 1000;

// Запускаем обновление через задержку и затем каждую минуту
setTimeout(() => {
  updateCurrentTime(); // Обновляем сразу в начале минуты
  setInterval(updateCurrentTime, 60000); // Затем каждую минуту
}, delayUntilNextMinute);

document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("main");
  const chatContainer = document.getElementById("chat");
  const footerContainer = document.getElementById("footer");
  const startButton = document.querySelector(".startButton");
  let currentStep = 1; // Текущий шаг в диалоге

  // Показываем блок main и прокручиваем к первому сообщению
  startButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    mainContainer.style.display = "flex"; // Показываем блок main
    footerContainer.style.display = "flex";
    scrollBy({ top: 500, behavior: "smooth" });
    startButton.classList.add("fade-out");
  });

  // Функция для добавления нового сообщения и кнопки
  function addMessage(sender, content, buttonText) {
    // Создаем новое сообщение
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    if (sender === "Кристина") {
      messageDiv.classList.add("align__right");
    }

    const senderDiv = document.createElement("div");
    senderDiv.className = "sender";
    if (sender === "Кристина") {
      senderDiv.classList.add("align__right");
    }
    senderDiv.textContent = sender;

    const contentP = document.createElement("p");
    contentP.className = "content";
    contentP.innerHTML = content;

    messageDiv.appendChild(senderDiv);
    messageDiv.appendChild(contentP);

    // Добавляем сообщение в чат
    chatContainer.appendChild(messageDiv);

    // Дополнительная прокрутка на 100px вниз
    setTimeout(() => {
      window.scrollBy({ top: 320, behavior: "smooth" });
    }, 250); // Задержка для плавности

    // Если есть текст для кнопки, создаем кнопку
    if (buttonText) {
      const buttonLink = document.createElement("a");
      buttonLink.className = "button__link";

      const buttonDiv = document.createElement("div");
      buttonDiv.className = "button";

      const buttonTextP = document.createElement("p");
      buttonTextP.className = "button__text";
      buttonTextP.textContent = buttonText;

      buttonDiv.appendChild(buttonTextP);
      buttonLink.appendChild(buttonDiv);
      buttonDiv.classList.add("fade-in");

      // Добавляем обработчик события на новую кнопку
      buttonLink.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        // Добавляем класс для анимации исчезновения
        buttonLink.classList.add("fade-out");

        handleButtonClick();

      });

      // Добавляем кнопку в чат
      chatContainer.appendChild(buttonLink);
    }
  }

  function handleButtonClick() {
    if (currentStep === 1) {
      const messages = [
        { sender: "Кристина", content: "Кто там?", buttonText: null },
        { sender: "Аноним", content: "Это же я, Нюх-нюх!", buttonText: "Извинись" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 2) {
      const messages = [
        { sender: "Кристина", content: "Ой, извинись! Я тебя не узнала...", buttonText: null },
        { sender: "Кристина", content: "Что случилось?", buttonText: null },
        { sender: "Нюх-нюх", content: "Да так...", buttonText: null },
        { sender: "Нюх-нюх", content: "Гулял, думал о жизни...", buttonText: null },
        { sender: "Нюх-нюх", content: "В первую очередь о тебе!", buttonText: null },
        { sender: "Нюх-нюх", content: "И вдруг понял...", buttonText: "Что понял?" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 3) {
      const messages = [
        { sender: "Кристина", content: "Что понял?", buttonText: null },
        { sender: "Нюх-нюх", content: "Что у меня есть любимое число.", buttonText: "Правда?" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 4) {
      const messages = [
        { sender: "Кристина", content: "Правда?", buttonText: null },
        { sender: "Кристина", content: "А что за число?", buttonText: null },
        { sender: "Нюх-нюх", content: "Ну как же!", buttonText: null },
        { sender: "Нюх-нюх", content: "1749!", buttonText: "Почему?" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 5) {
      const messages = [
        { sender: "Кристина", content: "Почему 1749?", buttonText: null },
        { sender: "Нюх-нюх", content: "Потому что в связи с вот этими вот...", buttonText: "Ты ушел..." },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 6) {
      const messages = [
        { sender: "Кристина", content: "Ты ушел сюда?", buttonText: null },
        { sender: "Нюх-нюх", content: "Получается вот так..", buttonText: "А титаника..." },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 7) {
      const messages = [
        { sender: "Кристина", content: "А титаника вот так?", buttonText: null },
        { sender: "Нюх-нюх", content: "Получается вот так..", buttonText: null },
        { sender: "Нюх-нюх", content: "А я сидел вот так..", buttonText: null },
        { sender: "Кристина", content: "Чеки вот...", buttonText: null },
        { sender: "Нюх-нюх", content: "А это вот...", buttonText: "Смешно" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 8) {
      const messages = [
        { sender: "Кристина", content: "Смешно :)", buttonText: null },
        { sender: "Нюх-нюх", content: "Ага, старый мем :)", buttonText: null },
        { sender: "Нюх-нюх", content: "В общем я решил заглянуть к тебе...", buttonText: null },
        { sender: "Нюх-нюх", content: "Чтобы поздравить...", buttonText: null },
        { sender: "Нюх-нюх", content: "С 8 марта, Кристина!", buttonText: null },
        { sender: "Нюх-нюх", content: "Пусть сегодня твой день будет наполнен радостью, эмоциями и теплом!", buttonText: null },
        { sender: "Нюх-нюх", content: "", buttonText: "Спасибо!" },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    } else if (currentStep === 9) {
      const messages = [
        { sender: "Кристина", content: "Ой, спасибо!", buttonText: null },
        { sender: "Кристина", content: "Ты меня смущаешь...", buttonText: null },
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(msg.sender, msg.content, msg.buttonText);
        }, (index + 1) * 1000); // Задержка увеличивается на 1 секунду для каждого сообщения
      });

      currentStep++;
    }
  }

  // Назначаем обработчик на первую кнопку
  const firstButton = document.getElementById("firstButton");
  firstButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    firstButton.classList.add("fade-out");
    handleButtonClick();
  });
});
