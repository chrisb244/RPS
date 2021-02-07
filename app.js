const game = () => {
	let pScore = 0;
	let cScore = 0;
	
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");
		
		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};
	
	// play match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");
		
		hands.forEach(hand => {
			hand.addEventListener("animationend",function () {
				this.style.animation = "";
			});
		});
		
		// computer options
		const computerOptions = ["rock", "paper", "scissors"];
		
		options.forEach(option => {
			option.addEventListener("click", function () {
				console.log(this);
				
				// computer choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				
				setTimeout(() => {
				// call compare hands
				compareHands(this.textContent, computerChoice);
				
				// update imgs
				playerHand.src = `${this.textContent}.png`;
				computerHand.src = `${computerChoice}.png`;}
				, 3000);
				
				// animation
				playerHand.style.animation = "shakePlayer 2.5s ease";
				computerHand.style.animation = "shakeComputer 3s ease";
			});
		});
	};
	
	// score update
	const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};
	
	const compareHands = (playerChoice, computerChoice) => {
		
		// update text
		const winner = document.querySelector(".winner");
		
		// check for tie
		if(playerChoice === computerChoice) {
			winner.textContent = "It's a motherfucking draw!";
			return;
		}
		
		// check for rock
		if(playerChoice === "rock") {
			if(computerChoice === "scissors") {
				winner.textContent = "Playa wins";
				pScore++;
				updateScore();
				return;
			}
			else {
				winner.textContent = "Computa wins";
				cScore++;
				updateScore();
				return;
			}
		}
		
		// check for paper
		if(playerChoice === "paper") {
			if(computerChoice === "scissors") {
				winner.textContent = "Computa wins";
				pScore++;
				updateScore();
				return;
			}
			else {
				winner.textContent = "Playa wins";
				cScore++;
				updateScore();
				return;
			}
		}
		
		// check for scissors
		if(playerChoice === "scissors") {
			if(computerChoice === "rock") {
				winner.textContent = "Computa wins";
				pScore++;
				updateScore();
				return;
			}
			else {
				winner.textContent = "Playa wins";
				cScore++;
				updateScore();
				return;
			}
		}
	};
		
	// call inner functions
	startGame();
	playMatch();
};

// start the game function
game();