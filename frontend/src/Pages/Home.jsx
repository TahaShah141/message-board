import { useGetMessages } from "../Hooks/useGetMessages"

export default function Home() {

    const { getMessages, error } = useGetMessages()

    return (
    <>
    <div className="flex gap-4 m-3">
        {/* <button className="bg-neutral-700 text-white p-2 rounded-md shadow-black shadow-sm" onClick={() => dispatch({type: 'SET_USERNAME', payload: 'TahaShah141'})}>Set Username</button>
        <button className="bg-neutral-700 text-white p-2 rounded-md shadow-black shadow-sm" onClick={() => dispatch({type: 'NEW_MESSAGE', payload: {dummyData: "dummy", _id: 876, message: 'test876'}})}>New Message</button> */}
        <button className="bg-neutral-700 text-white p-2 rounded-md shadow-black shadow-sm" onClick={() => getMessages()}>Get Messages</button>
        {error && <p>{error.name}</p>}
        {/* <button className="bg-neutral-700 text-white p-2 rounded-md shadow-black shadow-sm" onClick={() => dispatch({type: 'DELETE_MESSAGE', payload: {dummyData: "dummy", _id: 123, message: 'test876'}})}>Delete Message</button>
        <button className="bg-neutral-700 text-white p-2 rounded-md shadow-black shadow-sm" onClick={() => dispatch({type: 'EDIT_MESSAGE', payload: {dummyData: "dummy", _id: 456, message: 'changed'}})}>Edit Message</button> */}
    </div>
    </>
    )
}
