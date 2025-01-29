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

// Затем обновляем каждую секунду
setInterval(updateCurrentTime, 1000);

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

    // Прокручиваем к первому сообщению в чате
    const firstMessage = document.querySelector(".message");
    if (firstMessage) {
      firstMessage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

      // Добавляем обработчик события на новую кнопку
      buttonLink.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        handleButtonClick();
        buttonLink.remove(); // Удаляем кнопку после нажатия

        // Прокручиваем к первому сообщению после текущего
        const nextMessage = messageDiv.nextElementSibling;
        if (nextMessage && nextMessage.classList.contains("message")) {
          nextMessage.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      // Добавляем кнопку в чат
      chatContainer.appendChild(buttonLink);
    }
  }

  // Обработчик нажатия на кнопку
  function handleButtonClick() {
    if (currentStep === 1) {
      // Первый шаг: добавляем ответ Кристины и новое сообщение
      addMessage("Кристина", "Кто там?", null);
      addMessage("Аноним", "Это же я, Нюх-нюх!", "Ой, извинись.");
      currentStep++;
    } else if (currentStep === 2) {
      // Второй шаг: добавляем ответ Кристины и новое сообщение
      addMessage("Кристина", "Извинись! Я тебя не узнала.", null);
      addMessage("Кристина", "Как ты?", null);
      addMessage("Нюх-нюх", "Я в порядке!", null);
      addMessage("Нюх-нюх", "Хотел тебе кое-что сказать...", "И что же?");
      currentStep++;
    } else if (currentStep === 3) {
      // Третий шаг: добавляем ответ Кристины и новое сообщение
      addMessage("Кристина", "И что же?", null);
      addMessage("Нюх-нюх", "Ты должна мне 1749 поцелуев.", "Почему?");
      currentStep++;
    } else if (currentStep === 4) {
      // Третий шаг: добавляем ответ Кристины и новое сообщение
      addMessage("Кристина", "Почему?", null);
      addMessage("Нюх-нюх", "Почему 1749?", null);
      addMessage("Нюх-нюх", "Потому что в связи с вот этими вот...", null);
      addMessage("Нюх-нюх", "...я ушел сюда.", null);
      addMessage("Нюх-нюх", "Получается вот так...", null);
      addMessage("Нюх-нюх", "...а титаника вот так.", null);
      addMessage("Нюх-нюх", "Получается вот так...", null);
      addMessage("Нюх-нюх", "...а я сидел вот так.", null);
      addMessage("Нюх-нюх", "Чеки вот...", null);
      addMessage("Нюх-нюх", "...а это вот!", "Что!?");
      currentStep++;
    }
    // Добавьте больше шагов по аналогии...
  }

  // Назначаем обработчик на первую кнопку
  const firstButton = document.getElementById("firstButton");
  firstButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    handleButtonClick();
    firstButton.remove(); // Удаляем первую кнопку после нажатия
    // Прокручиваем к первому сообщению после текущего
    const nextMessage = document.querySelector(".message");
    if (nextMessage) {
      nextMessage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
