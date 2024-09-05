import './ProjectList.css'

function ProjectList({elements}){
  return(
    <div className="masonry">
      {elements.map((elem,id) => <img key={id} src={elem.img} alt="" width="250" className='item'/>)}
    </div>
  );
}


export default ProjectList;