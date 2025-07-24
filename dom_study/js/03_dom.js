const addbtn = document.querySelector(".add-btn");
let count = 1;

addbtn.onclick = () => {
  const inputName = document.querySelector("#input-name");

  if (inputName.value === "") {
    alert("이름이 빈칸입니다.");
    return;
  }

  const inputAge = document.querySelector("#input-age");

  if (inputAge.value === "") {
    alert("나이가 빈칸입니다.");
    return;
  }

  const inputAddress = document.querySelector("#input-address");

  if (inputAddress.value === "") {
    alert("주소가 빈칸입니다.");
    return;
  }

  const table = document.querySelector(".table");

  table.innerHTML += `<tr>
        <td>${count}</td>
        <td>${inputName.value}</td>
        <td>${inputAge.value}</td>
        <td>${inputAddress.value}</td>
        </tr>`;

  count++;

  (inputName.value = ""), (inputAge.value = ""), (inputAddress.value = "");
};
