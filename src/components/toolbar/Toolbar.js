import './Toolbar.css'

function Toolbar({filters, selected, onSelectFilter}){
  
  return(
    <div className='toolbar'>
      {filters.map((filter,id) => 
        <button key={id} 
          className={`filter-btn ${selected===filter ? 'filter-btn-active' : null}`} 
          onClick={() => onSelectFilter(filter)}>{filter}
        </button>
      )}
    </div>
  );
}

export default Toolbar;