import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import Envelope from './components/Envelope/Envelope'

function App() {

	return (
		<>
			<div className="flex flex-col justify-center items-center px-4 py-12 md:py-20 w-full min-h-screen">
				<section className="flex flex-col items-center gap-10 md:gap-14 mx-auto w-full max-w-content">
					<header className="text-center">
						<h1 className="font-display text-(--color-ink) text-3xl md:text-4xl uppercase tracking-[0.08em]">
							Приглашение на свадьбу
						</h1>
					</header>
					<main>
						<Envelope />
					</main>
				</section>
			</div>
		</>
	)
}

export default App
