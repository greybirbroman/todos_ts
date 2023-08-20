import { getTaskColorByPriority } from "@/utils/functions"
import { usePriorityBarContext } from "@/utils/context/PriorityBarConext";

const priorityOptions = ['high', 'medium', 'low', 'rapid'];

const PriorityBar = () => {
  
  const {state: { priority, handleSelectChange }} = usePriorityBarContext()

  return (
    <div className='flex flex-col w-fit'>
    <span>Priority:</span>
    <select
      value={priority}
      className={`${getTaskColorByPriority(
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
