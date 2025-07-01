const form = document.getElementById('ageForm');
const result = document.getElementById('result');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; 
  const year = parseInt(document.getElementById('year').value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    day < 1 || day > 31 ||
    month < 0 || month > 11 ||
    year > today.getFullYear() ||
    birthDate > today ||
    birthDate.getDate() !== day || birthDate.getMonth() !== month || birthDate.getFullYear() !== year
  ) {
    errorMsg.textContent = "❗ Please enter a valid past date.";
    result.innerHTML = "";
    return;
  }

  errorMsg.textContent = "";

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  result.innerHTML = `
    🎉 You are <strong>${years}</strong> years,
    <strong>${months}</strong> months, and
    <strong>${days}</strong> days old.
  `;
});
