/* global Layzr */

const instance = Layzr();

document.addEventListener('DOMContentLoaded', () => {
  instance
    .update()
    .check()
    .handlers(true);
});

document.querySelectorAll('img').forEach((img) => {
  img.height = img.width * img.dataset.ratio;
});
