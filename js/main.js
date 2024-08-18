$("div[name=click]").on("click", () => {
  document.querySelector("div[name=click]").style.display = "none";
  setTimeout(() => {
    document.querySelector("div#submenu").style.display = "flex";
    document.querySelector("div#submenu").style.right = "50px";
  }, 300);
});
$("div[name=close]").on("click", () => {
  document.querySelector("div#submenu").style.display = "none";
  document.querySelector("div#submenu").style.right = "-100%";
  setTimeout(() => {
    document.querySelector("div[name=click]").style.display = "block";
  }, 300);
});
const addUser = async () => {
  let firstName = document.querySelector("input[name=firstName]").value;
  let lastName = document.querySelector("input[name=lastName]").value;
  let email = document.querySelector("input[name=email]").value;
  let phone = document.querySelector("input[name=phone]").value;
  await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    }),
  });
  firstName = "";
  lastName = "";
  email = "";
  phone = "";
};
$("input[name=register]").on("click", () => {
  addUser();
});
const getData = async () => {
  let response = await fetch("http://localhost:3000/musics");
  let data = await response.json();
  let hmtl1 = "";
  let id = 0;
  let html2 = "";
  data.forEach((elem) => {
    hmtl1 += `<li>
    <h1>${elem.title}</h1>
    <p>${elem.body}</p>
    </li>`;
    html2 += `<img src="${elem.img}" alt="music" id=${id} class="musicImage" />`;
    id += 1;
  });
  document.querySelector("div#list>ul").innerHTML = hmtl1;
  html2 += `<marquee behavior="smooth" direction="rtl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nesciunt temporibus deleniti quae et, id labore omnis nemo aliquam expedita ex blanditiis culpa rem modi esse laudantium deserunt doloribus? Praesentium!</marquee> <div></div><div></div> <div><div name="forward">next</div>
  </div>`;
  document.querySelector("div#design").innerHTML = html2;
  let target = document.querySelectorAll("div#design>img");
  let images = [...target];
  let count = 3;
  document.querySelector("div#design").addEventListener("click", (elem) => {
    let name = elem.target.getAttribute("name");
    if (name === "forward") {
      console.log("hi");
      images.forEach((elem) => {
        if (count === 4) {
          count -= 1;
          console.log(count);
          elem.className = "fadeImage";
        } else {
          count -= 1;
          console.log(count);
          elem.className = "fadeImage";
        }
        if (count === -1) {
          console.log("nah");
          count += 5;
          console.log(images);

          images.forEach((elem) => {
            console.log(elem);
            elem.className = "";
          });
        }
      });
    }
  });

  return images;
};
let img = getData();
