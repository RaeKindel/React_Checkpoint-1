
import { useState } from 'react';
import image from './assets/photo1.avif';

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <button onClick={() => setShow(!show)}>show</button>
    {show ?
    <div>
        <div className = 'card'>
          <div className = "container" >
            <div className="img">  
               <img src={image} alt="" />
            </div>
            <div className="fullname">
                {<h2>SILVIA JESSICA</h2> }
            </div>
      <div className='gether'>
         <div className="profession">
            <h2>Professional Dancer</h2>
          </div>
          <div className="bio">
              <p>I am a passionate and dedicated professional dancer with a deep love for the art of movement. My journey in the world of dance has been a lifelong pursuit of excellence.</p>
              <p>I am passionate about sharing my knowledge and experience with aspiring dancers and the broader community. </p>
              <p>As I continue to evolve as an artist, I am excited to explore new horizons and take on fresh challenges.</p>
          </div>
           <button><a href="https./google.com"> IMPRESSED? See More</a></button>
      </div>
      </div >
    </div >
    </div>
    :
    <div>no profile yet......</div>
    }
    </>
  )
}

export default Card