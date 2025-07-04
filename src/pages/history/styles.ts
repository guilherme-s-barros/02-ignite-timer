import styled, { useTheme } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.gray[100]}
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    th {
      background: ${(props) => props.theme.gray[600]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.gray[100]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme.gray[700]};
      border-top: 4px solid ${(props) => props.theme.gray[800]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

type ValidStatusColor = 'green' | 'red' | 'yellow'

interface StatusProps {
	color: ValidStatusColor
}

function getThemeColor(color: ValidStatusColor) {
	const theme = useTheme()

	return theme[color][500]
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background: ${(props) => getThemeColor(props.color)};
  }
`
