let songs = [
  { title: "Hermoso Cariño", youtube: "" },
  { title: "Mariachi Loco", youtube: "" },
  { title: "Caminos de Michoacan", youtube: "" },
  { title: "Cuatro Milpas", youtube: "" },
  { title: "Tres Regalos", youtube: "" },
  { title: "Sabor a Mi", youtube: "" },
  { title: "Son de la Negra", youtube: "" },
  { title: "Caminos de Guanajuato", youtube: "" },
  { title: "La Madrugada", youtube: "" },
  { title: "Linda Esposa", youtube: "" },
  { title: "Mariquita", youtube: "" },
  { title: "Alta y Delgadita", youtube: "https://www.youtube.com/watch?v=nhB3szu9Nfk" },
  { title: "Bésame Mucho", youtube: "" },
  { title: "Amor Eterno", youtube: "" },
  { title: "Solamente Una Ves", youtube: "" },
  { title: "Si No Dejan", youtube: "" },
  { title: "No Llega el Olvido", youtube: "" },
  { title: "Que Chulos Ojos", youtube: "" },
  { title: "Camino Real de Colima", youtube: "" },
  { title: "Serenata Huasteca", youtube: "" },
  { title: "El Muchacho Alegre", youtube: "" },
  { title: "Sonora y Sus Ojos Negros", youtube: "" },
  { title: "Motivos", youtube: "" },
  { title: "El Árbol", youtube: "" },
  { title: "No me se Rajar", youtube: "" },
  { title: "Adios Amor", youtube: "" },
  { title: "Cuando Sale la Luna", youtube: "" },
  { title: "El Rey", youtube: "" },
  { title: "La Bikina", youtube: "" },
  { title: "Cruz de Olvido", youtube: "" },
  { title: "Mujeres Divinas", youtube: "" },
  { title: "Novia Mia", youtube: "" },
  { title: "Como han pasado los años", youtube: "" },
  { title: "La Marcha de Zacatecas", youtube: "" }
];

// Sort alphabetically by title
let sortedSongs = songs.sort((a, b) => a.title.localeCompare(b.title));

let list = document.getElementById("songList");
let ul = document.createElement('ul');
ul.className = 'responsive-list';

sortedSongs.forEach(song => {
  let li = document.createElement('li');

  if (song.youtube) {
    let span = document.createElement('span');
    span.textContent = song.title;
    span.className = 'clickable-song';
    span.onclick = () => window.open(song.youtube, '_blank');
    li.appendChild(span);
  } else {
    li.textContent = song.title;
  }

  ul.appendChild(li);
});

list.appendChild(ul);
