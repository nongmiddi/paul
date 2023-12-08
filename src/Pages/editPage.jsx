import './editPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserPen,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function edit(){
    return(
        <div className='edit'>
                
                <div><img className='Profile1' src='/images/Profile.png' /></div>
                <div><button className='Change'> CHANGE     <FontAwesomeIcon icon={faUserPen} /></button></div>
                <div className='name'> Wannaporn TeachaBunnaput </div>

            <div className='keepbox'>

            <div className='box'>
                <div className='letter'> NAME </div>
                <input className='namebox' type="text" value="Name"/>

                <div className='letter'> SURNAME </div>
                <input className='namebox' type="text" value="Surname"/>
            </div>
            
            <div className='box'>
                <div className='letter'> EMAIL </div>
                <input className='namebox' type="text" value="Email"/>

                <div className='letter'> MOBLIE </div>
                <input className='namebox' type="text" value="Moblie"/>
            </div>

            </div>

            <div> 
                <a href="/"><button className='savebut'> 
                    SAVE
                </button></a>
            </div>
        </div>
    );
}

export default edit