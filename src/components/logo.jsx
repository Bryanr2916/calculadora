
import freecodecampLogo from '../images/freecodecamp-logo.png';

function Logo(){
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img className='freecodecamp-logo' src={freecodecampLogo} alt="frecodecamp logo" />
          </div>
    );
}

export default Logo;