import "tailwindcss/tailwind.css"

interface H1Props{
    className?: string
    children?: React.ReactNode
}

export const H1=(props:H1Props)=>{
    return(
        <h1 className={`text-3xl ${props.className}`}>
          {props.children}
        </h1>
    )
}