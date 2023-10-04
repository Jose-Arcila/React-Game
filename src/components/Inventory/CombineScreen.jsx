import { useEffect, useRef } from "react"
import { CombineScreenItem } from "./CombineScreenItem"

export const CombineScreen = ({firstItem, inventory, setIsCombining}) => {

  function hideOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsCombining(false)
          console.log(ref.current)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const combineScreen = useRef(null);
  hideOutsideClick(combineScreen);

  return (
    <div ref={combineScreen} className="combine-screen" onMouseLeave={()=>setIsCombining(false)}>
        {
            Object.values(inventory).map((u, i)=>
                <CombineScreenItem
                    key={i}
                    label={u.label}
                    id={u.id}
                    quantity={u.quantity}
                    firstItem={firstItem}
                    name={u.name}
                    setIsCombining={setIsCombining}
                />
            )
        }
    </div>
  )
}
