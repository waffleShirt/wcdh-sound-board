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
            src: ['sounds/bah4.mp3']
        }),
        description: 'Bah 4'
    },
    {
        sound: new Howl({
            src: ['sounds/bahbah.mp3']
        }),
        description: 'Bahbah'
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
            src: ['sounds/raspberry3.mp3']
        }),
        description: 'Raspberry 3'
    },
    {
        sound: new Howl({
            src: ['sounds/raspberry4.mp3']
        }),
        description: 'Raspberry 4'
    },
    {
        sound: new Howl({
            src: ['sounds/raspberry5.mp3']
        }),
        description: 'Raspberry 5'
    },
    {
        sound: new Howl({
            src: ['sounds/waananan.mp3']
        }),
        description: 'Waananan'
    },
    {
        sound: new Howl({
            src: ['sounds/waananan3.mp3']
        }),
        description: 'Waananan 2'
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
    {
        sound: new Howl({
            src: ['sounds/arnie.mp3']
        }),
        description: 'Arnie'
    },
    {
        sound: new Howl({
            src: ['sounds/baambaambaam.mp3']
        }),
        description: 'Baam baam baam'
    },
    {
        sound: new Howl({
            src: ['sounds/cahcahcah.mp3']
        }),
        description: 'Cah cah cah'
    },
    {
        sound: new Howl({
            src: ['sounds/cahcahcahcahcah.mp3']
        }),
        description: 'Cahcahcahcahcah'
    },
    {
        sound: new Howl({
            src: ['sounds/duusvduusvduusv.mp3']
        }),
        description: 'Duusvduusvduusv'
    },
    {
        sound: new Howl({
            src: ['sounds/eeegh.mp3']
        }),
        description: 'Eeegh'
    },
    {
        sound: new Howl({
            src: ['sounds/eeey.mp3']
        }),
        description: 'Eeey'
    },
    {
        sound: new Howl({
            src: ['sounds/eysh.mp3']
        }),
        description: 'Eysh'
    },
    {
        sound: new Howl({
            src: ['sounds/fshhhh.mp3']
        }),
        description: 'Fshhhh'
    },
    {
        sound: new Howl({
            src: ['sounds/kissing.mp3']
        }),
        description: 'Kissing'
    },
    {
        sound: new Howl({
            src: ['sounds/kuhkuuh.mp3']
        }),
        description: 'Kuhkuuh'
    },
    {
        sound: new Howl({
            src: ['sounds/kuuh.mp3']
        }),
        description: 'Kuuh'
    },
    {
        sound: new Howl({
            src: ['sounds/kuuung.mp3']
        }),
        description: 'Kuuung'
    },
    {
        sound: new Howl({
            src: ['sounds/snacking.mp3']
        }),
        description: 'Snacking'
    },
    {
        sound: new Howl({
            src: ['sounds/tweettweet.mp3']
        }),
        description: 'Tweet tweet'
    },
    {
        sound: new Howl({
            src: ['sounds/vraah.mp3']
        }),
        description: 'Vraah'
    },
    {
        sound: new Howl({
            src: ['sounds/vuuush.mp3']
        }),
        description: 'Vuuush'
    },
    {
        sound: new Howl({
            src: ['sounds/waah.mp3']
        }),
        description: 'Waah'
    },
    {
        sound: new Howl({
            src: ['sounds/wahwaaaaaaaah.mp3']
        }),
        description: 'Wahwaaaaaaaah'
    },
    {
        sound: new Howl({
            src: ['sounds/wehdehdeh.mp3']
        }),
        description: 'Wehdehdeh'
    },
    {
        sound: new Howl({
            src: ['sounds/wuuoooow.mp3']
        }),
        description: 'Wuuoooow'
    },
    {
        sound: new Howl({
            src: ['sounds/yeeeenup.mp3']
        }),
        description: 'Yeeeenup'
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