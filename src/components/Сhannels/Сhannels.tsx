import styles from './Channels.module.scss'
import { logos } from '../../database/logos'
import { channelsContent } from '../../database/content';
import { useState } from 'react'

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
            <button 
              key={category}
              // className={selectedCategory === category ? 'active' : ''}
              className={styles.channels_category}
              value={selectedCategory}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button >
          )}
        </div>
        <div className={styles.channels_logos}>
          {filteredLogos.map(logo =>
            <img key={logo.link} src={logo.link} alt="logo" width={160} height={90} />
          )}
        </div>
      </div> 
    </section>
  )
}

export default Channels