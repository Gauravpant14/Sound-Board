
const sounds = ['song-1', 'song-2', 'song-3', 'song-4'];

 

sounds.forEach((e) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = e;

    btn.addEventListener("click", function play() {
       
        let currentSong = document.getElementById(e);
        currentSong.play();
        
        
    });

    

    document.body.appendChild(btn);
});

const pause = document.getElementById("Pause");
pause.addEventListener('click', function stop(){
    sounds.forEach((ele) => {
     document.getElementById(ele).pause();
    })
});

/*
const btnName = ['Play','Pause'];


btnName.forEach(element => {

const btn = document.createElement("button");
btn.classList.add('btn');
btn.innerText = element;
document.body.appendChild(btn);

btn.addEventListener('click',playThis);
btn.addEventListener('dblclick',pauseThis);


function playThis(){
    let p = document.getElementById('my');
    p.play();
}

function pauseThis(){
    let p = document.getElementById('my');
    p.pause();
}

});

*/

