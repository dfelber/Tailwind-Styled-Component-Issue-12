import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <div>
      <DefaultContainer>
        <pre>DefaultContainer<br/>
        I have following classes: flex items-center bg-blue-600</pre>
      </DefaultContainer>
      <RedContainer>
        <pre>Red Container<br/>
        I have following classes: bg-red-300 flex items-center bg-blue-600<br/>
        but I should have: bg-red-300 flex items-center</pre>
      </RedContainer>
    </div>
  )
}

const DefaultContainer = tw.div`
    flex
    items-center
    bg-blue-600
`

const RedContainer = tw(DefaultContainer)`
    bg-red-300
`
