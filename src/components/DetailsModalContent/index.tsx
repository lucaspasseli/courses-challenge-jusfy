import { FC } from 'react'
import * as S from './styles'
import { Course } from '../../types'

import Teacher from '../Teacher'
import Article from '../ui/Article'
import { convertMinutesToHoursAndMinutes } from '../../utils'

const DetailsModalContent: FC<Course> = ({
  titulo,
  professores,
  informacoes: { duracao, responsavel, idioma, publicacao, certificado },
  sinopse,
  capa,
  numeracao,
  codigo
}) => {
  const infoDetails = [
    { name: 'Duração', value: convertMinutesToHoursAndMinutes(Number(duracao)) },
    { name: 'Responsável', value: responsavel },
    { name: 'Publicação', value: publicacao },
    { name: 'Idioma', value: idioma },
    { name: 'Certificação', value: `${certificado ? 'Com' : 'Sem'} certificação` },
    { name: 'Numeração', value: numeracao },
    { name: 'Código', value: codigo }
  ]

  return (
    <S.Container>
      <S.Image src={capa} alt={titulo} />
      <S.Wrapper>
        <S.Info>
          <S.Title>{titulo}</S.Title>
          {professores.map((teacher, index) =>
            index === professores.length - 1 ? (
              <Teacher id={teacher} />
            ) : (
              <Teacher id={teacher} hasComma />
            )
          )}
        </S.Info>
        <S.SubTitle>INFORMAÇÕES</S.SubTitle>
        <S.List>
          {infoDetails.map(({ name, value }) => (
            <S.ListItem>
              <span>
                <b>{name}</b>
              </span>
              <span>{value}</span>
            </S.ListItem>
          ))}
        </S.List>
        <S.SubTitle>SINOPSE DO CURSO</S.SubTitle>
        <Article text={sinopse} />
      </S.Wrapper>
    </S.Container>
  )
}

export default DetailsModalContent
