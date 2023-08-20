import { useAPIContext } from "../Hooks/useAPIContext"

export default function Home() {
    const { messages } = useAPIContext()

    console.log(messages)
    return (<></>
    )
}
