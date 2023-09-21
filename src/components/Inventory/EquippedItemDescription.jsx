export const EquippedItemDescription = ({item}) => {
    const {content} = item
    const {type, name, damage, label} = content
    return (
        <div className="equipment-item-container-description">

            <p>{label}</p>
            {/* <p>Rarity: {content.type}</p> */}

            {
                type.includes('weapon') === true ? <div><p>type: Weapon</p> <p>damage: {damage}</p></div> :
                console.log('tarata')
            }

            
        </div>
    )
}
