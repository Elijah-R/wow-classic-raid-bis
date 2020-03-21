const bis = require(`./raidbis`);

// 2 - Phase 1 + 2: Onyxia, Molten Core + Honor System and World Bosses
// 3 - Phase 3: Blackwing Lair
// 4 - Phase 4: Zul'Gurub and Arathi Basin
// 5 - Phase 5: Ahn'Qiraj
// 6 - Phase 6: Naxxramas
const phase = 2;

const itemID = 18713;

let message = ``;

const bisList = bis.data.filter(obj => {
    return obj.phase === phase && Object.values(obj).some(property => property === itemID);
});

bisList.forEach((item) => {
    message += `${item.name} | `;
});

console.log(`Phase: ${phase}`);
console.log(`Item ID: ${itemID}`);

if (message) {
    console.log(`BiS: ${message.slice(0, -3)}`);
} else {
    console.log(`There is no such item in the BiS list of the selected phase.`);
}
