import { AvailableItems } from "./AvailableItems"

const { oneStar } = AvailableItems

const attack= {
    effect: (damage, setCurrentAppState, MainCharacter)=>{
        setCurrentAppState(state=>{
            return {
                ...state,
                MainCharacter: {
                    ...state.MainCharacter,
                    hp: {
                        ...state.MainCharacter.hp,
                        value: MainCharacter.hp.value - damage
                    }
                }
            }
        })
    },
}

export const AvailableEnemies = {
    oneStar: {
        general: {
            slime: {
                atk: 1,
                def: 1,
                agi: 0,
                hp: 5,
                maxhp: 5,
                mp: 3,
                skills: {
                    tackleAttack: {
                        effect: attack.effect,
                        name: 'Tackle',
                        class: 'physical',
                        range: 'close',
                        damage: 1
                    },
                    acidSpit: {
                        effect: attack.effect,
                        name: 'Acid Shot',
                        class: 'physical',
                        range: 'long',
                        damage: 1
                    }
                },
                prompt: 'As you prance calmly through the forest, your foot gets stuck on a slimy, sticky substance. You look around, and see a bouncing liquid sphere moving towards you. Slowly. Very slowly.',
                name: 'Slime',
                drops: {
                    slime: oneStar.monsterDrops.slimyLiquid
                }
            },
            goblin: {
                atk: 2,
                def: 1,
                agi: 2,
                hp: 5,
                maxhp: 5,
                mp: 0,
                skills: {
                    clubAttack: {
                        effect: attack.effect,
                        name: 'Club',
                        range: 'close',
                        class: 'physical',
                        damage: 2
                    },
                    bite: {
                        effect: attack.effect,
                        name: 'Bite',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: 'Warty, ugly and pig-like, a small figure makes its way towards you with a slimy grin. It seems like you cannot talk it out of this.',
                name: 'Goblin',
                drops: {
                    club: oneStar.monsterDrops.primitiveClub,
                    rags: oneStar.monsterDrops.dirtyRags
                }
            },
            monkey: {
                atk: 1,
                def: 1,
                agi: 3,
                hp: 5,
                maxhp: 5,
                mp: 0,
                skills: {
                    scratch: {
                        effect: attack.effect,
                        name: 'Scratch',
                        range: 'close',
                        damage: 1
                    },
                    bite: {
                        effect: attack.effect,
                        name: 'Bite',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: "A swing of the vines and a small shadow lands in front of you. It opens it's mouth to bare a set of horrifying teeth, and approaches you with ill intent, screaming.",
                name: 'Monkey',
                drops: {
                    fermentedFruit: oneStar.monsterDrops.fermentedFruit,
                }
            },
            boar: {
                atk: 2,
                def: 3,
                agi: 0,
                hp: 5,
                maxhp: 5,
                mp: 0,
                skills: {
                    tackle: {
                        effect: attack.effect,
                        name: 'Tackle',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    },
                    kick: {
                        effect: attack.effect,
                        name: 'kick',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: 'A rumbling calls your attention as you walk, and your hairs stand on end. You manage to dodge out of the way as a massive animal hurls all of its weight towards you. It turns around, looking at you with a fierce intent.',
                name: 'Boar',
                drops: {
                    brokenTusk: oneStar.monsterDrops.brokenTusk,
                    meat: oneStar.monsterDrops.meat,
                    crudeLeather: oneStar.monsterDrops.crudeLeather
                }
            },
            deer: {
                atk: 2,
                def: 2,
                agi: 2,
                hp: 3,
                maxhp: 3,
                mp: 0,
                skills: {
                    tackle: {
                        effect: attack.effect,
                        name: 'Tackle',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    },
                    kick: {
                        effect: attack.effect,
                        name: 'kick',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: 'You set your eyes on the distance and see a large patch of brown. As you walk closer, you notice a pair of antlers that raise in response to your sudden arrival.',
                name: 'deer',
                drops: {
                    meat: oneStar.monsterDrops.meat,
                }
            },
            wolf: {
                atk: 2,
                def: 2,
                agi: 1,
                hp: 5,
                maxhp: 5,
                mp: 0,
                skills: {
                    bite: {
                        effect: attack.effect,
                        name: 'Bite',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    },
                    scratch: {
                        effect: attack.effect,
                        name: 'Scratch',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: 'The sudden sound of a howling beast makes your hairs stand on end. Fearing the worst you look around you, and as expected, gaze upon a single, small wolf baring its fangs at you.',
                name: 'Wolf',
                drops: {
                    brokenFangs: oneStar.monsterDrops.brokenFangs,
                    fur: oneStar.monsterDrops.fur
                }
            },
            livingShrub: {
                atk: 1,
                def: 1,
                agi: 2,
                hp: 3,
                maxhp: 3,
                mp: 2,
                skills: {
                    whip: {
                        effect: attack.effect,
                        name: 'Whip',
                        range: 'long',
                        class: 'physical',
                        damage: 2
                    },
                    scratch: {
                        effect: attack.effect,
                        name: 'Scratch',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    }
                },
                prompt: "You go in to collect a few hanging berrires, but your hand is met by a ferocious slap. Uncapable of understanding what's going on, you have no choice but to fight as the bush begins moving.",
                name: 'Living Shrub',
                drops: {
                    stick: oneStar.general.stick,
                    leavesHandful: oneStar.general.leavesHandful

                }
            },
            arachnid: {
                atk: 2,
                def: 2,
                agi: 3,
                hp: 5,
                maxhp: 5,
                mp: 0,
                skills: {
                    whip: {
                        effect: attack.effect,
                        name: 'Whip',
                        range: 'long',
                        class: 'physical',
                        damage: 2
                    },
                     bite: {
                        effect: attack.effect,
                        name: 'Bite',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                     }
                },
                prompt: 'A constant crawling and a sizzling sound can be heard from the trees. You step away looking to escape, but fall on a sticky net instead. The host slowly approaches you, salivating.',
                name: 'Arachnid',
                drops: {
                    lowGradeSilk: oneStar.monsterDrops.lowGradeSilk
                }
            },
            minigeo: {
                atk: 2,
                def: 3,
                agi: 0,
                maxhp: 5,
                hp: 5,
                mp: 0,
                skills: {
                    tackle: {
                        effect: attack.effect,
                        name: 'Tackle',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    },
                },
                prompt: 'Tired and confused you sit on a rock, only to be received with rumbling and shaking. You hurriedly stand up, but the poor rock has already been disturbed.',
                name: 'Living Stone',
                drops: {
                    stone: oneStar.general.stone
                }
            },
            insectSwarm: {
                atk: 1,
                def: 0,
                agi: 5,
                hp: 7,
                maxhp: 7,
                mp: 0,
                skills: {
                    bite: {
                        effect: attack.effect,
                        name: 'Bite',
                        range: 'close',
                        class: 'physical',
                        damage: 1
                    },
                },
                prompt: 'A sudden buzz passes you by- right before a few more pass right beside your ear. Soon enough, a myriad of insects is heading your way, their stingers at the ready.',
                name: 'Insect Swarm',
                drops: {
                    dullInsect: oneStar.general.dullInsect
                }
            }
        }
    }
}




