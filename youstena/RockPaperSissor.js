var you;
        var yourScore = 0;
        var opponent;
        var opponentScore = 0;

        var choices = ["rock", "paper", "scissors"];
        var synth = window.speechSynthesis;

        var winSound = new Audio('win.mp3'); 
        var tieSound = new Audio('tie.mp3'); 

        window.onload = function () {
            for (let i = 0; i < 3; i++) {
                let choice = document.createElement("img");
                choice.id = choices[i];
                choice.src = choices[i] + ".png";
                choice.addEventListener("click", selectChoice);
                document.getElementById("choices").append(choice);
            }
        };

        function speakWinner(winner) {
            var utterance = new SpeechSynthesisUtterance(winner + " wins!");
            synth.speak(utterance);
        }

        function playSound(sound) {
            sound.play();
        }

        function selectChoice() {
            you = this.id;
            document.getElementById("your-choice").src = you + ".png";

            opponent = choices[Math.floor(Math.random() * 3)];
            document.getElementById("opponent-choice").src = opponent + ".png";

            var winner = determineWinner(you, opponent);

            if (winner === "You") {
                yourScore += 1;
                playSound(winSound);
            } else if (winner === "Opponent") {
                opponentScore += 1;
                playSound(winSound);
            } else {
                playSound(tieSound);
            }

            document.getElementById("your-score").innerText = yourScore;
            document.getElementById("opponent-score").innerText = opponentScore;

            speakWinner(winner);
        }

        function determineWinner(playerChoice, opponentChoice) {
            if (playerChoice === opponentChoice) {
                return "It's a tie";
            } else if (
                (playerChoice === "rock" && opponentChoice === "scissors") ||
                (playerChoice === "scissors" && opponentChoice === "paper") ||
                (playerChoice === "paper" && opponentChoice === "rock")
            ) {
                return "You";
            } else {
                return "Opponent";
            }
        }