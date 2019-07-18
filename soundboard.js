var soundData = [
    {
        sound: new Howl({
            src: ['sounds/bah1.mp3']
        }),
        description: 'Bah 1'
    },
    {
        sound: new Howl({
            src: ['sounds/bah2.mp3']
        }),
        description: 'Bah 2'
    },
    {
        sound: new Howl({
            src: ['sounds/bah3.mp3']
        }),
        description: 'Bah 3'
    },
    {
        sound: new Howl({
            src: ['sounds/coow.mp3']
        }),
        description: 'Coow'
    },
    {
        sound: new Howl({
            src: ['sounds/ehhh.mp3']
        }),
        description: 'Ehhh'
    },
    {
        sound: new Howl({
            src: ['sounds/raspberry.mp3']
        }),
        description: 'Raspberry'
    },
    {
        sound: new Howl({
            src: ['sounds/raspberry2.mp3']
        }),
        description: 'Raspberry 2'
    },
    {
        sound: new Howl({
            src: ['sounds/waananan.mp3']
        }),
        description: 'Waananan'
    },
    {
        sound: new Howl({
            src: ['sounds/yaaah.mp3']
        }),
        description: 'Yaaah'
    },
    {
        sound: new Howl({
            src: ['sounds/slurpslurp.mp3']
        }),
        description: 'Slurp slurp slurp'
    },
    {
        sound: new Howl({
            src: ['sounds/totototozom.mp3']
        }),
        description: 'Totototozom'
    },
    {
        sound: new Howl({
            src: ['sounds/ehgeeh.mp3']
        }),
        description: 'Ehgeeh'
    },
    {
        sound: new Howl({
            src: ['sounds/aaagh.mp3']
        }),
        description: 'Aaagh'
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
        $btn.appendTo($("#soundboard-buttons-container"));
    }
}

/*
Click handler for soundboard buttons. Plays a sound from the sound data
array that has a description matching the name of the pressed button. 
*/
$("#soundboard-buttons-container").on('click', ".sound-btn", function() {
   for (var i = 0; i < soundData.length; ++i)
   {
       if (soundData[i].description == $(this).text())
       {
           soundData[i].sound.play(); 
       }
   } 
});

createSoundButtons();