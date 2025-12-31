console.log ("JS loaded successfully!");
for (var i = 0; i < filters.length; i++) {
  filters[i].onclick = function () {
    for (var j = 0; j < filters.length; j++) {
      filters[j].classList.remove("active");
    }

    this.classList.add("active");
    currentFilter = this.getAttribute("data-filter");
    drawTasks();
  };
}
confirmDeleteBtn.onclick = function () {
  if (deleteIndex > -1) {
    todos.splice(deleteIndex, 1);
  }
  closeDeleteModal();
  drawTasks();
};

function closeDeleteModal() {
  deleteModal.style.display = "none";
}
saveEditBtn.onclick = function () {
  var newText = editInput.value.trim();
  if (editIndex > -1 && newText !== "") {
    todos[editIndex].text = newText;
  }
  closeEditModal();
  drawTasks();
}
function closeEditModal() {
  editModal.style.display = "none";
}