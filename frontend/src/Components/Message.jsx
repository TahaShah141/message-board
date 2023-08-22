
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const Message = ({ message }) => {

  return (
    <div className="flex flex-col gap-2 bg-primary p-5 rounded-md text-white border-4 border-red-500">
        <div className='flex justify-between'>
            <h3 className="font-bold text-2xl">{message.username}</h3>
            <p className=" text-neutral-300 italic font-mono hidden sm:block">{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</p>
        </div>
        <div className="m-2 p-3 flex flex-col gap-1 bg-neutral-600 rounded-md border-2 border-black">
            <h4 className="text-xl capitalize">{message.title}</h4>
            <p className="font-mono">{message.content}</p>
        </div>
        <p className="text-right text-neutral-300 italic font-mono sm:hidden">{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</p>
    </div>
  )
}
