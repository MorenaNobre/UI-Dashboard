import styled from 'styled-components'
import { SearchPlus } from 'styled-icons/fa-solid'
import { Home } from 'styled-icons/boxicons-solid'
import { ChatNew } from 'styled-icons/remix-fill'
import { GearFill } from 'styled-icons/bootstrap'
import { ExitToApp } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: MN;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-primary);
  max-height: 100vh;
`

export const IconsWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px 0 16px 0;
`

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(SearchPlus)`
  width: 24px;
  height: 24px;
  color: var(--white-icon);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
  }
`

export const HomeIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 132px;
`

export const HomeIcon = styled(Home)`
  width: 24px;
  height: 24px;
  color: var(--white-icon);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
  }
`

export const InfoChatIcon = styled(ChatNew)`
  margin-top: 42px;
  width: 24px;
  height: 24px;
  color: var(--white-icon);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
  }
`

export const ConfigIcon = styled(GearFill)`
  margin-top: 42px;
  width: 24px;
  height: 24px;
  color: var(--white-icon);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
  }
`

export const ExitWrapper = styled.div`
  margin-top: 308px;
`

export const ExitIcon = styled(ExitToApp)`
  width: 24px;
  height: 24px;
  color: var(--white-icon);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
  }
`
