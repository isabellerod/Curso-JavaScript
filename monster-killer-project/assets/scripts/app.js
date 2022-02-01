const attackValue = 10;
const strongAttack = 17;
const monsterAttack = 14;
const heal = 20;
let maxLife = 100;
let monsterHealth = maxLife;
let playerHealth = maxLife;

adjustHealthBars(maxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(monsterAttack);
    playerHealth -= playerDamage;
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
    if (mode === 'ATTACK') {
        maxDamage = attackValue;
    }
    else if (mode === 'STRONG_ATTACK') {
        maxDamage = strongAttack;
    }
    const damage = dealMonsterDamage(maxDamage);
    monsterHealth -= damage;
    endRound();
}

function attackButton() {
    attackMonster('ATTACK');
}

function strongAttackButton() {
    attackMonster('STRONG_ATTACK');
}

function healBtn() {
    let healValue;
    if (playerHealth >= maxLife - heal) {
        alert("You can't heal to more than your max initial health.")
    }
    else {
        healValue = heal;
    }
    increasePlayerHealth(heal);
    playerHealth += heal;
    endRound();
}

attackBtn.addEventListener('click', attackButton);
strongAttackBtn.addEventListener('click', strongAttackButton);
healBtn.addEventListener('click', healButton);