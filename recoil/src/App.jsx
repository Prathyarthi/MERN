import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationsCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const [messagingAtomCount, setmessagingAtomCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({notificationsAtomCount})</button>
      <button>Notifications({messagingAtomCount})</button>
      <button onClick={() => {
        setmessagingAtomCount(messagingAtomCount + 1)
      }}>Me ({totalNotificationCount})</button>
    </>
  )
}
export default App
