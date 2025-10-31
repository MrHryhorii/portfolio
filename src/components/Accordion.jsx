import { createContext, useContext, useRef, useEffect, useState } from "react"
import { ChevronDown } from "react-feather"
import styles from '../css/Accordion.module.css';

const AccordianContext = createContext()

export const Accordian = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected, onChange])

  return (
    <ul className={styles.accordion} {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export const AccordianItem = ({ children, value, trigger, ...props }) => {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className={styles.item} {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={styles.header}
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
        />
      </header>
      <div
        className={styles.contentContainer}
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className={styles.contentInner} ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}
