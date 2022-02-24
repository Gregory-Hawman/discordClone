import { BsPlusCircleFill } from 'react-icons/bs';

export default function BottomBar() {
    return (
        <div className="bottom-bar">
            <div className="bottom-bar-input">
                <PlusIcon />
                <input className="w-full rounded-md bg-gray-600 placeholder:text-gray-500 ml-4 bg-transparent outline-none text-white"
                    placeholder='Message...'
                />
            </div>
        </div>
    )
}

const PlusIcon = () => {
    return (
        <BsPlusCircleFill 
            size='22'
            className='text-green-500 dark:shadow-lg mx-2 dark:text-white'
        />
    )
}