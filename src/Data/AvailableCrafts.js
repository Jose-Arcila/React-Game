export const availableCrafts = {
    craft1: {
        campfire: {
            name: "campfire",
            label: "Campfire",
            type: "station",
            skill: "cooking",
            requirements: {
                requirement1: "stone",
                requirement2: "stick"
            },
            requantities: {
                requan1: "5",
                requan2: "4"
            },
            slot: 'furniture',
            space: 1,
            level: 'craft1'
        },
        workbench: {
            name: "workbench",
            label: "Workbench",
            type: "station",
            skill: "craft",
            requirements: {requirement1: "wood"},
            perequirements: {perequirement1: "hatchet"},
            requantities: {requan1: "2"},
            perequantities: {perequan1: "1"},
            slot: 'furniture',
            space: 1,
            level: 'craft1' 
        },
        crudeTrap: {
            name: "crudeTrap",
            label: "Crude Trap",
            type: "trap",
            skill: "hunting",
            requirements: {
                requirement1: "wood",
                requirement2: "stick",
                requirement3: "vegetableRope",
            },
            requantities: {
                requan1: "2",
                requan2: "1",
                requan3: "1",
            },
            slot: 'furniture',
            space: 1,
            level: 'craft1'
        },
        hut: {
            name: "hut",
            label: "Hut",
            type: "house",
            skill: "hunting",
            requirements: {
                requirement1: "wood",
                requirement2: "leavesHandful"
            },
            requantities: {
                requan1: "10",
                requan2: "3",
            },
            slot: 'home',
            space: 10,
            level: 'craft1',
            location: 'DarkForest'
        }

    },
    bench1: {
        woodenTools: {
            id: 'CT1',
            name: "woodenTools",
            label: "Wooden Tools",
            type: "tools",
            skill: "craft",
            requirements: {
                requirement1: "wood",
                requirement2: "stick"
            },
            requantities: {
                requan1: "2",
                requan2: "2"
            },
            slot: 'inventory',
            level: 'bench1',
            description0: "Basic tools, including a small wooden chisel, a crude hammer and a sharpend piece of wood you have decided to call a pocket knife.",
            description1: "Basic tools, including a small wooden chisel, a crude hammer and a sharpend piece of wood you have decided to call a pocket knife.",
            description2: "Basic tools, including a small wooden chisel, a crude hammer and a sharpend piece of wood you have decided to call a pocket knife.",
            description3: "Basic tools, including a small wooden chisel, a crude hammer and a sharpend piece of wood you have decided to call a pocket knife.",
            quantity: 0,
            combinable: false,
            equipable: false,
            consumable: false,
            space: 0
            
        },
        woodenNeedles: {
            id: 'CT2',
            name: "woodenNeedles",
            label: "Wooden Needles",
            type: "weavetools",
            skill: "craft",
            perequirements: {perequirement1: "woodenTools"},
            perequantities: {perequan1: "1"},
            requirements: {
                requirement1: "wood",
                requirement2: "stick"
            },
            requantities: {
                requan1: "1",
                requan2: "1"
            },
            slot: 'inventory',
            level: 'bench1',
            description0: "These small, crude and blunt utensils should suffice to at least make yourself something more dignified.",
            description1: "These small, crude and blunt utensils should suffice to at least make yourself something more dignified.",
            description2: "These small, crude and blunt utensils should suffice to at least make yourself something more dignified.",
            description3: "These small, crude and blunt utensils should suffice to at least make yourself something more dignified.",
            quantity: 0,
            combinable: false,
            equipable: false,
            consumable: false,
            space: 0
            
        },
        tanningRack: {
            id: 'CT3',
            name: "tanningRack",
            label: "Tanning Rack",
            type: "tanningtool",
            skill: "craft",
            perequirements: {perequirement1: "woodenTools"},
            perequantities: {
                perequan1: "1"
            },
            requirements: {
                requirement1: "wood",
                requirement2: "stick",
                requirement2: "crudeLeather"
            },
            requantities: {
                requan1: "3",
                requan2: "3",
                requan3: "2"
            },
            slot: 'furniture',
            level: 'bench1',
            description0: "It's not much and the quality leaves a lot to be desired, but at the very least the leather shouldnt stick to your skin anymore.",
            description1: "It's not much and the quality leaves a lot to be desired, but at the very least the leather shouldnt stick to your skin anymore.",
            description2: "It's not much and the quality leaves a lot to be desired, but at the very least the leather shouldnt stick to your skin anymore.",
            description3: "It's not much and the quality leaves a lot to be desired, but at the very least the leather shouldnt stick to your skin anymore.",
            quantity: 0,
            space: 2
            
        }
    }
}