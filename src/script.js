const billInput = document.querySelector('.bill-input');
const serviceInput = document.querySelector('.service-quality');
const guestNumberInput = document.querySelector('.quest-number');

const actionButtonCalc = document.querySelector('.action-calc');

const personBill = (bill, guestNumber) => (Math.round((bill * 10) / guestNumber)) / 10;

const calcTips = (billP, tipsPercent) => (Math.round(billP * tipsPercent * 10)) / 10;

const calcSum = (billForPerson, tips) => billForPerson + tips;

const tipP = document.querySelector('.tip-value');
const sumP = document.querySelector('.sum-value');

const calcClickHandler = () => {
  const bill = parseInt(billInput.value, 10);
  const percentOfTip = parseInt(serviceInput.value, 10) / 100;
  const guestNumber = parseInt(guestNumberInput.value, 10);

  if (bill && guestNumber) {
    const billForPerson = personBill(bill, guestNumber);
    const tipForPerson = calcTips(billForPerson, percentOfTip);
    const sumForPerson = calcSum(billForPerson, tipForPerson);

    tipP.innerText = `${tipForPerson} ₽`;
    sumP.innerText = `${sumForPerson} ₽`;
  }
};

actionButtonCalc.addEventListener('click', calcClickHandler);

const actionButtonReset = document.querySelector('.action-reset');

const resetClickHandler = () => {
  billInput.value = '';
  serviceInput.value = '0';
  guestNumberInput.value = '';
};

actionButtonReset.addEventListener('click', resetClickHandler);
