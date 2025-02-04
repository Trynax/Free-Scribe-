import HomePage from "./components/HomePage"
import Header from "./components/Header"
import { useState } from "react"
import FileDisplay from "./components/FileDisplay"


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setAudioStream(null)
    setFile(null)
  }
  return (
    <div className=" flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col ">
        <Header/>
    { isAudioAvailable ? (
      <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={audioStream}/>
    ):   ( <HomePage setAudioStream={setAudioStream} setFile={setFile}/>)}
      </section>
 
<footer>

</footer>
    </div>
  )
}

export default App
