const title = {
   default: {
      title: "main-head_text"
   }
}

const TitleHead = ({className,children}) => {
   return (
      <h1 className={className}>{children}</h1>
   )
}

export const DefaultTitle = ({type='title',props}) => {
   return <h1 className={title.default[type]} >{props}</h1>
}

export default TitleHead;