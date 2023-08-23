import { useNavigate } from 'react-router-dom'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const Message = ({ message, editable=false, userSpecific=false }) => {

    const navigate = useNavigate()

    const getMessage = (id) => {
        console.log("message: ", id)
    }

    const getUser = (e, user_id) => {
        e.stopPropagation()
        if (userSpecific) return
        console.log(user_id)
        navigate(`/users/${user_id}/messages`)
    }

    return (
        <div className="group flex flex-col gap-2 bg-primary p-5 rounded-md text-white border-4 border-red-500 hover:border-red-600" onClick={() => getMessage(message._id)}>
            <div className='flex justify-between'>
                <h3 className="font-bold text-2xl hover:text-red-500 hover:border-b-2 border-red-500" onClick={(e) => getUser(e, message.sender_id)}>{message.username}</h3>
                <p className={`${editable? "group-hover:hidden": ""} hidden text-neutral-300 italic font-mono sm:block`}>{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</p>
                {editable && <div className={`${editable? "group-hover:flex": ""} hidden gap-3`}>
                    <button className='h-11 w-11 p-2 rounded-full bg-black bg-opacity-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" fill='currentColor'/></svg></button>
                    <button className='h-11 w-11 p-2 rounded-full bg-black bg-opacity-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" fill='currentColor'/></svg></button>
                </div>}
            </div>
            <div className="m-2 p-3 flex flex-col gap-1 bg-neutral-600 rounded-md border-2 border-black">
                <h4 className="text-xl capitalize">{message.title}</h4>
                <p className="font-mono">{message.content}</p>
            </div>
            <p className="text-right text-neutral-300 italic font-mono sm:hidden">{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</p>
        </div>
    )
}
