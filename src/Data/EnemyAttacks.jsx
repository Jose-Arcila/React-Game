export const enemyAttacks= {
    attack: {
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
    },
}