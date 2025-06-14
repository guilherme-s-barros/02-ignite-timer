import { Play } from 'phosphor-react'

import {
	CountdownContainer,
	FormContainer,
	FormInputs,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountdownButton,
	TextInput,
} from './styles'

export function Home() {
	return (
		<HomeContainer>
			<FormContainer>
				<FormInputs>
					<label htmlFor="task">Vou trabalhar em</label>
					<TextInput
						type="text"
						id="task"
						placeholder="Dê um nome para o seu projeto"
					/>

					<label htmlFor="minutesAmount">durante</label>
					<MinutesAmountInput
						type="number"
						id="minutesAmount"
						placeholder="00"
					/>

					<span>minutos.</span>
				</FormInputs>

				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>

				<StartCountdownButton type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</FormContainer>
		</HomeContainer>
	)
}
