export const AvailableItems = {
    oneStar: {
        general: {
            stick: {
                label: "Stick",
                name: 'stick',
                type: "material, weapon",
                description: "",
                prompt: "The ground is littered with dry branches and leaves. You lower your body and fetch a single wooden stick. It's not much, but it's yours.",
                equipable: true,
                quantity: 0,
                damage: 1,
                combinable: true,
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                consumable: false,
                src: ''
            },
            stone: {
                label: "Stone",
                name: 'stone',
                type: "material",
                description: "",
                prompt: "Things a many cover the ground, but the simplest of them all catch your eye. A simple rock, but it could prove useful.",
                equipable: false,
                quantity: 0,
                damage: 1,
                combinable: true,
                equipable: false,
                consumable: false,
                throwable: true,
                src: ''
            },
            grassHandful: {
                label: "Handful of Grass",
                name: 'grassHandful',
                type: "material",
                description: "",
                prompt: "A forest so vast and dark can get pretty boring. Nobody would condemn you for ripping up the grass around you, probably.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            berryOne: {
                label: "Berry",
                name: 'berryOne',
                type: "consumable",
                description: "",
                prompt: "Little, colorful, round objects sprout from the bushes around you. It seems like you might be able to eat it.",
                equipable: false,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            acridHerbs: {
                label: "Acrid Herbs",
                name: 'acridHerbs',
                type: "consumable",
                description: "",
                prompt: "A sour smell calls you as you walk. Curious, you near a previously indistinct patch of herbs and pocket a few.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            dullInsect: {
                label: "Dull Insect",
                name: 'dullInsect',
                type: "consumable, material",
                description: "",
                prompt: "Called by the crawling and slithering you lift up a moderately sized rock, only to see scattering insects going about. You decide to grab one of the inert ones.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: false
                },
                src: ''
            },
            suspiciousFruit: {
                label: "Suspicious Fruit",
                name: 'suspiciousFruit',
                type: "consumable",
                description: "",
                prompt: "A plump, weirdly-colored fruit hangs from a tree. It has to be safe, right? It comes from a tree after all.",
                equipable: false,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            leavesHandful: {
                label: "Handful of Leaves",
                name: 'leavesHandful',
                type: "material",
                description: "",
                prompt: "Leaves could be useful for many things, although you are uncertain of which ones. Regardless, you grab a handful.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            treeVines: {
                label: "Tree Vines",
                name: 'treeVines',
                type: "material",
                description: "",
                prompt: "A long, dangly object wraps around your head as you walk by. Before letting out a pathethic yelp you look at it and notice that it was simply a few green vines.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            smallBones: {
                label: "Small Bones",
                name: 'smallBones',
                type: "material",
                description: "",
                prompt: "You stumble across the remains of a small, unlucky animal. It makes you shiver, but perhaps the bones could have some use.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
        }, 
        decayedFountain: {
            oldCoin: {
                label: "Old Coins",
                name: 'oldCoins',
                type: "material",
                description: "",
                prompt: "A dull light reflects from underneath the water. You are called to it and reach, only to find a rusted, musty coin.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            
        },
        monsterDrops: {
            slimyLiquid: {
                label: "Slimy Liquid",
                name: 'slimyLiquid',
                type: "material",
                description: "",
                prompt: "You stumble across the remains of a small, unlucky animal. It makes you shiver, but perhaps the bones could have some use.",
                equipable: false,
                quantity: 0,
                damage: 0,
                combinable: true,
                equipable: false,
                consumable: false,
                src: ''
            },
            dirtyRags: {
                label: "Dirty Rags",
                name: 'dirtyRags',
                type: "material",
                description: "",
                prompt: "You stumble across the remains of a small, unlucky animal. It makes you shiver, but perhaps the bones could have some use.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            primitiveClub: {
                label: "Primitive Club",
                name: 'primitiveClub',
                type: "weapon",
                description: "",
                prompt: "",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 2,
                equipable: false,
                consumable: false,
                src: ''
            },
            fermentedFruit: {
                label: "Fermented Fruit",
                name: 'fermentedFruit',
                type: "consumable",
                description: "",
                prompt: "",
                equipable: false,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: true,
                isHealing: true,
                state: 'drunk',
                src: ''
            },
            lowGradeSilk: {
                label: "Low Grade Silk",
                name: 'lowGradeSilk',
                type: "material",
                description: "",
                prompt: "",
                equipable: false,
                combinable: true,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            brokenTusk: {
                label: "Broken Tusk",
                name: 'brokenTusk',
                type: "material",
                description: "",
                prompt: "",
                equipable: false,
                combinable: true,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            brokenClaws: {
                label: "Broken Claws",
                name: 'brokenClaws',
                type: "material",
                description: "",
                prompt: "",
                equipable: false,
                combinable: true,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            fur: {
                label: "Fur",
                name: 'brokenClaws',
                type: "miscelaneous",
                description: "",
                prompt: "",
                equipable: false,
                combinable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            meat: {
                label: "Meat",
                name: 'meat',
                type: "material, consumable",
                description: "",
                prompt: "",
                equipable: false,
                combinable: true,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: true,
                isHealing: true,
                src: ''
            },
            brokenFangs: {
                label: "Meat",
                name: 'meat',
                type: "material",
                description: "",
                prompt: "",
                equipable: false,
                combinable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                isHealing: false,
                src: ''
            }

        }
    }   
}
