import jusfyLogoBlack from '../../assets/images/jusfy-logo-black.png'

import useMediaQuery from '../../hooks/useMediaQuery'

import * as S from './styles'
import useLogin from '../../hooks/useLogin'

const Header = () => {
  const matches = useMediaQuery('(min-width: 1024px)')

  const { logout } = useLogin()

  return (
    <S.Container>
      <img src={jusfyLogoBlack} alt='Jusfy Logo Black' width='70' />
      <S.Wrapper>
        {matches ? (
          <S.Text>
            Bem vindo, <b>Gabriel!</b>
          </S.Text>
        ) : null}
        <S.LogOut onClick={logout} />
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
