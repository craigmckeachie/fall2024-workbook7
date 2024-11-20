"use strict";

let songs = [
  {
    songID: 1,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    year: 2020,
    genre: "Pop",
    durationInSeconds: 203,
  },
  {
    songID: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    year: 2019,
    genre: "Synthpop",
    durationInSeconds: 200,
  },
  {
    songID: 3,
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    year: 2021,
    genre: "Pop Punk",
    durationInSeconds: 178,
  },
  {
    songID: 4,
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*ck Love 3: Over You",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 141,
  },
  {
    songID: 5,
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "Montero",
    year: 2021,
    genre: "Pop Rap",
    durationInSeconds: 137,
  },
  {
    songID: 6,
    title: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    year: 2021,
    genre: "R&B",
    durationInSeconds: 198,
  },
  {
    songID: 7,
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 242,
  },
  {
    songID: 8,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    year: 2020,
    genre: "Synthpop",
    durationInSeconds: 215,
  },
  {
    songID: 9,
    title: "Kiss Me More",
    artist: "Doja Cat feat. SZA",
    album: "Planet Her",
    year: 2021,
    genre: "R&B",
    durationInSeconds: 208,
  },
  {
    songID: 10,
    title: "Industry Baby",
    artist: "Lil Nas X, Jack Harlow",
    album: "Montero",
    year: 2021,
    genre: "Hip Hop",
    durationInSeconds: 212,
  },
  {
    songID: 11,
    title: "Butter",
    artist: "BTS",
    album: "Butter",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 165,
  },
  {
    songID: 12,
    title: "Deja Vu",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 224,
  },
  {
    songID: 13,
    title: "Bad Habits",
    artist: "Ed Sheeran",
    album: "=",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 231,
  },
  {
    songID: 14,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    year: 2020,
    genre: "Indie Pop",
    durationInSeconds: 238,
  },
  {
    songID: 15,
    title: "Levitating (feat. DaBaby)",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    year: 2020,
    genre: "Pop",
    durationInSeconds: 203,
  },
  {
    songID: 16,
    title: "Shivers",
    artist: "Ed Sheeran",
    album: "=",
    year: 2021,
    genre: "Pop",
    durationInSeconds: 207,
  },
  {
    songID: 17,
    title: "Cold Heart (PNAU Remix)",
    artist: "Elton John, Dua Lipa",
    album: "The Lockdown Sessions",
    year: 2021,
    genre: "Dance",
    durationInSeconds: 204,
  },
  {
    songID: 18,
    title: "You Right",
    artist: "Doja Cat, The Weeknd",
    album: "Planet Her",
    year: 2021,
    genre: "R&B",
    durationInSeconds: 185,
  },
  {
    songID: 19,
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    album: "Happier Than Ever",
    year: 2021,
    genre: "Alternative",
    durationInSeconds: 298,
  },
  {
    songID: 20,
    title: "My Universe",
    artist: "Coldplay, BTS",
    album: "Music of the Spheres",
    year: 2021,
    genre: "Pop Rock",
    durationInSeconds: 228,
  },
];

//for loop
for (let index = 0; index < songs.length; index++) {
  const song = songs[index];
  console.log(song);
}

//for of loop
//singular of plural (array)
for (const song of songs) {
  console.log(song);
}


//for each with anonymous function
songs.forEach(function (song) {
  console.log(song);
});

//for each with an arrow function
songs.forEach((song) => {
  console.log(song);
});
