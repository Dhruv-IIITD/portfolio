import styles from './HeroStyles.module.css';
import heroImg from '../../assets/cat.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import cfDark from '../../assets/cf.png';
import ccDark from '../../assets/CodeChef-logo.jpeg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const isLightTheme = theme === 'light';

  return (
    <section id="hero" className={styles.container}>
      {/* <div className={styles.imageContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Dhruv Sharma"
        />
      </div> */}
      <div className={styles.colorModeContainer}>
          <img
              className={styles.colorModeIcon}
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
          />
          <span className={`${styles.modeText} ${isLightTheme ? styles.lightThemeText : styles.darkThemeText}`}>
            <b> Mode </b>
          </span>
      </div>
      <div className={styles.info}>
        <h1>Dhruv Sharma<br /></h1>
        <h2>Student at IIIT-D</h2>
        <span className={styles.socialLinks}>
          <a href="https://github.com/" target="https://github.com/Dhruv-IIITD">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://codeforces.com/" target="https://codeforces.com/profile/dhruv22171/">
            <img src={cfDark} alt="Codeforces icon" />
          </a>
        </span>
        <p className={styles.description}>
          Engineering student at IIITD and a passionate competitive programmer.
        </p>
        <p>
          <b>Codeforces</b>:  
          <a href="https://codeforces.com/" target="https://codeforces.com/profile/dhruv22171/">dhruv22171</a> 
          <br />
          <b>Rating: 1266, Max Rating: 1328</b>
        </p>
        <p>
          <b>Codechef</b>: 
          <a href="https://codechef.com/" target="https://www.codechef.com/users/dhruv22171">dhruv22171</a> 
          <br />
          <b>Rating: 1518, Max Rating: 1518</b>
        </p>
        <a href={CV} download>
          <button className={styles.downloadButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
