const attackValue = 10;
const strongAttack = 17;
const monsterAttack = 14;
const healPlayer = 20;
const enteredValue = prompt('Maximum life for you and the monster', '100');
const modeAttack = 'ATTACK';
const modeStrong = 'STRONG_ATTACK';
const logPlayerAttack = 'PLAYER_ATTACK';
const logPlayerStrongAttack = 'PLAYER_STRONG_ATTACK';
const logMonsterAttack = 'MONSTER_ATTACK';
const logHealPlayer = 'HEAL_PLAYER';
const logGameOver = 'GAME_OVER';

let maxLife = parseInt(enteredValue);

if (isNaN(maxLife) || maxLife <=0) {
    maxLife = 100;
}
let battleLog = [];
let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

function writeToLog(event, value, monsterH, playerH) {
    let logEntry;
    if (event === logPlayerAttack) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterH,
            finalPlayerHealth: playerH
        };
    }
    else if (event === logPlayerStrongAttack) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterH,
            finalPlayerHealth: playerH
        };
    }
    else if (event === logMonsterAttack) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterH,
            finalPlayerHealth: playerH
        };
    }
    else if (event === logHealPlayer) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterH,
            finalPlayerHealth: playerH
        };
    }
    else if (event === logGameOver) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterH,
            finalPlayerHealth: playerH
        };
    }
    battleLog.push(logEntry);
}

function reset () {
    monsterHealth = maxLife;
    playerHealth = maxLife;
    resetGame(maxLife);
}

function endRound() {
    const inicialPlayerHealth = playerHealth;
    const playerDamage = dealPlayerDamage(monsterAttack);
    playerHealth -= playerDamage;
    writeToLog(logMonsterAttack, playerDamage, monsterHealth, playerHealth);

    if(playerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        playerHealth = inicialPlayerHealth;
        alert('You have another chance!');
        setPlayerHealth(inicialPlayerHealth);
    }
    if (monsterHealth <= 0 && playerHealth > 0) {
        alert('You won!');
        writeToLog (logGameOver, 'PLAYER WON', monsterHealth, playerHealth);
    }
    else if (playerHealth <= 0 && monsterHealth > 0) {
        alert ('You lost!');
        writeToLog (logGameOver, 'PLAYER LOST', monsterHealth, playerHealth);
    }
    else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert('You have a draw!');
        writeToLog (logGameOver, 'DRAW', monsterHealth, playerHealth);
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === modeAttack) {
        maxDamage = attackValue;
        logEvent = logPlayerAttack;
    }
    else if (mode === modeStrong) {
        maxDamage = strongAttack;
        logEvent = logPlayerStrongAttack;
    }
    const damage = dealMonsterDamage(maxDamage);
    monsterHealth -= damage;
    writeToLog(logEvent, damage, monsterHealth, playerHealth);
    endRound();
}

function attackButton() {
    attackMonster(modeAttack);
}

function strongAttackButton() {
    attackMonster(modeStrong);
}

function healButton() {
    let healValue;
    if (playerHealth >= maxLife - healPlayer) {
        alert("You can't heal to more than your max initial health.")
    }
    else {
        healValue = healPlayer;
    }
    increasePlayerHealth(healPlayer);
    playerHealth += healPlayer;
    writeToLog(logHealPlayer, healPlayer, monsterHealth, playerHealth);
    endRound();
}

function logHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackButton);
strongAttackBtn.addEventListener('click', strongAttackButton);
healBtn.addEventListener('click', healButton);
logBtn.addEventListener('click', logHandler);