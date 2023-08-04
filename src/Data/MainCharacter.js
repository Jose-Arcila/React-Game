export const MainCharacter = {
    name: '???',
    level: 0,
    hp: {
        name: 'hp',
        value: 10
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
        search: {
            has: true,
            level: 0,
            maxExp: 1,
            currentExp: 0,
            description: 'use your limited senses to search for whatever catches your eye.'
        },
        magicDetection: {
            has: false,
            level: 0,
            maxExp: 1,
            currentExp: 0,
            description: "Receive feedback from your own magic power to understand the world around you."
        }
    },
    stats: {
        str: {
            name: 'str',
            value: 1
        },
        dex: {
            name: 'dex',
            value: 1
        },
        vit: {
            name: 'vit',
            value: 1
        },
        int: {
            name: 'int',
            value: 1
        },
        wis: {
            name: 'wis',
            value: 1
        },
        lck: {
            name: 'lck',
            value: 1
        },
        con: {
            name: 'con',
            value: 1
        },
        phyAtk: {
            name: 'phyAtk',
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