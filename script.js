const form = document.querySelector('form');
const post = document.querySelector('#post');
const addSongButton = document.querySelector('.add-song');
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
    option.appendChild(optionName);
    songSpecialSinger.insertBefore(option, songSpecialSinger.lastChild);
}
for(var i = 0; i < preacherList.length; i++) {
    var option = document.createElement('option');
    var optionName = document.createTextNode(preacherList[i]);
    option.appendChild(optionName);
    preacher.insertBefore(option, preacher.lastChild);
}

console.log(jimmySong.parentNode)

    
form.addEventListener('click', (e) => {
    // var songs = {songSpecialSinger.value : songSpecialSong.value };
    // console.log(songs);

    const target = e.target; 
    // console.log(target.nodeName, target.type);
    if (target.nodeName === 'BUTTON' && target.type === 'button' && (songSpecialSong.value !== null && songSpecialSong.value !== undefined)) {
        
        var newSongForm = addSongButton.parentNode.cloneNode(true); 
        // addSongButton.remove();
        //  target.remove();
        form.insertBefore(newSongForm, jimmySong.parentNode);
    }


    // console.log(addSongButton);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    url = document.querySelector('#link').value; 
    var worshipLeaderName = worshipLeader.value; 
    var songSpecialSingerName = songSpecialSinger.value; 
    var songSpecialSongName = songSpecialSong.value; 
    var jimmySongName = jimmySong.value;
    var preacherName = preacher.value;
    message = document.querySelector('#message-title').value;

    console.log(url, worshipLeaderName, songSpecialSingerName, songSpecialSong, jimmySong, preacherName, message);
    post.innerHTML = `${url} Worship with: ${worshipLeaderName} ${songSpecialSingerName}: ${songSpecialSongName} #JimmySwaggart: ${jimmySongName} ${preacherName}: ${message} #sbn #praiseandworship #fwcbr`;
})


function validateUrl(inputUrl, acceptable) {
    let validUrl = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    let accepted = acceptable.some(el => inputUrl.includes(el) );

    let res = (validUrl && accepted );

    if( res ) return true;
    return false
}

console.log(
    validateUrl( 'https://www.youtube.com/watch?v=vXgsZEVEkcc', ['facebook.com', 'youtube.com'])
)