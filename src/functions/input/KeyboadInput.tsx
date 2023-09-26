import {useKeyPressEvent} from 'react-use';
import { Pad } from './pad/Pad';

export const KeyboadInput = () => {
  useKeyPressEvent('w', () => {console.log('A')}, () => {console.log('B')})

  return (<>
    <Pad />
  </>)
}