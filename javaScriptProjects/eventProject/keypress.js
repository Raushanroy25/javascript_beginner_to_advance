const insert = document.getElementById("insert");
window,
  addEventListener("kydown", (e) => {
    insert.innerHTML = `
    <div class="color">
   s<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    </div>
    `;
  });
