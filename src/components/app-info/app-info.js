import './app-info.scss'
export const AppInfo = ({allMoviesContent, favoriteMovies}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {allMoviesContent} </p>
      <p className="fs-4 text-uppercase">Sevinli filimlar: {favoriteMovies}</p>
    </div>
  )
}

export default AppInfo