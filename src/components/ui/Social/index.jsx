import styles from './Social.module.css'
import instaImg from '../../../assets/instagram.svg'
import faceImg from '../../../assets/facebook.svg'
import twitImg from '../../../assets/twitter.svg'

const Social = () => {
    return (
        <div className={styles.socialContainer}>
            <a href="https://instagram.com/dudzpedra" target="_blank" rel="noopener noreferrer">
                <img src={instaImg} alt="Instagram" />
            </a>
            <a href="https://twitter.com/dudzpedra" target="_blank" rel="noopener noreferrer">
                <img src={twitImg} alt="Twitter" />
            </a>
            <a href="https://github.com/dudzpedra" target="_blank" rel="noopener noreferrer">
                <img src={faceImg} alt="Facebook" />
            </a>
        </div>
    )
}

export default Social