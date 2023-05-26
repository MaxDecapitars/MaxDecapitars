import i18n from '@/helpers/i18n'
import { I18nextProvider} from 'react-i18next'

type Props = {
  children: React.ReactNode
}

const LocalesProvider = ({children}: Props) => {
  
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}

export default LocalesProvider