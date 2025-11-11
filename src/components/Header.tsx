type Title = {
    title: string
}

const Header = ({title}: Title) => {
  return (
    <header>
        <h1 className="text-center text-4xl underline" >{title}</h1>
    </header>
  )
}

export default Header