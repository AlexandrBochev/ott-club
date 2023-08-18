import styles from './Channels.module.scss'
import lightning from '../../assets/svg/lightning.svg'
import redArr from '../../assets/svg/red-arr.svg'
import { logos } from '../../database/logos'
import { channelsContent } from '../../database/content';
import { useEffect, useState } from 'react'
import Button from '../Button/Button';
import { motion as m } from "framer-motion"

const Channels = () => {
  const [selectedCategory, setSelectedCategory] = useState("Популярные")
  const [limit, setLimit] = useState(6)
  const [initialLimit, setInitialLimit] = useState(6)
  const [showAll, setShowAll] = useState(false);

  let arrStyle = showAll ? styles.arr_up : styles.arr_down

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category.name)
  }

  const filteredLogos = logos.filter(logo => logo.categories.includes(selectedCategory))

  useEffect(() => {
    const updateLimit = () => {
      const screenWidth = window.innerWidth
      let newLimit = 6
      
      if (screenWidth >= 768) {
        newLimit = 8
      }

      if (screenWidth >= 990) {
        newLimit = 10
      }
      setLimit(newLimit)
    }

    window.addEventListener('resize', updateLimit)
    updateLimit()

    return () => {
      window.removeEventListener('resize', updateLimit)
    }
  }, [])

  const handleToggleShowAll = () => {
    if (showAll) {
      setLimit(initialLimit);
    } else {
      setInitialLimit(limit);
      setLimit(filteredLogos.length);
    }
    setShowAll(!showAll);
  };

  return (
    <section className='container'>
      <div className={styles.channels}>
        <div className={styles.channels_title}>
          <img src={lightning} alt="icon" className={styles.channels_icon} />
          <h2>{channelsContent.title}</h2>
        </div>
        <p className={styles.channels_description}>{channelsContent.description}</p>
      </div>
      <div className={styles.channels_wrapper}>
        <div className={styles.channels_filter}>
          {channelsContent.categories.map(category =>
            <m.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: category.id * 0.2, duration: 0.4, ease: "easeInOut" }}
              onClick={() => handleCategoryChange(category)}>
              <Button 
                key={category.id}
                name={category.name}
                active={selectedCategory === category.name ? true : false}
              />
            </m.div>
          )}
        </div>
        <div className={styles.channels_logos}>
          {filteredLogos.slice(0, limit).map(logo =>
            <m.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: logo.id * 0.01, duration: 0.4, ease: "easeInOut" }}
              style={{background: logo.background}}
              className={styles.channels_logo}>
              <img key={logo.link} src={logo.link} alt="logo" />
            </m.div>
          )} 
        </div>
        <div className={styles.red_arr} onClick={handleToggleShowAll}>
            <p>{showAll ? 'Скрыть' : 'Показать все'}</p>
            <img src={redArr} alt="Red Arr" className={arrStyle} />
          </div>
      </div> 
    </section>
  )
}

export default Channels