

    const input = document.querySelector("#userInput");
    const playBtn = document.querySelector("#playBtn");
    const userSquare = document.querySelector("#userSquare");
    const randomSquare = document.querySelector("#randomSquare");
    const message = document.querySelector("#message");

    function clearInput() {
      input.value = "";
    }

    playBtn.addEventListener('click', function () {
      const userValue = Number(input.value);

      if (!userValue || userValue < 1 || userValue > 100) {
        message.textContent = "Enter a number between 1 and 100.";
        return;
      }

      userSquare.textContent = userValue;
      userSquare.classList.add("flash");
      setTimeout(() => userSquare.classList.remove("flash"), 300);

      const randomNumber = Math.floor(Math.random() * 100);
      randomSquare.textContent = randomNumber;
      randomSquare.classList.add("random-flash");
      setTimeout(() => randomSquare.classList.remove("random-flash"), 300);

      if (userValue === randomNumber) {
        message.textContent = "🎉 You Won!";
        message.style.color = "lime";
        clearInput()
      } else {
        message.textContent = "❌ Try Again!";
        message.style.color = "orange";
        clearInput()
      }
    });