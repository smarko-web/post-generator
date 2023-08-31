const formCard = document.querySelector('.form-card');
const postCard = document.querySelector('.post-card');
const form = document.querySelector('form');
const post = document.querySelector('#post');
const addSongButton = document.querySelector('.add-song');
const worshipLeaderContainer = document.querySelector('.worship-leader-form-container');
const worshipLeader = document.querySelector('#worship-leader');
const songSpecialSinger = document.querySelector('#song-special-singer');
const songSpecialSong = document.querySelector('#song-special-song');
const jimmySong = document.querySelector('#jimmy-special');
const preacher = document.querySelector('#preacher-list');

var url, message; 
const singerList = ['Robin Herd', 'Randy Knaps', 'Joseph Larson', 'Grace Larson Brumley', 'Jill Swaggart', 'Tara Montpetit', 'Kim Coleman', 'BJ Pons', 'FWC choir and singers', 'FWC singers'];
const preacherList = ['Jimmy Swaggart', 'Donnie Swaggart', 'Gabriel Swaggart', 'Loren Larson', 'Mike Muzzerall', 'David Smith', 'Dale Usey', 'Dr. Don Paul Gray', 'Paris Ragan', 'Shaun Murphy', 'Jonathan Steele', 'Dr. Dave Watts',
'Dr. Jimmy DuPree'];

for(var i = 0; i < singerList.length - 1; i++) {
    var option = document.createElement('option');
    var optionName = document.createTextNode(singerList[i]);
    option.appendChild(optionName);
    worshipLeader.insertBefore(option, worshipLeader.lastChild);
}
for(var i = 0; i < singerList.length; i++) {
    var option = document.createElement('option');
    var optionName = document.createTextNode(singerList[i]);
    option.value = singerList[i];
    option.appendChild(optionName);
    songSpecialSinger.insertBefore(option, songSpecialSinger.lastChild);
}

// console.log(songSpecialSinger.value);
for(var i = 0; i < preacherList.length; i++) {
    var option = document.createElement('option');
    var optionName = document.createTextNode(preacherList[i]);
    option.appendChild(optionName);
    preacher.insertBefore(option, preacher.lastChild);
}

// console.log(jimmySong.parentNode)

const songSingerList = {};
form.addEventListener('click', (e) => {
    // var songs = {songSpecialSinger.value : songSpecialSong.value };
    // console.log(songs);

    const target = e.target; 
    const event = e;
    // console.log(target.nodeName, target.type);
    if (target.nodeName === 'BUTTON' && target.type === 'button' && (songSpecialSong.value != '')) {
        const singer = songSpecialSinger.value;
        const song = songSpecialSong.value;
    
        if (songSingerList.hasOwnProperty(singer)) {
          // Singer already exists in the list, add the song to their array
          songSingerList[singer].push(song);
          console.log(`Added "${song}" to ${singer}'s songs`);
        } else {
          // Singer doesn't exist, create a new array for them
          songSingerList[singer] = [song];
          console.log(`Created new list for ${singer} with "${song}"`);
        }
    
        console.log(songSingerList);
        songSpecialSong.value = '';
    }
    else if (target.type === 'submit') {
       event.preventDefault();
        url = document.querySelector('#link').value; 
    if (!url || url === '' || url === undefined || url === null) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Empty Field';
        form.insertBefore(error, worshipLeaderContainer);
    }
    else if (!validateUrl(url, ["youtube.com", "facebook.com"])) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Not An Approved Site';
        form.insertBefore(error, worshipLeaderContainer);
    }
    else {
        var worshipLeaderName = worshipLeader.value; 
        var songSpecialSingerName = songSpecialSinger.value; 
        var songSpecialSongName = songSpecialSong.value; 
        var jimmySongName = jimmySong.value;
        var preacherName = document.querySelector('#preacher').value;
        message = document.querySelector('#message-title').value;
    
        
        // Iterate through the songSingerList to generate the desired output
        for (const singer in songSingerList) {
            const songs = songSingerList[singer].join(', ');
            console.log(`${singer}: ${songs}`);
        }


        post.innerHTML = `${url} Worship with: ${worshipLeaderName} ${songSpecialSingerName}: ${songSpecialSongName} #JimmySwaggart: ${jimmySongName} ${preacherName}: ${message} #sbn #praiseandworship #fwcbr`;
        
        // Iterate through the songSingerList to generate the desired output
        for (const singer in songSingerList) {
            const songs = songSingerList[singer].join(', ');
            console.log(`${singer}: ${songs}`);
        }


        post.innerHTML = `${url} Worship with: ${worshipLeaderName} ${songSpecialSingerName}: ${songSpecialSongName} #JimmySwaggart: ${jimmySongName} ${preacherName}: ${message} #sbn #praiseandworship #fwcbr`;
        toggleCards(formCard, postCard);
    }
    }

}
)
function validateUrl(inputUrl, acceptable) {
    let validUrl = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    let accepted = acceptable.some(el => inputUrl.includes(el) );

    let res = (validUrl && accepted );

    if( res ) return true;
    return false
}

function toggleCards(card1, card2) {
    card1.classList.toggle('hide');
    card2.classList.toggle('hide');
}

