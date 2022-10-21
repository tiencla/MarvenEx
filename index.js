const personData = [
    {
      firstName: "Joe",
      lastName: "Burrow",
      favoriteBooks: [
        "Adventure stories",
        "PZ",
        "Fantasy fiction",
        "Tarzan (Fictitious character) -- Fiction",
        "PS",
        "Jungle animals -- Fiction",
      ],
    },
    {
      firstName: "Mike",
      lastName: "Tyson",
      favoriteBooks: [
        "PZ",
        "Human-animal communication -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Fantasy literature",
        "Voyages and travels -- Juvenile fiction",
      ],
    },
    {
      firstName: "Lionel",
      lastName: "Messi",
      favoriteBooks: [
        "Mowgli (Fictitious character) -- Fiction",
        "India -- Fiction",
        "PR",
        "Jungle animals -- Fiction",
      ],
    },
    {
      firstName: "Donovan",
      lastName: "Mitchell",
      favoriteBooks: [
        "Sex differences",
        "Sexual dimorphism (Animals)",
        "QH",
        "Sexual selection in animals",
        "Evolution (Biology)",
        "Human beings -- Origin",
      ],
    },
    {
      firstName: "Serena",
      lastName: "Williams",
      favoriteBooks: [
        "Dogs -- Fiction",
        "Didactic fiction",
        "Dog owners -- Fiction",
        "Human-animal relationships -- Fiction",
        "Canada -- Fiction",
        "Animal welfare -- Fiction",
        "PS",
      ],
    },
    {
      firstName: "Chris",
      lastName: "Brown",
      favoriteBooks: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
    },
  ];
  
  const main = document.querySelector("main");
  
  // let html = "";
  // personData.forEach((arr) => {
  //   html += `
  //         <ul>
  //         <li><h1>${arr.firstName} ${arr.lastName}</h1></li>
  //             <ol>
  // <!-- So .map iterates through the array favoriteBooks using the element book-->
  //             ${arr.favoriteBooks
  //               .map((book) => {
  //                 return `<li class="books"> ${book} </li>`;
  //               }).join("")}
  // <!-- So you need .join to return a string without the comma  -->
  //             </ol>
  //         </ul>
  //         `;
  // });
  // // * Either way works
  // // main.insertAdjacentHTML('beforeend', html);
  // main.innerHTML = html;
  
  // 2nd Method
  let html = "";
  for (let i = 0; i < personData.length; i++) {
    let person = personData[i];
    html += `
        <ul>
          <li><h1>${person.firstName} ${person.lastName}</h1></li>
              <ol>
  <!-- So .map iterates through the array favoriteBooks using the element book-->
              ${person.favoriteBooks.map((book) => {
                return `<li class="books"> ${book} </li>`;
              }).join("")}
              </ol>
        </ul>
    `;
  }
  main.insertAdjacentHTML('beforeend', html);
  

  
  // function person(object) {
  //     let html = '';
  //     for (let i = 0; i < object.length; i++) {
  //         html += `
  //         <ul>
  //         <li><h1>${object[i].firstName} ${object[i].lastName}</h1></li>
  //             <ol>
  //             ${object[i].favoriteBooks.map(book => {
  //               return `<li class="books"> ${book} </li`
  //             }).join('')
  //           }
  //             </ol>
  //         </ul>
  //         `;
  //     }
  //     return html;
  // }
  // main.innerHTML = person(personData);
  