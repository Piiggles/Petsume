// JavaScript
const imgArray = [
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    description: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    description: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    description: "Dog hanging out",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg",
    title: "dog",
    description: "Dog hanging out",
  },
];

imgArray.map((element) => {
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
    <div class="m-5px">
        <ul>
            <li class="img-card card">
                <img src="${element.image}" alt="${element.description}" class="img-src">
            </li>
        </ul>
    </div>`;
  document.getElementById("all-post").appendChild(cardDiv);
});
