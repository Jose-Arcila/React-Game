export const handleAnalyze=(skills, currentAppState, setCurrentAppState, giveexp, setIsAnalyzing, availableSkills)=>{
    if(!skills.analyze){
        setCurrentAppState(state=> {
            return {
            ...state,
            MainCharacter: {
                ...state.MainCharacter,
                skills: {
                    ...state.MainCharacter.skills,
                    analyze: availableSkills.analyze
                }
            },
            events: [
                `Learning successful. The skill Analyze has been acquired.`,
                ...state.events
            ]
        }})
        setIsAnalyzing(state=>{
            return {
                ...state,
                analyzing: 'yes-analyzing',
                buttonDisabled: true
            }
        })
        setTimeout(() => {
            setIsAnalyzing(state=>{
                return {
                    ...state,
                    analyzing: 'not-analyzing',
                    finishedAnalyzing: true,
                    buttonDisabled: false
                }
            })
        }, 4000);
    }else{
        setIsAnalyzing(state=>{
            return {
                ...state,
                analyzing: 'yes-analyzing',
                buttonDisabled: true
            }
        })
        setTimeout(() => {
            setIsAnalyzing(state=>{
                return {
                    ...state,
                    analyzing: 'not-analyzing',
                    finishedAnalyzing: true,
                    buttonDisabled: false
                }
            })
            giveexp('analyze', currentAppState, setCurrentAppState)
        }, eval("skills.analyze.cooldown" + skills.analyze.level));
    }
}