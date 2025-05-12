import './app-filter.scss'
export const AppFilter = ({updateFilterHedel, filter}) => {
  return (
    <div className="btn-group">
      {btnArr.map(btn => (
            <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark' }`} type='button' onClick={() => updateFilterHedel(btn.name)}>
              {btn.lable}
            </button>
      ))}
    </div>

    
  )
}

const btnArr = [
  {name: "all" ,lable: ' Barcha kinolar' },
  {name: "popular" ,lable: ' Mashhur kinolar' },
  {name: "mostViwers" ,lable:"Eng ko'p kurilgan kinolar"},
]

export default AppFilter