import { Message } from "./Message"

export const MessageList = ({ messages }) => {

  return (
    <div className="flex flex-col gap-3 p-6">
        {messages.map(msg => <Message message={msg} key={msg._id} />)}
        {messages.length === 0 && <p className="text-center p-2 text-3xl text-white font-mono font-bold">NO Messages posted yet...</p>}
    </div>
  )
}
