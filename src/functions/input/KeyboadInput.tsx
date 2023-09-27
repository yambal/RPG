import { useKeyPressEvent } from 'react-use';
import { useAppDispatch } from '../../app/selectors/selector';
import { clearDirection, setDirection } from './inputSlice';

export const KeyboadInput = () => {
  const dispatch = useAppDispatch()

  useKeyPressEvent('w', () => {
    dispatch(setDirection({direction: 'north'}))
  }, () => {
    dispatch(clearDirection({direction: 'north'}))
  })

  useKeyPressEvent('a', () => {
    dispatch(setDirection({direction: 'west'}))
  }, () => {
    dispatch(clearDirection({direction: 'west'}))
  })

  useKeyPressEvent('d', () => {
    dispatch(setDirection({direction: 'east'}))
  }, () => {
    dispatch(clearDirection({direction: 'east'}))
  })

  useKeyPressEvent('s', () => {
    dispatch(setDirection({direction: 'south'}))
  }, () => {
    dispatch(clearDirection({direction: 'south'}))
  })

  return (<>
  </>)
}