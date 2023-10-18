export const MainCharacter = {
    name: '???',
    level: 0,
    hp: {
        name: 'hp',
        value: 10
    },
    stamina: {
        name: 'sta',
        value: 10,
        maxvalue: 10,
        recovery: 0.1
    },
    maxhp: 10,
    hprecovery: 0.1,
    sp: {
        name: 'sp',
        value: 10
    },
    mp: {
        name: 'mp',
        value: 0
    },
    maxmp: 0,
    totalExp: 0,
    expToLevel: 10,
    skills: {
        
    },
    stats: {
        str: {
            name: 'str',
            label: 'strength',
            value: 1
        },
        dex: {
            name: 'dex',
            label: 'dexterity',
            value: 1
        },
        vit: {
            name: 'vit',
            label: 'vitality',
            value: 1
        },
        int: {
            name: 'int',
            label: 'intelligence',
            value: 1
        },
        wis: {
            name: 'wis',
            label: 'wisdom',
            value: 1
        },
        lck: {
            name: 'lck',
            label: 'luck',
            value: 1
        },
        con: {
            name: 'con',
            label: 'constitution',
            value: 1
        },
        phyAtk: {
            name: 'phyAtk',
            label: 'physical attack',
            value: 1
        }
    },
    equipment: {
        neck: {
            content: {},
            name: 'neck'},
        head: {
            content: {},
            name: 'head'},
        ears: {
            content: {},
            name: 'ears'},
        chest: {
            content: {},
            name: 'chest'},
        waist: {
            content: {},
            name: 'waist'},
        wrists: {
            content: {},
            name: 'wrists'},
        rightHand: {
            content: {},
            name: 'rightHand'},
        shoulders: {
            content: {},
            name: 'shoulder'},

        leftHand: {
            content: {},
            name: 'leftHand'},
        legs: {
            content: {},
            name: 'legs'},
        feet: {
            content: {},
            name: 'feet'}
    },
    status: {
        buffs: {},
        ailments: {}
    },

}