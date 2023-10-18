export const AvailableItems = {
    oneStar: {
        general: {
            stick: {
                id: 'A1',
                label: "Stick",
                name: 'stick',
                class: "savage",
                type: "material, blunt weapon",
                description0: "A simple stick, possibly formerly a branch from some tree.",
                description1: "A simple stick, possibly formerly a branch from some tree. It could be nicely used as a weapon.",
                description2: "A simple stick, possibly formerly a branch from some tree.",
                description3: "A simple stick, possibly formerly a branch from some tree.",
                prompt: "The ground is littered with dry branches and leaves. You lower your body and fetch a single wooden stick. It's not much, but it's yours.",
                isEquipable: true,
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
                id: 'A2',
                label: "Stone",
                name: 'stone',
                type: "material",
                description0: `The most basic product of nature, simple and versatile.`,
                description1: "The most basic product of nature, simple and versatile. \n Perhaps something more useful could be made from it.",
                description2: "The most basic product of nature, simple and versatile. \n Perhaps something more useful could be made from it.",
                description3: "The most basic product of nature, simple and versatile. \n Perhaps something more useful could be made from it.",
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
                id: 'A3',
                label: "Handful of Grass",
                name: 'grassHandful',
                type: "material",
                description0: "Simple grass, green and somewhat wet.",
                description1: "Simple grass, green and somewhat wet. It could provide to make a good amount of fiber.",
                description2: "Simple grass, green and somewhat wet. It could provide to make a good amount of fiber.",
                description3: "Simple grass, green and somewhat wet. It could provide to make a good amount of fiber.",
                prompt: "A forest so vast and dark can get pretty boring. Nobody would condemn you for ripping up the grass around you, probably.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            berryOne: {
                id: 'A4',
                label: "Berry",
                name: 'berryOne',
                type: "consumable",
                description0: "A colorful little treat, slightly sweet.",
                description1: "A colorful little treat, slightly sweet. Eating it makes you feel better.",
                description2: `A colorful little treat, slightly sweet. Eating it makes you feel better. <br> but"`,
                description3: "A colorful little treat, slightly sweet.",
                description4: "A colorful little treat, slightly sweet.",
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
                id: 'A5',
                label: "Acrid Herbs",
                name: 'acridHerbs',
                type: "consumable",
                description0: "Randomly colored herbs that smell and taste quite sour.",
                description1: "Randomly colored herbs that smell and taste quite sour.",
                description2: "Randomly colored herbs that smell and taste quite sour.",
                description3: "Randomly colored herbs that smell and taste quite sour.",
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
                id: 'A6',
                label: "Dull Insect",
                name: 'dullInsect',
                type: "consumable, material",
                description0: "A dead insect, snatched from its dying place.",
                description1: "A dead insect, snatched from its dying place.",
                description2: "A dead insect, snatched from its dying place.",
                description3: "A dead insect, snatched from its dying place.",
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
                id: 'A7',
                label: "Suspicious Fruit",
                name: 'suspiciousFruit',
                type: "consumable",
                description0: "A heavy and otherwise unknown fruit.",
                description1: "A heavy and otherwise unknown fruit.",
                description2: "A heavy and otherwise unknown fruit.",
                description3: "A heavy and otherwise unknown fruit.",
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
                id: 'A8',
                label: "Handful of Leaves",
                name: 'leavesHandful',
                type: "material",
                description0: "A simple handful of leaves from a tree.",
                description1: "A simple handful of leaves from a tree.",
                description2: "A simple handful of leaves from a tree.",
                description3: "A simple handful of leaves from a tree.",
                prompt: "Leaves could be useful for many things, although you are uncertain of which ones. Regardless, you grab a handful.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            treeVines: {
                id: 'A9',
                label: "Tree Vines",
                name: 'treeVines',
                type: "material",
                description0: "Long green vegetal material plucked directly from a tree.",
                description1: "Long green vegetal material plucked directly from a tree.",
                description2: "Long green vegetal material plucked directly from a tree.",
                description3: "Long green vegetal material plucked directly from a tree.",
                prompt: "A long, dangly object wraps around your head as you walk by. Before letting out a pathethic yelp you look at it and notice that it was simply a few green vines.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            smallBones: {
                id: 'A10',
                label: "Small Bones",
                name: 'smallBones',
                type: "material",
                description0: "You discern nothing except the fact that they're old bones.",
                description1: "The bones of a small animal, most probably a mamal.",
                description2: "The many bones of a rat. Between them you can see a parietal bone, a femur, and several ribs. It might be useful to grind them into bonedust.",
                description3: "The many bones of a rat. Between them you can see a parietal bone, a femur, and several ribs. It might be useful to grind them into bonedust.",
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
                description0: "A rusty old coin. It's hard to the touch, although its surface feels slimy.",
                description1: "A rusty old coin. It's hard to the touch, although its surface feels slimy. Someone might give you something for it.",
                description2: "A rusty old coin. It's hard to the touch, although its surface feels slimy. Someone might give you something for it. \n It seems to be made from some form of alloy, most probably nickel and iron.",
                description3: "A rusty old coin. It's hard to the touch, although its surface feels slimy. Someone might give you something for it. \n It seems to be made from some form of alloy, most probably nickel and iron. There's a faded etching on its surface. \n weight: approx 28.3gr \n dimensions: 3cm diameter x 0.5cm base. \n volume: approx 3.5cm3. \n Density: 8.1gr/cm3",
                prompt: "A dull light reflects from underneath the water. You are called to it and reach, only to find a rusted, musty coin.",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            
            
        },
        specialDrops: {
            SD1: {
                id: 'SD1',
                label: "Wood",
                name: 'wood',
                type: "material",
                description0: "Simple, reliable, sturdy wood.",
                description1: "Simple, reliable, sturdy wood.",
                description2: "Simple, reliable, sturdy wood.",
                description3: "Simple, reliable, sturdy wood.",
                equipable: false,
                quantity: 0,
                damage: 0,
                consumable: false,
                src: ''
            }
        },
        combinedItems: {
            A1A2: {
                id: 'A1A2',
                label: "Primitive Spear",
                name: 'primitiveSpear',
                type: "piercing weapon",
                class: "savage",
                description0: "A wooden stick sharpened with a rock. Better than nothing.",
                description1: "A wooden stick sharpened with a rock. Better than nothing.",
                description2: "A wooden stick sharpened with a rock. Better than nothing.",
                description3: "A wooden stick sharpened with a rock. Better than nothing.",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 2,
                consumable: false,
                src: ''
            },
            A2A1: {
                id: 'A1A2',
                label: "Primitive Spear",
                name: 'primitiveSpear',
                type: "piercing weapon",
                class: "savage",
                description0: "A wooden stick sharpened with a rock. Better than nothing.",
                description1: "A wooden stick sharpened with a rock. Better than nothing.",
                description2: "A wooden stick sharpened with a rock. Better than nothing.",
                description3: "A wooden stick sharpened with a rock. Better than nothing.",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 2,
                consumable: false,
                src: ''
            }, 
            A2A2: {
                id: 'A2A2',
                label: "Sharpened Rock",
                name: 'sharpenedRock',
                type: "cutting weapon, material",
                class: "savage",
                description0: "The product of two stones being hit together. \n damage: 2",
                description1: "The product of two stones being hit together. It could serve as more than a primitive weapon. \n damage: 2",
                description2: "The product of two stones being hit together. Combine it with a stick to make a hatchet. \n damage: 2",
                description3: "The product of two stones being hit together. Combine it with a stick to make a hatchet. \n damage: 2",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 2,
                consumable: false,
                src: ''
            },
            A1A2A2: {
                id: 'A1A2A2',
                label: "Hatchet",
                name: 'hatchet',
                type: "cutting weapon, axe",
                class: "savage",
                description0: "A crude hatchet made with stick and stone. \n damage: 3",
                description1: "A crude hatchet made with stick and stone. It could serve as more than a primitive weapon. \n damage: 3",
                description2: "A crude hatchet made with stick and stone. \n damage: 3",
                description3: "A crude hatchet made with stick and stone. \n damage: 3",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 3,
                consumable: false,
                src: ''
            },
            A2A2A1: {
                id: 'A1A2A2',
                label: "Hatchet",
                name: 'hatchet',
                type: "cutting weapon, axe",
                class: "savage",
                description0: "A crude hatchet made with stick and stone. \n damage: 3",
                description1: "A crude hatchet made with stick and stone. It could serve as more than a primitive weapon. \n damage: 3",
                description2: "A crude hatchet made with stick and stone. \n damage: 3",
                description3: "A crude hatchet made with stick and stone. \n damage: 3",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 3,
                consumable: false,
                src: ''
            },
            A2A9: {
                id: 'A2A3',
                label: "Vegetable Fiber",
                name: 'vegetableFiber',
                type: "material",
                description0: "Beaten and strung pieces of grass.",
                description1: "Beaten and strung pieces of grass. More of it could be useful.",
                description2: "Beaten and strung pieces of grass. Combine it with more fiber to make rope.",
                description3: "Beaten and strung pieces of grass. Combine it with more fiber to make rope.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            A2A3: {
                id: 'A2A3',
                label: "Vegetable Fiber",
                name: 'vegetableFiber',
                type: "material",
                description0: "Beaten and strung pieces of grass.",
                description1: "Beaten and strung pieces of grass. More of it could be useful.",
                description2: "Beaten and strung pieces of grass. Combine it with more fiber to make rope.",
                description3: "Beaten and strung pieces of grass. Combine it with more fiber to make rope.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            A5A5: {
                id: 'A5A5',
                label: "Improvised Medicine",
                name: 'improvisedMedicine',
                type: "material",
                description0: "A handful of bitter, disgusting herbs that make you feel slightly better.",
                description1: "A handful of bitter, disgusting herbs that make you feel slightly better. Perhaps the formula could be made better, somehow.",
                description2: "A handful of bitter, disgusting herbs that make you feel slightly better. Combining it with acidic liquids might make it easier to ingest, and easier to digest.",
                description3: "A handful of bitter, disgusting herbs that make you feel slightly better. A very rough base for an improvised slime and herb medicine.",
                quantity: 0,
                damage: 3 ,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            A5A5mo1: {
                id: 'A5A5mo1',
                label: "Improvised Potion",
                name: 'improvisedPotion',
                type: "material",
                description0: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description1: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description2: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description3: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                quantity: 0,
                damage: 5,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            mo1A5A5: {
                id: 'A5A5mo1',
                label: "Improvised Potion",
                name: 'improvisedPotion',
                type: "material",
                description0: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description1: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description2: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                description3: "A strange concotion, more of a salve than a potion. Drinking it makes a warm sensation spread through your abdomen.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            A2A3A2A3: {
                id: 'A2A3A2A3',
                label: "Vegetable Rope",
                name: 'vegetableRope',
                type: "material",
                description0: "A meter of sturdy plant-based rope.",
                description1: "A meter of sturdy plant-based rope.",
                description2: "A meter of sturdy plant-based rope.",
                description3: "A meter of sturdy plant-based rope.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            A2A10: {
                id: 'A1A10',
                label: "Powdered Bone",
                name: 'powderedBone',
                type: "material",
                description0: "Organic material, apt for composting.",
                description1: "Organic material, apt for composting, and some other more otherwordly acts.",
                description2: "Organic material, apt for composting. You might be able to use it in the craft of potions.",
                description3: "Organic material, apt for composting. Usable in the craft of Growth and Break potions.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            mo5mo5: {
                id: 'mo5mo5',
                label: "Low Grade Thread",
                name: 'lowGradeThread',
                type: "material",
                description0: "A soft and strong thread, woven from a giant spider's silk.",
                description1: "A soft and strong thread, woven from a giant spider's silk. You might use it to craft clothes.",
                description2: "A soft and strong thread, woven from a giant spider's silk. You might use it to craft clothes.",
                description3: "A soft and strong thread, woven from a giant spider's silk. You might use it to craft clothes.",
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            }

        },
        monsterDrops: {
            slimyLiquid: {
                id: 'mo1',
                label: "Slimy Liquid",
                name: 'slimyLiquid',
                type: "material",
                description0: "A slimy, inconsistent and transparent liquid that slithers off your hands.",
                description1: "A slimy, inconsistent and transparent liquid that slithers off your hands. It may be usable in a variety of crafts as glue.",
                description2: "The primary building block for a slime's shell. It can be used as glue or burned to obtain resin. This material is almost 96% water, the rest appearing to be an assortment of different proteins like mucin.",
                description3: "The primary building block for a slime's shell. It can be used as glue or burned to obtain resin. This material is almost 96% water, the rest appearing to be an assortment of different proteins like mucin.",
                prompt: "",
                equipable: false,
                quantity: 0,
                damage: 0,
                combinable: true,
                equipable: false,
                consumable: false,
                src: ''
            },
            dirtyRags: {
                id: 'mo2',
                label: "Dirty Rags",
                name: 'dirtyRags',
                type: "material",
                description0: "Dirty, bloodied and useless.",
                description1: "Dirty, bloodied and useless.",
                description2: "Dirty, bloodied and useless.",
                description3: "Dirty, bloodied and useless.",
                prompt: "",
                equipable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                src: ''
            },
            primitiveClub: {
                id: 'mo3',
                label: "Primitive Club",
                name: 'primitiveClub',
                type: "blunt weapon",
                class: "savage",
                isEquipable: true,
                description0: "A crude weapon made with a big stick, used by primitive species.",
                description1: "A crude weapon made with a big stick, used by primitive species. Its offensive capabilities are slight above a regular old stick.",
                description2: "A crude weapon made with a big stick, used by primitive species. Its offensive capabilities are slight above a regular old stick.",
                description3: "A crude weapon made with a big stick, used by primitive species. Its offensive capabilities are slight above a regular old stick.",
                prompt: "",
                equipable: {
                    isEquipable: true,
                    equipSlot: 'rightHand'
                },
                quantity: 0,
                damage: 2,
                consumable: false,
                src: ''
            },
            fermentedFruit: {
                id: 'mo4',
                label: "Fermented Fruit",
                name: 'fermentedFruit',
                type: "consumable",
                description0: "A slightly rancid fruit held by a monkey. It might be apt for consumption.",
                description1: "A slightly rancid fruit held by a monkey. It might be apt for consumption, but eating it may cause you to feel a bit woozy.",
                description2: "A slightly rancid fruit held by a monkey. Apt for consumption, but can cause you to feel drunk. It could be possible to gather them and create a more refined alcoholic beverage.",
                description3: "A slightly rancid fruit held by a monkey. Apt for consumption, but can cause you to feel drunk. It can be refined into alcohol.",
                prompt: "",
                equipable: false,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                state: 'drunk',
                src: ''
            },
            lowGradeSilk: {
                id: 'mo5',
                label: "Low Grade Silk",
                name: 'lowGradeSilk',
                type: "material",
                description0: "A giant spider's silk, stretchy and resistant.",
                description1: "A giant spider's silk, stretchy and resistant. Althought it is of bad quality, you might be able to weave it into something useful.",
                description2: "A giant spider's silk, stretchy and resistant. Usable to craft low-quality textiles and ropes. This material has impressive tensile strenght, close to steel itself, with four to six times less weight.",
                description3: "A giant spider's silk, stretchy and resistant. Usable to craft low-quality textiles and ropes. This material has impressive tensile strenght, close to steel itself, with four to six times less weight.",
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
                id: 'mo6',
                label: "Broken Tusk",
                name: 'brokenTusk',
                type: "material",
                description0: "The broken tusk of a boar. Useless by itself.",
                description1: "The broken tusk of a boar. It might be used as a crafting material for small weapons.",
                description2: "The broken tusk of a boar. It might be used as a crafting material for small weapons. You might be able to extract ivory from it.",
                description3: "The broken tusk of a boar. It might be used as a crafting material for small weapons. You might be able to extract ivory from it.",
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
                id: 'mo7',
                label: "Broken Claws",
                name: 'brokenClaws',
                type: "material",
                description0: "The broken claw of a feral animal.",
                description1: "The broken claw of a feral animal.",
                description2: "The broken claw of a feral animal.",
                description3: "The broken claw of a feral animal.",
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
                id: 'mo8',
                label: "Fur",
                name: 'brokenClaws',
                type: "miscelaneous",
                description0: "Prickly, warm fur. It might be useful for something.",
                description1: "Prickly, warm fur. It might be useful for something.",
                description2: "Prickly, warm fur. It might be useful for something.",
                description3: "Prickly, warm fur. It might be useful for something.",
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
                id: 'mo9',
                label: "Meat",
                name: 'meat',
                type: "material, consumable",
                description0: "The flesh of an animal, ready to be eaten. Though the taste is quite gamey.",
                description1: "The flesh of an animal, ready to be eaten. Though the taste is quite gamey.",
                description2: "The flesh of an animal, ready to be eaten. Though the taste is quite gamey.",
                description3: "The flesh of an animal, ready to be eaten. Though the taste is quite gamey.",
                prompt: "",
                equipable: false,
                combinable: true,
                quantity: 0,
                damage: 1,
                equipable: false,
                consumable: {
                    isConsumable: true,
                    isHealing: true
                },
                src: ''
            },
            brokenFangs: {
                id: 'mo10',
                label: "Broken Fang",
                name: 'brokenFangs',
                type: "material",
                description0: "The broken teeth of a feral animal.",
                description1: "The broken teeth of a feral animal. It might work to craft miscelanious items.",
                description2: "The broken teeth of a feral animal. It might work to craft miscelanious items.",
                description3: "The broken teeth of a feral animal. It might work to craft miscelanious items.",
                prompt: "",
                equipable: false,
                combinable: false,
                quantity: 0,
                damage: 0,
                equipable: false,
                consumable: false,
                isHealing: false,
                src: ''
            },
            crudeLeather: {
                id: 'mo11',
                label: "Crude Leather",
                name: 'crudeLeather',
                type: "material",
                description0: "The remains of a sturdy animal's skin.",
                description1: "The remains of a sturdy animal's skin. It might work to craft clothes and armor, but not in this state.",
                description2: "The remains of a sturdy animal's skin. Cure it in a workbench to",
                description3: "The remains of a sturdy animal's skin. It might work to craft clothes and armor, but not in this state.",
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
