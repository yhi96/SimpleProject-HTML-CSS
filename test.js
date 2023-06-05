const { Builder, By } = require('selenium-webdriver');

async function runTest() {
  // Създаване на инстанция на WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Навигиране до страницата
    await driver.get('http://127.0.0.1:5500/index.html');

    // Кликване върху бутона
    await driver.findElement(By.tagName('button')).click();

    // Проверка на съобщението
    let messageElement = await driver.findElement(By.id('message'));
    let messageText = await messageElement.getText();

    if (messageText === 'Успешно кликване') {
      console.log('Тестът премина успешно!');
    } else {
      console.log('Тестът не премина успешно.');
    }
  } finally {
    // Затваряне на браузъра
    await driver.quit();
  }
}

// Изпълнение на теста
runTest();
