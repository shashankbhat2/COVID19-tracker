import React,{Component} from 'react'
import styles from './Footer.module.css';

class Footer extends Component {
    render(){
        return(
            <div >
                <span className={styles.li}>
                    <p className={styles.ptitle}>Preventive Measures:</p>
                    <li className={styles.plist}> 😷 &nbsp; Wear Mask</li>
                    <li className={styles.plist}>  &nbsp; 🚫 &nbsp; Do not go outside</li>
                    <li className={styles.plist}>  &nbsp; 📏 &nbsp; Keep distance</li>
                    <p className={styles.ptitle}>  &nbsp; 🤗 &nbsp; This too shall pass!</p>
                </span>
                <div className={styles.dev}>
                <p> Made with ❤️ by <a href="https://www.instagram.com/bhat.exe/">Shashank Bhat.</a></p>
                <p id="thanks"> &nbsp; Thanks to <a href='https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A/about' target="_blank" className="lnk">Javascript Mastery</a> for the tutorial.</p>
                <p id="thanks"> &nbsp; powered by  <a href='https://covid19.mathdro.id/' target="_blank" className="lnk">Mathdroid API.</a></p>
                </div>
            </div>
        )
    }
}
export default Footer;