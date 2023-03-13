import { useRef, forwardRef, useImperativeHandle } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
    <div
      {...props}
      ref={localRef}
      className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'><Navbar />
      {children}
    </div></>
  )
})
Layout.displayName = 'Layout'

export default Layout
