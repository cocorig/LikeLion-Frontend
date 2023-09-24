function calendar(newYear, newMonth) {
  // 특정 년, 월의 시간 정보를 조회
  const time = new Date(newYear, newMonth - 1);
  const dayLength = new Date(newYear, newMonth, 0).getDate();

  let year = time.getFullYear(),
      month = time.getMonth(),
      date = time.getDate(),
      day = time.getDay();

  const captionYear = document.querySelector('.year');
  const captionMonth = document.querySelector('.month');
  const days = document.querySelectorAll('tr td');


  for (let i = 0; i < days.length; i++) {
      days[i].textContent = '';
  }

  for (let i = day; i < day + dayLength; i++) {
      days[i].textContent = date++;
  }

  captionYear.textContent = year;
  captionMonth.textContent = month + 1;

}

let year = new Date().getFullYear(),
  month = new Date().getMonth() + 1;

calendar(year, month);

const btns = document.querySelectorAll('button');
btns.forEach((item) => {
  item.addEventListener('click', () => {
      item.classList.contains('prev') ? calendar(year, --month) : calendar(year, ++month);
  });
})
