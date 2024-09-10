// ?. optional chaining     -    koliko sam skontao mnogo je bolje. Ako to sto hocu da prikazem ne postoji izbacice undefined ali ce i dalje raditi. Ako nemam ?. kontam da ce da da error.
//implicit return je ono kad u arrow funkciji imam samo jedan red. U wordu mi je to pod ARROW FUNCTION (mogu sa strl+f da nadjem)
//textContent - sets the text of a node and allows you to set or retrieve the text content of an HTML element.
//array.map()
//find()
//aria
//sort() - The sort() method converts elements of an array into strings and sorts them based on their UTF-16 code units values.

// 1. SAM URADIO OVO   
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
console.log("hi");
// 2. - pravim array sa objektima.
const allSongs = [      //Ovo su object unutar array-a. 
    {
      id: 0,
      title: "Scratching The Surface",
      artist: "Quincy Larson",
      duration: "4:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
      id: 1,
      title: "Can't Stay Down",
      artist: "Quincy Larson",
      duration: "4:15",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
      id: 2,
      title: "Still Learning",
      artist: "Quincy Larson",
      duration: "3:51",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
      id: 3,
      title: "Cruising for a Musing",
      artist: "Quincy Larson",
      duration: "3:34",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },
    {
      id: 4,
      title: "Never Not Favored",
      artist: "Quincy Larson",
      duration: "3:35",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },
    {
      id: 5,
      title: "From the Ground Up",
      artist: "Quincy Larson",
      duration: "3:12",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    },
    {
      id: 6,
      title: "Walking on Air",
      artist: "Quincy Larson",
      duration: "3:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
    },
    {
      id: 7,
      title: "Can't Stop Me. Can't Even Slow Me Down.",
      artist: "Quincy Larson",
      duration: "3:52",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
      id: 8,
      title: "The Surest Way Out is Through",
      artist: "Quincy Larson",
      duration: "3:10",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },
    {
      id: 9,
      title: "Chasing That Feeling",
      artist: "Quincy Larson",
      duration: "2:43",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },
  ];  


  // 3.
  const audio = new Audio();

  // 4. - userData object that will contain the songs, the current song playing, and the time of the current song.
  let userData = {
    songs: [...allSongs],            //... se zove spread. Step 9 u lekciji na freeCodeCamp.  https://www.w3schools.com/react/react_es6_spread.asp  Nisam siguran sto ovo radim. Ja  ovde nisam spojio vise array-a u jedan nego sam samo prakticno kopirao array sa pesmama jer 
    currentSong: null,               //To handle the current song's information and track its playback time, create a currentSong and songCurrentTime properties. Set the values to null and 0 respectively.
    songCurrentTime: 0
};


// 5. - ovo je bolji nacin za pisanje funkcija. Zove se Arrow function
const renderSongs = (array) => {        //STEP 11.    https://www.w3schools.com/js/js_arrow_function.asp    .array je moglo i bez zagrada izgleda.
  
    const songsHTML = array.map(song => {                       //song nije u zagradi(procitaj prethodni red). Kad u renderSongs pozovem userData.songs sto ce valjda izgledati ovako renderSongs(userData.songs) onda ce uraditi userData.songs.map i onda song postaje prva pesma iz songs array-a i onda vidim da u id imam song.id sto ce ustvari biti songs.id ali od prve pesme jel je to prosledjeno. I map() ce to da uradi za svaku pesmu i izbaciti ovaj li elemenat.    When you call the renderSongs function, you'll pass in the songs array inside the userData object. When you do, the function will loop through the array and build HTML for all the songs. To do this, you'll use the map() method, which you'll learn more about in the following steps.   
        return `<li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">    
        <span class="playlist-song-title">${song.title}</span>
        <span class="playlist-song-artist">${song.artist}</span>
        <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">         
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
        </li>
        `;
    }).join("");            // .join() spaja array. U zagradu moze da se ubaci separator. https://www.w3schools.com/jsref/jsref_join.asp                                                                When you call the renderSongs function, you'll pass in the songs array inside the userData object. When you do, the function will loop through the array and build HTML for all the songs. To do this, you'll use the map() method, which you'll learn more about in the following steps..

    playlistSongs.innerHTML = songsHTML;            //Ovo ce da ubaci HTML u playlistSong elemenat sto je kod mene <ul>. Videti u html-u.
}

// 6. pozivam funkciju. Ispise mi sav ovaj html. Za to sluzi ova funkcija.
renderSongs(userData?.songs);       //?. je optional chaining. Ako kad tagetujemo nesto sto je ujutar useData, u ovom slucaju .songs i napravimo gresku umesto error izbacice na undefined.


// 7. - ovde i ako lici na const petljam sa arrow finction.
const playSong = (id) => {
    const song = userData?.songs.find(song => song.id === id);      //song ime const i song unutar funkcije nemaju veze jedno sa drugim. The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.
    audio.src = song.src;                   //This tells the audio element where to find the audio data for the selected song. U audio.src .src je property koje audio ima. Ovde smo ubacili da je .src od audio jednak ovom od pesme koju ubacujemo. 
    audio.title = song.title;               //This tells the audio element what to display as the title of the song.
    
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id){        //Before playing the song, you need to make sure it starts from the beginning. This can be achieved by the use of the currentTime property of the audio object. I nisam siguran da kontam sta ovaj red znaci.    Koliko sam skontao ovako ide. Dok ni jedna pesma nije pokrenuta ima null vrednost i stavlja currentTime na nula ili ako pokrecem novu pesmu onda ima drugi id i isto krece je od pocetka. A ovo na else kaze ako pustim muziku pa opet stisnem tu istu da isto krene od pocetka.  Mislim da je sve ovo ovde default, jer kad obrisem i dalje isto radi. Tek kad pocnem currentTime da cackam ima uticaja.
        audio.currentTime = 0;
      } else {
        audio.currentTime = userData.songCurrentTime;       //Ovde nisam koristio ?.
      }

    userData.currentSong = song;            //Song varijabla mi je tu malo iznad.   Ako pustim drugu pesmu i stisnem play krenuce opet nju iz pocetka. Bez ove linije ako stisnem play krenuce prvu pesmu na listi.

    playButton.classList.add("playing");    //Ovde smo dodali clasu da bi svg valjda menjao boju.
    
    
    highlightCurrentSong();    //Ovo sam dodao u TRINAESTOM KORAKU. Sluzi da pesma koja svira trenutno ima tamniju pozadinu.
    setPlayerDisplay();     //Ovo je funkcija iz koraka 14. Ispisuje ime pesme i pevaca.
    setPlayButtonAccessibleText();    //Ovo je funkcija iz koraka 15. Jos nisam siguran cemu nam sluzi.
    audio.play();                //Gore sam promenuo audio.src i audio.title. i ovo su opcije ugradjene u new Audio method valjda.
};

// 8. - Ovo mi je sve ovde za slucaj kad stiskam play dugme. Ako nije nista pokrenuto svira prvu pesmu, a ako je nesto pokrenuto svira to sto je pokrenuto kad stisnem play. U PETOM koraku sam ubacio da mogu da pustam muziku onclick="playSong(${song.id}).
playButton.addEventListener("click", ()=>{    
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id)
  }else {
    playSong(userData?.currentSong.id)
  }
});


// 9. - pauziranje trenutne pesme.
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();                     //pause() is a method of the Web Audio API for pausing music files.
};


pauseButton.addEventListener("click", pauseSong);   //Pauzira pesmu


// 10. 
const getCurrentSongIndex = () => userData?.songs.indexOf(userData.currentSong);   //Before you start working on playing the next and previous song, you need to get the index of each song in the songs property of userData. Remember this is where you spread in the songs.


// 11. - radim na nextButton dugmetu
const playNextSong = () => {
  if (userData?.currentSong === null) {     
    playSong(userData?.songs[0].id)       //Ako ni jedna pesma ne svira trenutno onda ce next song da bude prva pesma.
  } else {
    const currentSongIndex = getCurrentSongIndex();           //Ovde izbaci poziciju pesme u array-u songs. broj
    const nextSong = userData?.songs[currentSongIndex + 1];   //Ovde izbaci koja je pesma u array-u. object
    playSong(nextSong.id);        //Ovde pozovem id od object-a i to ubaci u funkciju playSong i svira.
  }
};

nextButton.addEventListener("click", playNextSong);     //Pokrecem nextButton dugme.

// 12. - radim na previousButton dugmetu
const playPreviousSong = () => {
  if (userData?.currentSong === null) {     //Proverava da li je neka pesma pokrenuta. Ako nije return nam zavrsava funkciju.
    return;
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    playSong(previousSong.id);
  }
}

previousButton.addEventListener("click", playPreviousSong);

// 13. - If you check closely, you'd see the currently playing song is not highlighted in the playlist, so you don't really know which song is playing. You can fix this by creating a function to highlight any song that is being played.
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");       //Selektuje sve elemente sa playlist-song klasom (pogledati u songsHTML varijablu).
  const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);   //Za ovo songsHTML varijablu (gore je).

  playlistSongElements.forEach(songEl => {       //The .forEach() method is used to loop through an array and perform a function on each element of the array. For example, suppose you have an array of numbers and you want to log each number to the console.
    songEl.removeAttribute("aria-current");      //Ne kontam gde je ovo.
  });  

  if (songToHighlight) {    //Now you need to add the attribute back to the currently playing song.
    songToHighlight.setAttribute("aria-current", "true");   //setAtribute menja vrednost atributa. Npr da imam ("class", "nesto") prvo u zagradi je koji je atribut (class, id, src), a drugo je koju vrednost hocemo da postavimo.
  }
}


// 14. step 52 - Next, you need to display the current song title and artist in the player display.
const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");     //Ovaj id imam u html-u.
    const songArtist = document.getElementById("player-song-artist");     //Ovaj id imam u html-u.
    const currentTitle = userData?.currentSong?.title;        // U koraku sedam imam userData.currentSong = song; samo da pojasnim. A song je varijabla isto u tom koraku.
    const currentArtist = userData?.currentSong?.artist;

    playingSong.textContent = currentTitle ? currentTitle : "";     //Step 55. Ovde koristim ternary operator. Nisam siguran sto nisam mogao samo da stavim  playingSong.textContent = currentTitle;  mozda zato sto kad ni jedna pesma nije ukljucena ne treba nista da pise. Testiracu posle (TESTIRAO SAM I RADI OTPRILIKE ISTO. NPR AKO SKROZ GORE PROMENIM TITLE U NULU ILI NEKU DRUGU FALSY VREDNOST U OVOM SLUCAJU VRACA "" (PRAZAN STRING)). I ne znam sto nisam mogao innerText da koristim. Mada slicno rade pa sam mozda i mogao. Procitati https://www.w3schools.com/jsref/prop_node_textcontent.asp
    songArtist.textContent = currentArtist ? currentArtist : "";

};


//15. - Postavljam aria-label. nisam siguran sto ali je koristno za stranicu valjda. Ima u wordu objasnjenje. Step 58. This function will set the aria-label attribute to the current song, or to the first song in the playlist. And if the playlist is empty, it sets the aria-label to "Play".
const setPlayButtonAccessibleText = () => {             
    const song = userData?.currentSong || userData?.songs[0];       //U koraku sedam isto imam const song ali posto je unutar funkcije mogu valjda opet isto ime da koristim ali za drugu varijablu unutar druge funkcije.
    playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play");     //Ovde paziti sta je sta.
};


//16. - Step 62. This function is responsible for shuffling the songs in the playlist and performing necessary state management updates after the shuffling.
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);    //ne znam sta ovo u zagradi radi. Skontao sam. Ovde sort ako je prazno nema sta da sortira i ne menja se nista. A kad sam ubacio ovo u zagradi svakom songs doda vrednost Math.random() - 0.5. Posto je Math.ranom() = 0 - 1 kad od toga oduzmem 0.5 neki random broj ce da bude pozitivan, a neki negativan i tako sortira (od najmanjeg do najveceg valjda).
  userData.currentSong = null;                        //step 64. - When the shuffle button is pressed, you want to set the currentSong to nothing and the songCurrentTime to 0.
  userData.songCurrentTime = 0;
  renderSongs(userData?.songs);                       //Kad uradim shuffle onda unutar userData?.Songs vise nisu isto poredjane. Recimo pesma [1] postane pesma [0]. Zato je potrebno da se pozove ova funkcija da bi se pesme poredjale redom. Ako ne pozovem ovu funkciju, a stisnem shuffle u tom slucaju sve i dalje izgleda isto ali recimo kad stisnem play prvo da svira pesma [0] koja nece biti na vrhu nego negde drugne na listi(osim naravno kad smo promesali se ta pesma nije opet zadesila sa [0] pozicijom). Osto tako ako ne stisnem play nego direktno neku pesmu i onda stisnem next, sledeca pesma ce biti ta koja je sledeca na listi nego koja ima sledeci veci broj [].
  pauseSong();                                        //Kad stisnem shuffleButton zaustavi pesmu.
  setPlayerDisplay();                                 //Ovo mislim da nisam ni morao da ubacim jer kad obrisem isto radi (mislim da je to zato sto su nam u ovoj funkciji id bitni a ne redosled).
  setPlayButtonAccessibleText();                      //Ovo je da promeni aria-label.
};

shuffleButton.addEventListener("click", shuffle);


//17. - It's time to implement a delete functionality for the playlist. This would manage the removal of a song from the playlist, handle other related actions when a song is deleted, and create a Reset Playlist button.
const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {               //U 7. koraku imam userData.currentSong = song; 
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }
  userData.songs = userData?.songs.filter((song) => song.id !== id);    //Ovde proveravam da li id postoji menju id-ovima od pesama i onda pravi novi array.
  renderSongs(userData?.songs);             //Ovde ne znam sto nisam pozvao userData.songs bez ?. ali koliko sam skontao nije ni bitno, isto radi.
  highlightCurrentSong();
  setPlayButtonAccessibleText();
  if (userData.songs.length === 0){       //Step 73. Next, you need to check if the playlist is empty. If it is, you should reset the userData object to its original state.
    const resetButton = document.createElement("button");     //Ubacujem novo dugme.   CreateElement() is a DOM method you can use to dynamically create an element using JavaScript. To use createElement(), you call it, then pass in the tag name as a string:.    U CSS-u imam button kako treba da izgleda.
    const resetText = document.createTextNode("Reset Playlist");   //Ubacujem tekst za dugme valjda.    Now that you've created the button, you need to assign it a text. To do this, you need to use the createTextNode() method of DOM.
    resetButton.id = "reset";                           //Ubacujem id za dugme.
    resetButton.ariaLabel = "Reset playlist";           //Ubacujem aria-label za dugme.
    resetButton.appendChild(resetText);                 //Dodajem text iz resetText da bude child u resetButton. appendChild() lets you add a node or an element as the child of another element.
    playlistSongs.appendChild(resetButton);             //Dodajem resetButton da bude child u playlistSongs.
    resetButton.addEventListener("click", ()=>{         //Step 78. - Now, it's time to add the reset functionality to the resetButton. This will bring back the songs in the playlist when clicked. Add a click event listener to the resetButton variable. Pass in a callback using arrow syntax and leave it empty for now.
      userData.songs = [...allSongs];             //Posto kad obrisem sve pesme userData.songs ostaje prazno. Ovako ih vraim nazad. Ali cu morati opet da pozovem renderSongs().
      renderSongs(userData?.songs);     //Ponovo ispise sve pesme.
      setPlayButtonAccessibleText();    //Ubaci aria-label.
      resetButton.remove();             //Skloni resetButton Button.  I da nisam ubacio ovo izgleda da ga samo obrise posto kad se vrate sve pesme ne zadovoljava vise if statement. Ali je valjda dobro izbaciti za svaki slucaj.
    })       
  }  
};


//18. 
audio.addEventListener("ended", ()=>{        //Ovo je event listener koji slusa kad se pesma zavrsila.
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;         //Ovo je truthy or falsy. Proveravam da li postoji pesma sa indexom vecim za jedan od trenutne pesme.
    if (nextSongExists) {                                   // E jebem mu i ovo je truthy or falsy.
      playNextSong();
    } else {
      userData.currentSong = null;        //Ako nema sledece pesme upisuje ove podatke i onda ako stisnem play krene od prve pesme.
      userData.songCurrentTime = 0;

      pauseSong();                        //nisam siguran sto sam pozvao ove cetiri funkcije ovde. Osim cisto da se osiguram da ne bude neki bug.
      setPlayerDisplay();
      highlightCurrentSong();
      setPlayButtonAccessibleText();
    }
});     











// SEDAMNAESTO - 
// Delete song je nakaceno na button u 5. koraku. U if statementu pise da ako na pesmi koja trenutno svira stisnem x 
// onda ce odraditi ovo ispod.
// A ovo ispod znaci sledece. Filter aktiviram tek kad kliknem i onda userData?.songs.filter uporedjuje sve pesme sa stisnutom 
// pesmom. Gore sam u 5. koraku ubacio onclick="deleteSong(${song.id})". Tu je song-u prosledjeno songs jer se to desava u toj
// renderSongs funkciji. Filter izdvaja elemente koji zadovoljavaju uslove. Tako da sam umesto !== stavio === ostala bi samo 
// ta pesma koju sam stisnuo kad stisnem. Ovako sa !== ostaju sve osim stisnute, sto izgleda kao da sam obisao.
// i onda odradin renerSongs da bi i vizualno bilo izbaceno.


// PETNAESTO -
// Drugi red govori da je const song = userData?.currentSong ako neka pesma svira ili ako ni jedna pesma nije 
// jos pokrenuta (currentSong: null, pise skroz gore) onda je const song = userData?.songs[0]; 
// Onda ubacuje aria-label. Ako song?.title postoji ispisuje `Play ${song.title}`, a ako pesma nema title ispisuje "Play"


// TRINAESTO - 
// Ovde sam prvo nasao sve elemente koji imaju clasu .playlist-song (to moze da se vidi u petom koraku).
// Onda sam nasao elemente koji imaju id song-"broj pesme koja je" ( znaci song-0, song-1,...).
// Onda sam sa forEach metodom uklonio sve aria-current atribute mada dok nista ne pokrenem aria-current atribut i ne 
// postoji(posle cu objasniti sta radi). Njega tek dodam sa ovim if statementom koji je truthy i onda doda drugu boju 
// pozadine (ima u CSS-u aria-current="true"). Ovde setAttribute sluzi da zamenimo vrednost atributa (procitati 
// na googlu sta radi) ali posto ni nemamo aria-current da bi mogli da ga promenimo u tom slucaju setAttribute doda taj 
// atribut (posto ne postoji da bi ga zamenuo). Tako da pesma koja svira dobije drugu boju pozadine ali kad predjemo na sledecu
// obrise se boja pozadine sa te koja je svirala i pojavi se na sledecoj (obrise se zbog onog remove u forEach i to je 
// objasnjenje za ono od pre.)
// Koliko sam skontao ovde je ovo aria-current bilo od koristi jer je dodatni atribut koji mozemo da koristimo.
// da sam tamo u removeAttribute uklonio class sklonilo bi mi sve clase, a ovako je sklonilo nesto sto i ne postoji. 
// Ali mogao bi da procitam sta tacno radi jer ima vese opcija.


// PETO -
// onclick="playSong(${song.id})" sam dodao posle 8. koraka.  
// onclick="deleteSong(${song.id})" sam dodao posle 17. koraka.

