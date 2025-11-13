type CardProp = {
    title: string
    description?: string 
    url: string
}

const Card = ({title, description, url}: CardProp) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 bg-gray-300" >
        <h1 className="text-4xl" >{title}</h1>
        <h2 className="text-2xl" >{description}</h2>
        <img src={url}/>
    </div>
  )
}

export default Card