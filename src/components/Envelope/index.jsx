import { useEffect, useRef, useState } from 'react'
import '../../styles/envelope/index.scss'
import cls from 'classnames'
import LetterContent from './LetterContent'

const Envelope = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isLetterMounted, setIsLetterMounted] = useState(false)
	const [isLetterExpanded, setIsLetterExpanded] = useState(false)
	const expandTimerRef = useRef(null)
	const closeTimerRef = useRef(null)

	const handleOpenEnvelope = () => {
		if (isLetterMounted) return

		setIsOpen(true)

		if (expandTimerRef.current) {
			clearTimeout(expandTimerRef.current)
		}

		expandTimerRef.current = setTimeout(() => {
			setIsLetterMounted(true)
			setIsLetterExpanded(true)
		}, 1000)
	}

	const handleCloseLetter = () => {
		setIsLetterExpanded(false)

		if (expandTimerRef.current) {
			clearTimeout(expandTimerRef.current)
			expandTimerRef.current = null
		}

		if (closeTimerRef.current) {
			clearTimeout(closeTimerRef.current)
		}

		closeTimerRef.current = setTimeout(() => {
			setIsLetterMounted(false)
			setIsOpen(false)
			closeTimerRef.current = null
		}, 260)
	}

	useEffect(() => {
		return () => {
			if (expandTimerRef.current) {
				clearTimeout(expandTimerRef.current)
			}
			if (closeTimerRef.current) {
				clearTimeout(closeTimerRef.current)
			}
		}
	}, [])

	const envelopeClasses = cls('envelope', isOpen ? 'open' : 'close')

	return (
		<>
			<main className="flex flex-col justify-center items-center px-4 py-12 md:py-20 w-full min-h-screen">
				<section className="flex flex-col items-center gap-10 md:gap-14 mx-auto w-full max-w-content">
					<header className="space-y-2 text-center">
						<h1 className="font-display text-(--color-ink) text-3xl md:text-4xl uppercase tracking-[0.08em]">
							Ваше приглашение на свадьбу
						</h1>
					</header>

					<div className="relative flex flex-col items-center gap-8 md:gap-10 w-full">
						<button
							type="button"
							className="rounded-sm outline-none focus-visible:ring-blue-400 focus-visible:ring-2 focus-visible:ring-offset-(--color-bg) focus-visible:ring-offset-2"
							onClick={handleOpenEnvelope}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === ' ') {
									event.preventDefault()
									handleOpenEnvelope()
								}
							}}
							aria-label="Открыть приглашение"
						>
							<div className={envelopeClasses}>
								<div className="front flap"></div>
								<div className="front pocket"></div>
								<div className="letter">
									<div className="words line1"></div>
									<div className="words line2"></div>
									<div className="words line3"></div>
									<div className="words line4"></div>
								</div>
								<div className="seal" aria-hidden="true"></div>
							</div>
						</button>

						{isLetterMounted && (
							<div className={cls('modal modal-middle', isLetterExpanded && 'modal-open')}>
								<div
									className="modal-box max-w-[1440px] w-full p-0 bg-(--color-surface) border border-(--color-border) shadow-(--shadow-card)"
									onClick={(event) => event.stopPropagation()}
								>
									<LetterContent />
								</div>
								<div
									className="modal-backdrop"
									onClick={handleCloseLetter}
								></div>
							</div>
						)}
					</div>
				</section>
			</main>

			{isLetterMounted && (
				<button
					type="button"
					className="fixed bottom-6 left-1/2 -translate-x-1/2 z-1000 font-ui text-xs tracking-[0.24em] uppercase px-5 py-2 rounded-sm border border-(--color-border) bg-(--color-surface)/80 text-(--color-ink-muted) hover:text-(--color-ink) hover:bg-(--color-surface) transition-colors duration-200 backdrop-blur-[1px]"
					onClick={handleCloseLetter}
				>
					закрыть письмо
				</button>
			)}
		</>
	)
}

export default Envelope

