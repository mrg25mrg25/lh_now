"use client"
 
import { useTheme } from "next-themes"

export default function page() {
  const {resolvedTheme,setTheme}=useTheme()
  return (
    <div>
        <button onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}>
          {resolvedTheme ==='dark'?'light' : 'dark'}
        </button>
    </div>
  )
}
