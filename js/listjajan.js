const toggleButton1 = document.getElementById('toggleButton1');
const toggleButton2 = document.getElementById('toggleButton2');
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

toggleButton1.addEventListener('click', function() {
  list1.style.display = 'block';
  list2.style.display = 'none';
});

toggleButton2.addEventListener('click', function() {
  list1.style.display = 'none';
  list2.style.display = 'block';
});
