
   document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('.number-btn');
        var clickSound = new Audio('../sound/click.mp3');
        var currentAudio = null;

        
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                clickSound.play(); // Play the default click sound

                var soundNumber = this.getAttribute('data-sound');
                playSound(soundNumber);
            });
        });

        function playSound(number) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            var audio = new Audio('../sound/' + number + '.mp3');
            audio.play();

            currentAudio = audio;
        }

        function changeCharacterAndPlaySound(imagePath) {
            var soundNumber = event.target.getAttribute('data-sound');
            var audio = new Audio('../sound/' + soundNumber + '.mp3');

            audio.play();
        }
        
        
    document.getElementById('playVideoBtn').addEventListener('click', function () {
        var characterImg = document.getElementById('characterImg');
        var video = document.getElementById('videoElement');
        var mediaContainer = document.getElementById('mediaContainer');

        // Toggle visibility of character image and video
        characterImg.style.display = characterImg.style.display === 'none' ? 'block' : 'none';
        video.style.display = video.style.display === 'none' ? 'block' : 'none';

        if (video.style.display === 'block') {
            // Play the video
            video.src = '../video/song1.mp4'; // Replace with the actual path to your video
            video.play();
            playVideoBtn.textContent = 'أيقاف تشغيل الاغنية';
            video.addEventListener('ended', function () {
                // Change text content back to default when video ends
                playVideoBtn.textContent = 'سماع اغنية الارقام';
            });
        } else {
            // Pause and clear the video
            video.pause();
            video.src = '';
            playVideoBtn.textContent = 'سماع اغنية الارقام';
            characterImg.src = '../images/girl2.png';


        }

        
    });
    
    });

    
