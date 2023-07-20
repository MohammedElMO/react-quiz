import { useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function EndingToaster({ when }: { when: boolean }) {
  const notifys = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (when) notifys.current?.click()
  }, [when])

  const notify = () =>
    toast.info("⏳ you're time is Out", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })

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

export default EndingToaster
