import { useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ScoreToaster({ when, score }: { when: boolean; score: number }) {
  const notifys = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (when) notifys.current?.click()
  }, [when])

  const notify = () =>
    setTimeout(() => {
      toast.success(`💯 you're score is ${score}`, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    },2000)

  return (
    <div>
      <button onClick={notify} hidden={true} ref={notifys}>
        Notify!
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default ScoreToaster
