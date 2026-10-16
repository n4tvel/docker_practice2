document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/items")
        .then(response => {
            if (!response.ok) {
                throw new Error("Сетевая ошибка при получении данных");
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById("items-list");
            list.innerHTML = "";
            if (data.length === 0) {
                list.innerHTML = "<li>Элементы не найдены</li>";
                return;
            }
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `#${item.id}: ${item.name}`;
                list.appendChild(li);
            });
        })
        .catch(err => {
            const list = document.getElementById("items-list");
            list.innerHTML = `<li style="color: red;">Ошибка: ${err.message}</li>`;
        });
});