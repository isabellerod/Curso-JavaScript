const attackValue = 10;
const strongAttack = 17;
const monsterAttack = 14;
const healPlayer = 20;
const enteredValue = prompt('Maximum life for you and the monster', '100');
const modeAttack = 'ATTACK';
const modeStrong = 'STRONG_ATTACK';

let maxLife = parseInt(enteredValue);

if (isNaN(maxLife) || maxLife <=0) {
    maxLife = 100;
}

let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

function reset () {
    monsterHealth = maxLife;
    playerHealth = maxLife;
    resetGame(maxLife);
}

function endRound() {
    const inicialPlayerHealth = playerHealth;
    const playerDamage = dealPlayerDamage(monsterAttack);
    playerHealth -= playerDamage;
    if(playerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        playerHealth = inicialPlayerHealth;
        alert('You have another chance!');
        setPlayerHealth(inicialPlayerHealth);
    }
    if (monsterHealth <= 0 && playerHealth > 0) {
        alert('You won!');
    }
    else if (playerHealth <= 0 && monsterHealth > 0) {
        alert ('You lost!');
    }
    else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === modeAttack) {
        maxDamage = attackValue;
    }
    else if (mode === modeStrong) {
        maxDamage = strongAttack;
    }
    const damage = dealMonsterDamage(maxDamage);
    monsterHealth -= damage;
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
    endRound();
}

attackBtn.addEventListener('click', attackButton);
strongAttackBtn.addEventListener('click', strongAttackButton);
healBtn.addEventListener('click', healButton);