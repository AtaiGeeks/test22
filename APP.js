// --- 1. Извлечь числа из строки ---
function extractNumbers(str) {
  return [...str].filter(ch => !isNaN(ch) && ch !== ' ').map(Number);
}

document.getElementById('extractBtn').onclick = () => {
  const input = document.getElementById('inputStr').value;
  const numbers = extractNumbers(input);
  document.getElementById('extractResult').textContent = JSON.stringify(numbers);
};

// --- 2. Рекурсивный вывод Фибоначчи с задержкой ---
function delayedFibonacci(a = 0, b = 1) {
  if (a > 144) {
    document.getElementById('fibStatus').textContent = "Фибоначчи завершены.";
    return;
  }
  document.getElementById('fibStatus').textContent = a;
  setTimeout(() => delayedFibonacci(b, a + b), 1000);
}

document.getElementById('startFib').onclick = () => {
  document.getElementById('fibStatus').textContent = "Запуск...";
  delayedFibonacci();
};

// --- 3. Запрос к fakestoreapi ---
async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Ошибка сети');
    const data = await response.json();
    data.forEach(item => console.log(item.title));
    alert("Названия товаров выведены в консоль.");
  } catch (error) {
    alert("Ошибка при загрузке данных: " + error.message);
  }
}

document.getElementById('fetchProductsBtn').onclick = fetchProducts;

// --- 7. Запрос на кастомный JSON (пример) ---
async function fetchCustomJSON() {
  try {
    const data = await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {id: 1, name: "John", age: 25},
          {id: 2, name: "Alice", age: 30}
        ]);
      }, 500);
    });
    console.log("Кастомный JSON:", data);
    alert("Кастомный JSON выведен в консоль.");
  } catch (error) {
    alert("Ошибка при запросе кастомного JSON: " + error.message);
  }
}

document.getElementById('fetchCustomJSONBtn').onclick = fetchCustomJSON;

// --- 4. Делегирование событий на кнопках цветов ---
document.querySelector('.color-buttons').addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'button') {
    const color = e.target.textContent.trim();
    document.body.style.backgroundColor = color;
  }
});

// --- 5. Кнопка показать/скрыть блок ---
const toggleBlock = document.getElementById('toggleBlock');
const toggleBlockBtn = document.getElementById('toggleBlockBtn');

toggleBlockBtn.onclick = () => {
  if (toggleBlock.style.display === 'none') {
    toggleBlock.style.display = 'inline-block';
    toggleBlockBtn.textContent = 'Скрыть блок';
  } else {
    toggleBlock.style.display = 'none';
    toggleBlockBtn.textContent = 'Показать блок';
  }
};

// --- 6. Счётчик с остановкой на 100 ---
let counterInterval = null;

document.getElementById('startCounterBtn').onclick = () => {
  let count = 0;
  const counterEl = document.getElementById('counter');

  if (counterInterval) {
    clearInterval(counterInterval);
    counterInterval = null;
    counterEl.textContent = '0';
  }

  counterInterval = setInterval(() => {
    if (count >= 100) {
      clearInterval(counterInterval);
      counterInterval = null;
    } else {
      count++;
      counterEl.textContent = count;
    }
  }, 1);
};
