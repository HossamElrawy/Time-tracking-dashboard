import styles from './App.module.css'
import avatar from "../images/image-jeremy.png"
import data from "../data.json"
import Work from "../images/icon-work.svg"
import Play from "../images/icon-play.svg"
import Study from "../images/icon-study.svg"
import Exercise from "../images/icon-exercise.svg"
import Social from "../images/icon-social.svg"
import SelfCare from "../images/icon-self-care.svg"
import elipsis from "../images/icon-ellipsis.svg"
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState("daily");

  const icons = [
    Work,
    Play,
    Study,
    Exercise,
    Social,
    SelfCare
  ]
    const gridsDaily = data.map((elem,index) => {
    return (
        <div key={index} className={styles.element}>
          <div className={styles['element' + index]}></div>
          <img src={icons[index]} className={styles.icon} alt="" />
          <div className={styles.insideDiv}>
            <div className={styles.titleDiv}>
              <p>
                {elem.title} 
              </p>
              <div className={styles.elipsisContainer}>
                <img src={elipsis} className={styles.elipsis} alt="" />
              </div>
            </div>
            <div className={styles.hoursInside}>
              <p className={styles.hours}>
                {elem.timeframes.daily.current}hrs
              </p>
              <p className={styles.last}>
                Last Week - {elem.timeframes.daily.previous}hrs
              </p>
            </div>
          </div>
        </div>
    )
  })
  const gridsWeekly = data.map((elem,index) => {
    return (
        <div key={index} className={styles.element}>
          <div className={styles['element' + index]}></div>
          <img src={icons[index]} className={styles.icon} alt="" />
          <div className={styles.insideDiv}>
            <div className={styles.titleDiv}>
              <p>
                {elem.title} 
              </p>
              <div className={styles.elipsisContainer}>
                <img src={elipsis} className={styles.elipsis} alt="" />
              </div>
            </div>
            <div className={styles.hoursInside}>
              <p className={styles.hours}>
                {elem.timeframes.weekly.current}hrs
              </p>
              <p className={styles.last}>
                Last Week - {elem.timeframes.weekly.previous}hrs
              </p>
            </div>
          </div>
        </div>
    )
  })
    const gridsMonthly = data.map((elem,index) => {
    return (
        <div key={index} className={styles.element}>
          <div className={styles['element' + index]}></div>
          <img src={icons[index]} className={styles.icon} alt="" />
          <div className={styles.insideDiv}>
            <div className={styles.titleDiv}>
              <p>
                {elem.title} 
              </p>
              <div className={styles.elipsisContainer}>
                <img src={elipsis} className={styles.elipsis} alt="" />
              </div>
            </div>
            <div className={styles.hoursInside}>
              <p className={styles.hours}>
                {elem.timeframes.monthly.current}hrs
              </p>
              <p className={styles.last}>
                Last Week - {elem.timeframes.monthly.previous}hrs
              </p>
            </div>
          </div>
        </div>
    )
  })
  return (
    <>
      <div className={styles.infoDiv}>
        <div className={styles.jeremyDiv}>
          <img src={avatar} className={styles.jeremy} alt="" />
          <div className={styles.nameDiv}>
            <p className={styles.reportFor}>
              Report for
            </p>
            <p className={styles.name}>
              Jeremy Robson
            </p>
          </div>
        </div>
        <div className={styles.options}>
          <div>
            <input 
              type="radio" 
              id="daily" 
              name="sch" 
              className={styles.hiddenRadio} 
              value="daily"
              checked={selected === "daily"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="daily" className={styles.option}>
              Daily
            </label>
          </div>
          <div>
            <input 
              type="radio" 
              id="weekly" 
              name="sch" 
              className={styles.hiddenRadio} 
              value="weekly" 
              checked={selected === "weekly"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="weekly" className={styles.option}>
              Weekly
            </label>
          </div>
          <div>
            <input 
              type="radio" 
              id="monthly" 
              name="sch" 
              className={styles.hiddenRadio} 
              value="monthly" 
              checked={selected === "monthly"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="monthly" className={styles.option}>
              Monthly
            </label>
          </div>    
        </div>
      </div>
      <div className={styles.grid}>
        {selected === "daily" && gridsDaily}
        {selected === "weekly" && gridsWeekly}
        {selected === "monthly" && gridsMonthly}
      </div>
    </>
  )
}

export default App