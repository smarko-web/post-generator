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
const copyButton = document.querySelector('.copy-post');

var url, message; 
const singerList = ['Robin Herd', 'Randy Knaps', 'Joseph Larson', 'Grace Larson Brumley', 'Jill Swaggart', 'Tara Montpetit', 'Kim Coleman', 'BJ Pons','Brian Haney', 'FWC choir and singers', 'FWC singers'];
const preacherList = ['Jimmy Swaggart', 'Donnie Swaggart', 'Gabriel Swaggart', 'Loren Larson', 'Mike Muzzerall', 'David Smith', 'Dale Usey', 'Dr. Don Paul Gray', 'Paris Ragan', 'Shaun Murphy', 'Jonathan Steele', 'Dr. Dave Watts',
'Dr. Jimmy DuPree'];

for(var i = 0; i < singerList.length - 2; i++) {
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

for(var i = 0; i < preacherList.length; i++) {
    var option = document.createElement('option');
    var optionName = document.createTextNode(preacherList[i]);
    option.appendChild(optionName);
    preacher.insertBefore(option, preacher.lastChild);
}

const songSingerList = {};
form.addEventListener('click', (e) => {
   

    const target = e.target; 
    const event = e;
    if (target.nodeName === 'BUTTON' && target.type === 'button' && (songSpecialSong.value != '')) {
        const singer = songSpecialSinger.value;
        const song = songSpecialSong.value;
    
        if (songSingerList.hasOwnProperty(singer)) {
          // Singer already exists in the list, add the song to their array
          songSingerList[singer].push(song);
        } else {
          // Singer doesn't exist, create a new array for them
          songSingerList[singer] = [song];
        }
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
    else if (!validateUrl(url, ["youtube.com", "facebook.com", "fb.watch"])) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerHTML = 'Not An Approved Site';
        form.insertBefore(error, worshipLeaderContainer);
    }
    else {
        var worshipLeaderName = worshipLeader.value; 
        var jimmySongName = jimmySong.value;
        var preacherName = document.querySelector('#preacher').value;
        message = document.querySelector('#message-title').value;
    
        var output = '';
        // Iterate through the songSingerList to generate the desired output
        for (const singer in songSingerList) {
            const songs = songSingerList[singer].join(', ');
            output += `${singer}: ${songs}`; 
        }
      
        if (jimmySongName !== '') {
            post.innerHTML = `${url} Worship with: ${worshipLeaderName} ${output} #JimmySwaggart: ${jimmySongName} ${preacherName}: ${message} #sbn #praiseandworship #fwcbr`;
        } else {
            post.innerHTML = `${url} Worship with: ${worshipLeaderName} ${output} ${preacherName}: ${message} #sbn #praiseandworship #fwcbr`;
        }
        toggleCards(formCard, postCard);
    }
    }

}
)
copyButton.addEventListener('click', () => {
    post.select();
    document.execCommand('copy');
    copyButton.innerHTML = 'post copied';
    copyButton.classList.add('clicked');
    setTimeout(() => {copyButton.classList.remove('clicked')}, 250);
})

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

