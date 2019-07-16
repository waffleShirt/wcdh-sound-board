var soundData = [
    {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        description: 'Bubbles'
    },
    {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        description: 'Clay'
    },
    {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        description: 'Confetti'
    },
]

/*
Loops through the array of sound data objects and dynamically
creates HTML buttons that are used to play the sound corresponding
to the button. 
*/
function createSoundButtons() {
    for (var i = 0; i < soundData.length; ++i)
    {
        var newButtonHTML = '<button class="sound-btn">' + soundData[i].description + '</button>'
        //console.log(newButtonHTML);
        var $btn = $(newButtonHTML);
        $btn.appendTo($("#soundboard-buttons"));
    }
}

/*
Click handler for soundboard buttons. Plays a sound from the sound data
array that has a description matching the name of the pressed button. 
*/
$("#soundboard-buttons").on('click', ".sound-btn", function() {
   for (var i = 0; i < soundData.length; ++i)
   {
       if (soundData[i].description == $(this).text())
       {
           soundData[i].sound.play(); 
       }
   } 
});

createSoundButtons();