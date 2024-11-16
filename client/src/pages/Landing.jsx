import React, { useEffect } from 'react'
import '../styles/landing.css'
// import {PiStudent} from 'react-icons/pi'
// import {FaHandHoldingWater} from 'react-icons/fa'
// import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>Work Hive</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>Unlock Your Potential: Elevate Your Craft on WorkHive</h1>
                <p>Step into a world of infinite opportunities with WorkHive. Channel your creativity, expertise, and passion as you embark on a freelancing journey like no other. Our platform is a dynamic marketplace where innovation meets ambition, connecting skilled freelancers with businesses striving for excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing