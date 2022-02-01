const attackValue = 10;
const monsterAttack = 14;
let maxLife = 100;
let monsterHealth = maxLife;
let playerHealth = maxLife;

adjustHealthBars(maxLife);

function attack() {
    const damage = dealMonsterDamage(attackValue);
    monsterHealth -= damage;
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

attackBtn.addEventListener('click', attack);