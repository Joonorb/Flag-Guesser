const countries = [
    { code: 'AD', name: ['Andorra'] },
    { code: 'AE', name: ['United Arab Emirates', 'UAE'] },
    { code: 'AF', name: ['Afghanistan'] },
    { code: 'AG', name: ['Antigua and Barbuda', 'Antigua', 'Barbuda'] },
    { code: 'AI', name: ['Anguilla'] },
    { code: 'AL', name: ['Albania'] },
    { code: 'AM', name: ['Armenia'] },
    { code: 'AO', name: ['Angola'] },
    { code: 'AR', name: ['Argentina'] },
    { code: 'AS', name: ['American Samoa'] },
    { code: 'AT', name: ['Austria'] },
    { code: 'AU', name: ['Australia'] },
    { code: 'AW', name: ['Aruba'] },
    { code: 'AX', name: ['Åland Islands', 'Aland Islands'] },
    { code: 'AZ', name: ['Azerbaijan'] },
    { code: 'BA', name: ['Bosnia and Herzegovina', 'Bosnia', 'Herzegovina'] },
    { code: 'BB', name: ['Barbados'] },
    { code: 'BD', name: ['Bangladesh'] },
    { code: 'BE', name: ['Belgium'] },
    { code: 'BF', name: ['Burkina Faso'] },
    { code: 'BG', name: ['Bulgaria'] },
    { code: 'BH', name: ['Bahrain'] },
    { code: 'BI', name: ['Burundi'] },
    { code: 'BJ', name: ['Benin'] },
    { code: 'BL', name: ['Saint Barthelemy', 'St. Barthelemy'] },
    { code: 'BM', name: ['Bermuda'] },
    { code: 'BN', name: ['Brunei','Brunei Darussalam', 'Brunei'] },
    { code: 'BO', name: ['Bolivia'] },
    { code: 'BR', name: ['Brazil'] },
    { code: 'BS', name: ['Bahamas'] },
    { code: 'BT', name: ['Bhutan'] },
    { code: 'BW', name: ['Botswana'] },
    { code: 'BY', name: ['Belarus'] },
    { code: 'BZ', name: ['Belize'] },
    { code: 'CA', name: ['Canada'] },
    { code: 'CC', name: ['Cocos Islands', 'Keeling Islands'] },
    { code: 'CD', name: ['Democratic Republic of the Congo', 'Congo'] },
    { code: 'CF', name: ['Central African Republic', 'Central Africa'] },
    { code: 'CG', name: ['Congo'] },
    { code: 'CH', name: ['Switzerland'] },
    { code: 'CK', name: ['Cook Islands'] },
    { code: 'CL', name: ['Chile'] },
    { code: 'CM', name: ['Cameroon'] },
    { code: 'CN', name: ['China'] },
    { code: 'CO', name: ['Colombia'] },
    { code: 'CR', name: ['Costa Rica'] },
    { code: 'CU', name: ['Cuba'] },
    { code: 'CV', name: ['Cabo Verde', 'Cape Verde'] },
    { code: 'DE', name: ['Germany'] },
    { code: 'DJ', name: ['Djibouti'] },
    { code: 'DK', name: ['Denmark'] },
    { code: 'DM', name: ['Dominica'] },
    { code: 'DO', name: ['Dominican Republic'] },
    { code: 'DZ', name: ['Algeria'] },
    { code: 'EC', name: ['Ecuador'] },
    { code: 'EE', name: ['Estonia'] },
    { code: 'EG', name: ['Egypt'] },
    { code: 'EH', name: ['Western Sahara'] },
    { code: 'ER', name: ['Eritrea'] },
    { code: 'ES', name: ['Spain'] },
    { code: 'ET', name: ['Ethiopia'] },
    { code: 'FI', name: ['Finland'] },
    { code: 'FJ', name: ['Fiji'] },
    { code: 'FK', name: ['Falkland Islands (Malvinas)', 'Falkland Islands'] },
    { code: 'FM', name: ['Micronesia (Federated States of)', 'Micronesia'] },
    { code: 'FO', name: ['Faroe Islands'] },
    { code: 'FR', name: ['France'] },
    { code: 'GA', name: ['Gabon'] },
    { code: 'GB', name: ['United Kingdom of Great Britain and Northern Ireland', 'UK', 'United Kingdom', 'Great Britain'] },
    { code: 'GD', name: ['Grenada'] },
    { code: 'GE', name: ['Georgia'] },
    { code: 'GG', name: ['Guernsey'] },
    { code: 'GH', name: ['Ghana'] },
    { code: 'GI', name: ['Gibraltar'] },
    { code: 'GL', name: ['Greenland'] },
    { code: 'GM', name: ['Gambia'] },
    { code: 'GN', name: ['Guinea'] },
    { code: 'GQ', name: ['Equatorial Guinea'] },
    { code: 'GR', name: ['Greece'] },
    { code: 'GT', name: ['Guatemala'] },
    { code: 'GU', name: ['Guam'] },
    { code: 'GW', name: ['Guinea-Bissau'] },
    { code: 'GY', name: ['Guyana'] },
    { code: 'HK', name: ['Hong Kong'] },
    { code: 'HN', name: ['Honduras'] },
    { code: 'HR', name: ['Croatia'] },
    { code: 'HT', name: ['Haiti'] },
    { code: 'HU', name: ['Hungary'] },
    { code: 'ID', name: ['Indonesia'] },
    { code: 'IE', name: ['Ireland'] },
    { code: 'IL', name: ['Israel'] },
    { code: 'IM', name: ['Isle of Man'] },
    { code: 'IN', name: ['India'] },
    { code: 'IQ', name: ['Iraq'] },
    { code: 'IR', name: ['Iran'] },
    { code: 'IS', name: ['Iceland'] },
    { code: 'IT', name: ['Italy'] },
    { code: 'JE', name: ['Jersey'] },
    { code: 'JM', name: ['Jamaica'] },
    { code: 'JO', name: ['Jordan'] },
    { code: 'JP', name: ['Japan'] },
    { code: 'KE', name: ['Kenya'] },
    { code: 'KG', name: ['Kyrgyzstan'] },
    { code: 'KH', name: ['Cambodia'] },
    { code: 'KI', name: ['Kiribati'] },
    { code: 'KM', name: ['Comoros'] },
    { code: 'KN', name: ['Saint Kitts and Nevis'] },
    { code: 'KP', name: ['Korea (Democratic People\'s Republic of Korea)', 'North Korea'] },
    { code: 'KR', name: ['South Korea (Republic of Korea)', 'South Korea'] },
    { code: 'KW', name: ['Kuwait'] },
    { code: 'KY', name: ['Cayman Islands'] },
    { code: 'KZ', name: ['Kazakhstan'] },
    { code: 'LA', name: ['Lao People\'s Democratic Republic', 'Laos'] },
    { code: 'LB', name: ['Lebanon'] },
    { code: 'LC', name: ['Saint Lucia'] },
    { code: 'LI', name: ['Liechtenstein'] },
    { code: 'LK', name: ['Sri Lanka'] },
    { code: 'LR', name: ['Liberia'] },
    { code: 'LS', name: ['Lesotho'] },
    { code: 'LT', name: ['Lithuania'] },
    { code: 'LU', name: ['Luxembourg'] },
    { code: 'LV', name: ['Latvia'] },
    { code: 'LY', name: ['Libya'] },
    { code: 'MA', name: ['Morocco'] },
    { code: 'MC', name: ['Monaco'] },
    { code: 'MD', name: ['Republic of Moldova', 'Moldova'] },
    { code: 'ME', name: ['Montenegro'] },
    { code: 'MF', name: ['Saint Martin'] },
    { code: 'MG', name: ['Madagascar'] },
    { code: 'MH', name: ['Marshall Islands'] },
    { code: 'MK', name: ['North Macedonia', 'Macedonia'] },
    { code: 'ML', name: ['Mali'] },
    { code: 'MM', name: ['Myanmar', 'Burma'] },
    { code: 'MN', name: ['Mongolia'] },
    { code: 'MO', name: ['Macao', 'Macau'] },
    { code: 'MP', name: ['Northern Mariana Islands'] },
    { code: 'MQ', name: ['Martinique'] },
    { code: 'MR', name: ['Mauritania'] },
    { code: 'MS', name: ['Montserrat'] },
    { code: 'MT', name: ['Malta'] },
    { code: 'MU', name: ['Mauritius'] },
    { code: 'MV', name: ['Maldives'] },
    { code: 'MW', name: ['Malawi'] },
    { code: 'MX', name: ['Mexico'] },
    { code: 'MY', name: ['Malaysia'] },
    { code: 'MZ', name: ['Mozambique'] },
    { code: 'NA', name: ['Namibia'] },
    { code: 'NC', name: ['New Caledonia'] },
    { code: 'NE', name: ['Niger'] },
    { code: 'NF', name: ['Norfolk Island'] },
    { code: 'NG', name: ['Nigeria'] },
    { code: 'NI', name: ['Nicaragua'] },
    { code: 'NL', name: ['Netherlands'] },
    { code: 'NO', name: ['Norway'] },
    { code: 'NP', name: ['Nepal'] },
    { code: 'NR', name: ['Nauru'] },
    { code: 'NU', name: ['Niue'] },
    { code: 'NZ', name: ['New Zealand'] },
    { code: 'OM', name: ['Oman'] },
    { code: 'PA', name: ['Panama'] },
    { code: 'PE', name: ['Peru'] },
    { code: 'PF', name: ['French Polynesia'] },
    { code: 'PG', name: ['Papua New Guinea'] },
    { code: 'PH', name: ['Philippines'] },
    { code: 'PK', name: ['Pakistan'] },
    { code: 'PL', name: ['Poland'] },
    { code: 'PM', name: ['Saint Pierre and Miquelon'] },
    { code: 'PN', name: ['Pitcairn'] },
    { code: 'PR', name: ['Puerto Rico'] },
    { code: 'PS', name: ['State of Palestine', 'Palestine'] },
    { code: 'PT', name: ['Portugal'] },
    { code: 'PW', name: ['Palau'] },
    { code: 'PY', name: ['Paraguay'] },
    { code: 'QA', name: ['Qatar'] },
    { code: 'RE', name: ['Réunion', 'Reunion'] },
    { code: 'RO', name: ['Romania'] },
    { code: 'RS', name: ['Serbia'] },
    { code: 'RU', name: ['Russian Federation', 'Russia'] },
    { code: 'RW', name: ['Rwanda'] },
    { code: 'SA', name: ['Saudi Arabia'] },
    { code: 'SB', name: ['Solomon Islands'] },
    { code: 'SC', name: ['Seychelles'] },
    { code: 'SD', name: ['Sudan'] },
    { code: 'SE', name: ['Sweden'] },
    { code: 'SG', name: ['Singapore'] },
    { code: 'SH', name: ['Saint Helena, Ascension and Tristan da Cunha', 'Saint Helena'] },
    { code: 'SI', name: ['Slovenia'] },
    { code: 'SK', name: ['Slovakia'] },
    { code: 'SL', name: ['Sierra Leone'] },
    { code: 'SM', name: ['San Marino'] },
    { code: 'SN', name: ['Senegal'] },
    { code: 'SO', name: ['Somalia'] },
    { code: 'SR', name: ['Suriname'] },
    { code: 'SS', name: ['South Sudan'] },
    { code: 'ST', name: ['Sao Tome and Principe'] },
    { code: 'SV', name: ['El Salvador'] },
    { code: 'SX', name: ['Sint Maarten'] },
    { code: 'SY', name: ['Syria', 'Syrian Arab Republic'] },
    { code: 'SZ', name: ['Eswatini', 'Swaziland'] },
    { code: 'TC', name: ['Turks and Caicos Islands'] },
    { code: 'TD', name: ['Chad'] },
    { code: 'TG', name: ['Togo'] },
    { code: 'TH', name: ['Thailand'] },
    { code: 'TJ', name: ['Tajikistan'] },
    { code: 'TK', name: ['Tokelau'] },
    { code: 'TL', name: ['Timor-Leste', 'East Timor'] },
    { code: 'TM', name: ['Turkmenistan'] },
    { code: 'TN', name: ['Tunisia'] },
    { code: 'TO', name: ['Tonga'] },
    { code: 'TR', name: ['Turkey'] },
    { code: 'TT', name: ['Trinidad and Tobago', 'Trinidad', 'Tobago'] },
    { code: 'TV', name: ['Tuvalu'] },
    { code: 'TW', name: ['Taiwan', 'Taiwan, Province of China'] },
    { code: 'TZ', name: ['Tanzania', 'United Republic of Tanzania'] },
    { code: 'UA', name: ['Ukraine'] },
    { code: 'UG', name: ['Uganda'] },
    { code: 'US', name: ['United States of America', 'USA', 'America'] },
    { code: 'UY', name: ['Uruguay'] },
    { code: 'UZ', name: ['Uzbekistan'] },
    { code: 'VA', name: ['Vatican City', 'Holy See'] },
    { code: 'VC', name: ['Saint Vincent and the Grenadines', 'St. Vincent'] },
    { code: 'VE', name: ['Venezuela', 'Bolivarian Republic of Venezuela'] },
    { code: 'VG', name: ['British Virgin Islands'] },
    { code: 'VI', name: ['US Virgin Islands, U.S. Virgin Islands', 'Virgin Islands (U.S.)'] },
    { code: 'VN', name: ['Vietnam', 'Viet Nam'] },
    { code: 'VU', name: ['Vanuatu'] },
    { code: 'WF', name: ['Wallis and Futuna'] },
    { code: 'WS', name: ['Samoa'] },
    { code: 'YE', name: ['Yemen'] },
    { code: 'YT', name: ['Mayotte'] },
    { code: 'ZA', name: ['South Africa'] },
    { code: 'ZM', name: ['Zambia'] },
    { code: 'ZW', name: ['Zimbabwe'] }
];

let hintsUsed = 0;  
let skipsUsed = 0;  
let playerName = ''; // To store the player's name
let finalScore = 0;  // Moved to top-level scope for global access

function submitName() {
    const nameInput = document.getElementById('playerName');
    playerName = nameInput.value.trim(); // Storing the player's name

    if (playerName) {
        const modal = document.getElementById('nameModal');
        modal.style.display = 'none';
        playButtonSound();

    } else {
        alert('Please enter your name.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    const quizSound = document.getElementById("quizSound");
    
    const buttonSound = document.getElementById("buttonpress");
    const gameWin = document.getElementById("gameDone")
    buttonSound.volume = 0.25;
    const overlaySection = document.querySelector('.overlay-section');
    const beginButton = document.querySelector('.overlay-button');
    const inputBox = document.getElementById('countryInput');
    const hintButton = document.querySelector('#hintBtn');
    const skipButton = document.querySelector('#skipBtn');
    const doneButton = document.getElementById('doneBtn')
    const hintDisplay = document.createElement('div');
    hintDisplay.style.whiteSpace = 'pre';
    const skippedCountryDisplay = document.createElement('div');
    skippedCountryDisplay.id = "skippedCountryDisplay";
    overlaySection.appendChild(skippedCountryDisplay);
    const resetButton = document.querySelector('#resetBtn');
    hintDisplay.id = "hintDisplay";
    overlaySection.appendChild(hintDisplay);
    let currentCountry = null;
    let correctGuesses = 0;
    let wrongAnswers = 0;
    let scoreAdjustment = 0;

    hintButton.style.display = 'none';
    skipButton.style.display = 'none';
    hintDisplay.style.display = 'none';
    resetButton.style.display = 'none';
    skippedCountryDisplay.style.display = 'none';

    document.getElementById('initialMessage').style.display = 'block';

    function playButtonSound() {
        buttonSound.currentTime = 0;
        buttonSound.play();
    }

    function gameWinSound() {
        setTimeout(() => {
            gameWin.play();
        }, 700); 
    }

    async function fetchFlagURL(countryCode) {
        try {
            const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
            const data = await response.json();
            return {
                flagUrl: data.flags.png,
                countryName: data.name.common
            };
        } catch (error) {
            console.error(`Error fetching flag: ${error}`);
            return null;
        }
    }

    beginButton.addEventListener('click', function() {
        document.getElementById('initialMessage').style.display = 'none';
        document.getElementById('beginBtn').style.display = 'none';
        document.getElementById('flagImg').style.display = 'block';
        document.getElementById('countryInput').style.display = 'block';
        hintButton.style.display = 'block';
        skipButton.style.display = 'block';
        resetButton.style.display = 'block';
        document.getElementById('countryInput').disabled = false;

        if (timerInterval) {
            clearInterval(timerInterval);
        }
        seconds = 0;
        correctGuesses = 0;
        wrongAnswers = 0;
        document.getElementById('timer').textContent = '00:00';
        document.getElementById('timer').style.display = 'block';
        timerInterval = setInterval(updateTimer, 1000);
        quizSound.play();
        playButtonSound();

        loadNextFlag();
    });

    hintButton.addEventListener('click', function() {
        playButtonSound();
        hintDisplay.style.display = 'block';
        hintsUsed++;
        let shortestName = currentCountry.primary;
        for (let name of [currentCountry.primary, currentCountry.alternative]) {
            if (name && name.length < shortestName.length) {
                shortestName = name;
            }
        }

        let hint = shortestName.split('').map((char, index) => {
            if (char === ' ') return '     ';
            if (index === 0 || index === 2) return char;
            if (shortestName.length > 7 && index === 4) return char;
            if (shortestName.length > 10 && (index === 4 || index === 8)) return char;
            return ' _ ';
        }).join('');

        hintDisplay.textContent = "Hint: " + hint;
        scoreAdjustment -= 30;
    });

    resetButton.addEventListener('click', function() {
        playButtonSound();
        resetGame();
    });

    skipButton.addEventListener('click', function() {
        playButtonSound();
        skipsUsed++;

        scoreAdjustment -= 100;

        // Save the name of the current flag
        const skippedCountryName = currentCountry.primary;

        // Load the next flag immediately
        loadNextFlag();

        // After loading the next flag, display the name of the skipped flag
        setTimeout(() => {
            skippedCountryDisplay.textContent = "The skipped country was: " + skippedCountryName;
            skippedCountryDisplay.style.display = 'block'; 
        }, 775); 
    });

    let correctAnswerBonus = 20;  // Bonus for correct answer
    let wrongAnswerPenalty = 10;  // Penalty for wrong answer
    

    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const userInput = inputBox.value.trim().toLowerCase();
            if (userInput === currentCountry.primary.toLowerCase() || 
                (currentCountry.alternative && userInput === currentCountry.alternative.toLowerCase())) {
                correctGuesses++;
                
                scoreAdjustment += correctAnswerBonus;  // Add bonus for correct answer
                playCorrectSound();
                inputBox.value = '';
                loadNextFlag();
                showScoreFeedback(true);
            } else {
                playIncorrectSound();
                wrongAnswers++;
                showScoreFeedback(false);
                scoreAdjustment -= wrongAnswerPenalty;  // Deduct penalty for wrong answer
            }
        }
    });

    async function loadNextFlag() {
        hintDisplay.style.display = 'none';
        skippedCountryDisplay.style.display = 'none'; 
        if (correctGuesses < 10) {
            let randomCountry = countries[Math.floor(Math.random() * countries.length)];
            let countryData = await fetchFlagURL(randomCountry.code);
            if (!countryData || !countryData.flagUrl) {
                console.error("Error fetching flag for country code:", randomCountry.code);
                return;
            }

            currentCountry = {
                primary: randomCountry.name[0],
                alternative: randomCountry.name.length > 1 ? randomCountry.name[1] : null
            };

            document.getElementById('flagImg').src = countryData.flagUrl;
            document.getElementById('flagImg').alt = `Flag of ${currentCountry.primary}`;
            inputBox.focus();
        } else {
            finalScore = 1000 - seconds + scoreAdjustment;
            beginButton.style.display = 'none';
            showScoreModal()
            endGame(finalScore);
        }
    }

    function showScoreFeedback(isCorrect) {
        const feedbackElement = document.getElementById('scoreFeedback');
        
        if (isCorrect) {
            feedbackElement.textContent = "+20";
            feedbackElement.style.color = "gold";
        } else {
            feedbackElement.textContent = "-10";
            feedbackElement.style.color = "lightcoral";
        }
    
        feedbackElement.style.display = "block";
    
        setTimeout(() => {
            feedbackElement.style.display = "none";
        }, 2000); 
    }
    
    

    function endGame(finalScore) {
        stopTimer();
        hintsUsed = 0;  
        skipsUsed = 0;  
        finalScore = 0;
        correctGuesses = 0;
        wrongAnswers = 0;
        hintDisplay.style.display = 'none';
        skippedCountryDisplay.style.display = 'none';
        document.getElementById('flagImg').style.display = 'none';
        document.getElementById('countryInput').style.display = 'none';
        hintButton.style.display = 'none';
        skipButton.style.display = 'none';
        resetButton.style.display = 'none';
        beginButton.style.display = 'none';
        document.getElementById('timer').style.display = 'none';

        inputBox.value = '';
        quizSound.pause();
        quizSound.currentTime = 0;

        // Update and display scores
        updateScores(playerName, finalScore);

        // Display the final score and provide an option to play again
        alert(`Congratulations! You completed the challenge with a score of: ${finalScore} points. Click OK to play again.`);
        resetGame();
    }

    function resetGame() {
        hintsUsed = 0;  
        skipsUsed = 0;  
        finalScore = 0;
        correctGuesses = 0;
        wrongAnswers = 0;
        hintDisplay.style.display = 'none';
        document.getElementById('flagImg').style.display = 'none';
        document.getElementById('initialMessage').style.display = 'block';
        document.getElementById('beginBtn').style.display = 'block';
        document.getElementById('countryInput').style.display = 'none';
        document.getElementById('timer').style.display = 'none';
        skippedCountryDisplay.style.display = 'none';
        hintButton.style.display = 'none';
        skipButton.style.display = 'none';
        resetButton.style.display = 'none';
        inputBox.value = '';
        stopTimer();
        quizSound.pause();
        quizSound.currentTime = 0;
    }

    // Scores
    let scores = [];

    // Function to update the scores
    function updateScores(playerName, score) {
        scores.push({name: playerName, score: score});
        scores.sort((a, b) => b.score - a.score);  
        displayScores();
    }

    // Function to display the scores
    function displayScores() {
        const scoreBoard = document.getElementById('scoreBoard');
        scoreBoard.innerHTML = '';
        scores.forEach((player, index) => {
            let scoreEntry = document.createElement('div');
            scoreEntry.textContent = `${index + 1}. ${player.name}: ${player.score} points`;
            scoreBoard.appendChild(scoreEntry);
        });
    }

    let timerInterval;
    let seconds = 0;

    function updateTimer() {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function playCorrectSound() {
        document.getElementById('correctSound').play();
        if (correctGuesses >= 10) {
            stopTimer();
            
        }
    }

    function playIncorrectSound() {
        document.getElementById('incorrectSound').play();
    }

    function adjustFlagSize() {
        const flagImage = document.getElementById('flagImg');
        if (flagImage.width < 100) { 
            flagImage.style.maxHeight = "500px"; 
        } else {
            flagImage.style.maxHeight = "300px"; 
        }
    }

    function checkGameEnd() {
        if (correctGuesses >= 10) {
            showScoreModal();
        }
    }



    
    function determineScoreCategory() {
        if (finalScore >= 750) {
            return "Gold";
        } else if (finalScore >= 300) {
            return "Silver";
        } else {
            return "Bronze";
        }
    }

// Function to show the modal with the appropriate image and confetti effect
function showScoreModal() {
    const scoreCategory = determineScoreCategory();
    const scoreImage = document.getElementById('scoreImage');
    const scoreText = document.getElementById('scoreText');
    gameWinSound()

    // Set the appropriate image and text based on the score category
    switch(scoreCategory) {
        case "Gold":
            scoreImage.src = "gold.png";
            scoreText.innerText = `Congratulations ${playerName}! You achieved a Gold Score!`;
            break;
        case "Silver":
            scoreImage.src = "silver.png";
            scoreText.innerText = `Great job ${playerName}! You achieved a Silver Score!`;
            break;
        case "Bronze":
            scoreImage.src = "bronze.png";
            scoreText.innerText = `Good effort ${playerName}! You achieved a Bronze Score!`;
            break;
    }

    // Add the additional score details
    const scoreDetails = document.createElement('p');
    scoreDetails.innerText = `You got a total score of ${finalScore}/1000 with ${hintsUsed} hints and ${skipsUsed} skips!`;
    scoreText.appendChild(scoreDetails);  

    // Display the modal
    document.getElementById('scoreModal').style.display = 'block';

    setTimeout(function() {
        confetti({
            particleCount: 300,    
            spread: 5000,          
            origin: { x: 0.5, y: 0.2 },           
            startVelocity: 30,     
            ticks: 200,            
            zIndex: 100001          
        });
    }, 1000); 


    // Stop confetti effect
    setTimeout(function() {
        confetti.reset();   
    }, 5000); 

    // Pop effect for the image
    setTimeout(function() {
        scoreImage.style.transform = "scale(1)"; 
        scoreText.style.transform = "scale(1)";
        yourScore.style.transform = "scale(1)";
        scoreModal.style.transform = "scale(1)"

    }, 1000);


}


function hideScoreModal() {
    const scoreModal = document.querySelector('.score-modal');
    scoreModal.style.transform = 'scale(0)';
    confetti.reset();  
    setTimeout(() => {
        scoreModal.style.display = 'none';
    }, 100);
}

    doneButton.addEventListener('click', function() {
        playButtonSound();
        hideScoreModal(); 
        beginButton.style.display = 'block';
        document.getElementById('initialMessage').style.display = 'block';


    });

    




    window.onload = function() {
        document.getElementById('nameModal').style.display = "block";
        document.getElementById('mainContent').style.pointerEvents = "none";
        document.getElementById('finalresult').style.pointerEvents = "block";

        

    }
});
