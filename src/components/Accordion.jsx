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

  const contentRef = useRef(null)
  const containerRef = useRef(null)

  const [height, setHeight] = useState(open ? contentRef.current?.offsetHeight || 0 : 0);

  useEffect(() => {
    const updateHeight = () => {
      if (open && contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
      } else if (!open) {
        setHeight(0);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener('resize', updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [open]);

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
        ref={containerRef}
        className={styles.contentContainer}
        style={{ height: `${height}px` }} 
      >
        <div className={styles.contentInner} ref={contentRef}>
          {children}
        </div>
      </div>
    </li>
  )
}
