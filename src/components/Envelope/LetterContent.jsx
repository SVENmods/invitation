import DateCounter from './DateCounter';
import Location from './Location';
import Steps from './Steps';
import DressCode from './DressCode';
import Form from './Form';

const LetterContent = () => {
	return (
		<section className="w-full bg-(--color-surface) text-(--color-ink) border border-(--color-border) shadow-(--shadow-card) rounded-md px-6 md:px-10 lg:px-16 py-10 md:py-14 letter-modal pb-15 md:pb-10">
			<header className="mb-10 md:mb-12 text-center">
				<p className="text-xs tracking-[0.25em] uppercase text-(--color-ink-muted) mb-3 font-ui">
					приглашение на свадьбу
				</p>
				<h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-[0.08em] uppercase text-(--color-ink)">
					ИМЕНА ЖЕНИХА &amp; НЕВЕСТЫ
				</h1>
				<p className="mt-4 text-base md:text-lg text-(--color-ink-muted) font-body">
					Тепло приглашаем вас разделить с нами день свадьбы. Ниже будут размещены основные детали, таймер обратного
					отсчёта и форма для ответа.
				</p>
			</header>

			<div className="flex flex-col gap-6 md:gap-8 space-y-6 md:space-y-8">

				<div className="w-full">
					<Location />
				</div>

				<div className="w-full">
					<DateCounter className="" />
				</div>

				<div className="w-full">
					<Steps />
				</div>

				<div className="w-full">
					<DressCode />
				</div>

				<div className="w-full">
					<Form />
				</div>

			</div>
		</section>
	)
}

export default LetterContent

