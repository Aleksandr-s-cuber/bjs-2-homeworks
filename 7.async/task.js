class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


const alarmClock = new AlarmClock();


alarmClock.addClock('10:30', () => {
  console.log('Пора вставать!');
});


alarmClock.addClock('10:35', () => {
  console.log('Пора на работу!');
});


const now = new Date();
const nextMinute = new Date(now.getTime() + 60000); 
const hours = String(nextMinute.getHours()).padStart(2, '0');
const minutes = String(nextMinute.getMinutes()).padStart(2, '0');
const nextTime = `${hours}:${minutes}`;

alarmClock.addClock(nextTime, () => {
  console.log('Тестовый звонок!');
});


alarmClock.start();


setTimeout(() => {
  alarmClock.stop();
  console.log('Будильник остановлен');
}, 5000);
