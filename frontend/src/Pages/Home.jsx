import { useEffect } from "react"
import { useAPIContext } from "../Hooks/useAPIContext"
import { useGetMessages } from "../Hooks/useGetMessages"
import { MessageList } from "../Components/MessageList"

export default function Home() {

    const { getMessages, error, isLoading } = useGetMessages()

    const { messages } = useAPIContext()

    useEffect(() => {
        getMessages()
    }, [])
    
    return (
    <>
    <div className=" m-10 bg-neutral-800 rounded-xl border border-black">
        {error && <p className="error">{error.message}</p>}
        {isLoading && <p className=" text-center p-4 text-3xl text-white font-mono font-bold animate-pulse">Loading...</p>}
        {!isLoading && <MessageList messages={messages} />}
    </div>
    </>)
}
