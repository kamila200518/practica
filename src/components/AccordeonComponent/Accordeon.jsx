import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='О нас' text='lorem' />
                <AccordeonItem title='О машинах' text='lorem' />
            </div>
        </>
    )
}