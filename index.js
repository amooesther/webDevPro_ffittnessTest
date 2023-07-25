function changeColor(index) {
  const names = document.querySelectorAll('.name');
  const pictures = document.querySelectorAll('.picture');

  // Generate random colors for background and text
  const randomBackgroundColor = getRandomColor();
  let randomTextColor = getRandomColor();
  while (randomTextColor === randomBackgroundColor) {
    randomTextColor = getRandomColor(); // Ensure text color is different from background color
  }

  // Change background color of the clicked picture
  pictures[index - 1].style.backgroundColor = randomBackgroundColor;

  // Change text color of the clicked name
  names[index - 1].style.color = randomTextColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
