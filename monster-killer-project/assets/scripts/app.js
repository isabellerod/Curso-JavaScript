const attackValue = 10;
let maxLife = 100;
let monsterHealth = maxLife;
let playerHealt = maxLife;

adjustHealthBars(maxLife);

function attack() {
    const damage = dealMonsterDamage(attackValue);
    monsterHealth -= damage;
}

attackBtn.addEventListener('click', attack);