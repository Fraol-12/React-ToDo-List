import profilePic from './assets/react.svg'
function Card(){
  return(
    <div className="card">
      <img className='image-card' src={profilePic} alt="react" />
      <h2 className='card-title'>Fra Code</h2>
      <p className='card-text'>I am cooking react and what's odd is just start today</p>

    </div>
  );
}

export default Card