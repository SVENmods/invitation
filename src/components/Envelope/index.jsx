import { useState } from 'react'
import '../../styles/envelope/index.scss'
import cls from 'classnames'
const Envelope = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpen = () => {
		setIsOpen(true)
	}
	const handleReset = () => {
		setIsOpen(false)
	}
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full min-h-screen">
				<div className="font-oranienbaum text-2xl">
					текст в Oranienbaum
				</div>
				<div className="font-source-serif text-2xl">
					текст в Source Serif 4
				</div>
				<div className="font-manrope text-2xl">
					текст в Manrope
				</div>
				<div className="">
					<div className={cls('envelope', isOpen ? 'open' : 'close')} onClick={handleOpen}>
						<div className="front flap"></div>
						<div className="front pocket"></div>
						<div className="letter">
							<div className="words line1"></div>
							<div className="words line2"></div>
							<div className="words line3"></div>
							<div className="words line4"></div>
						</div>
						<div className="hearts">
							<div className="heart a1"></div>
							<div className="heart a2"></div>
							<div className="heart a3"></div>
						</div>
					</div>
					<div className="reset">
						<button id="open" onClick={handleOpen}>
							Open
						</button>
						<button id="reset" onClick={handleReset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Envelope
