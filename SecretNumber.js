const SecretNumber = () => {

	const randomNumber = Math.floor(Math.random() * 101);
	console.log(`Компьютер 1 загадал число: ${randomNumber}`);

	const guessNumber = () => {
		let low = 1;
		let high = 100;
		let attepmts = 0;

		
		while (true) {
			guess = Math.floor((low + high) / 2)
			attepmts++
			
			console.log(`Компьютер 2: Пробую число ${guess}.`);


			if (randomNumber === guess) {
				console.log(`компьютер-2 угадал число ${randomNumber} за ${attepmts} попыток`);
				break
			}

			if (randomNumber < guess) {
				high = guess - 1;
				console.log('Компьютер 1: меньше.');
			} else {
				low = guess + 1;
				console.log('Компьютер 1: больше.');
			}
		}
	}
	guessNumber();
}

SecretNumber();
