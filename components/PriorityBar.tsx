import { getColorByPriority } from "@/utils/functions"
import { usePriorityBarContext } from "@/utils/context/PriorityBarConext";
import { priorityOptions } from "@/utils/contsants";

const PriorityBar = () => {
  
  const {state: { priority, handleSelectChange }} = usePriorityBarContext()
  console.log(priority)

  return (
    <div className='flex flex-col w-fit'>
    <span>Priority:</span>
    <select
      value={priority}
      className={`${getColorByPriority(
        priority
      )} rounded-lg px-2 cursor-pointer capitalize p-2 outline-none`}
      onChange={handleSelectChange}
    >
      {priorityOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default PriorityBar
