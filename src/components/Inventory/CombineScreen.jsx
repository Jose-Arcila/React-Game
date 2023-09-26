import { CombineScreenItem } from "./CombineScreenItem"

export const CombineScreen = ({firstItem, inventory}) => {
  return (
    <div className="combine-screen">
        {
            Object.values(inventory).map((u, i)=>
                <CombineScreenItem
                    key={i}
                    label={u.label}
                    id={u.id}
                    quantity={u.quantity}
                    firstItem={firstItem}
                    name={u.name}
                />
            )
        }
    </div>
  )
}
