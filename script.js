console.log("JS loaded successfully!");
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
