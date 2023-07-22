const imgArray = [
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    discription: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    discription: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    discription: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    discription: "Dog hanging out",
  },
];

imgArray.map(element => {
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = `<div class="m-5px"></div>
        <ul>
            <li class="img-card card">
                <img src="${imgArray.image}"
                    alt="${imgArray.discription}" class="img-src">
            </li>
        </ul>
        </div>`;
  document.getElementById("all-post")[0].appendChild(cardDiv);
})