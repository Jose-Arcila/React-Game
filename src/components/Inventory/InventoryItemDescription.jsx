export const InventoryItemDescription = ({name, description}) => {
  return (
    <div className="inventory-item-description">
        <h2 className="inventory-item-description-title">{name}</h2>
        <p className="inventory-item-description-text">{description}</p>
    </div>
  )
}
