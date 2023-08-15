import styles from './Channels.module.scss'
import { logos } from '../../database/logos'
import { channelsContent } from '../../database/content';
import { useState } from 'react'
import Button from '../Button/Button';

const Channels = () => {
  const [selectedCategory, setSelectedCategory] = useState("Популярные")

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category)
  }

  const filteredLogos = logos.filter(logo => logo.categories.includes(selectedCategory));

  return (
    <section className='container'>
      <div className={styles.channels}>
        <div className={styles.channels_filter}>
          {channelsContent.categories.map(category =>
            <div onClick={() => handleCategoryChange(category)}>
              <Button 
                key={category}
                name={category}
                active={selectedCategory === category ? true : false}
              />
            </div>
          )}
        </div>
        <div className={styles.channels_logos}>
          {filteredLogos.map(logo =>
            <div 
              style={{background: logo.background}}
              className={styles.channels_logo}>
              <img key={logo.link} src={logo.link} alt="logo" />
            </div>
          )} 
        </div>
      </div> 
    </section>
  )
}

export default Channels