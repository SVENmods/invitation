import { useState, useEffect } from 'react'
import cls from 'classnames'

const TARGET_DATE = new Date('2026-07-12T15:00:00')

const getDeclension = (value, [one, few, many]) => {
	const n = Math.abs(value) % 100
	const n1 = n % 10

	if (n > 10 && n < 20) return many
	if (n1 > 1 && n1 < 5) return few
	if (n1 === 1) return one

	return many
}

const formatTargetDate = (date) => {
	const months = [
		'ЯНВАРЯ',
		'ФЕВРАЛЯ',
		'МАРТА',
		'АПРЕЛЯ',
		'МАЯ',
		'ИЮНЯ',
		'ИЮЛЯ',
		'АВГУСТА',
		'СЕНТЯБРЯ',
		'ОКТЯБРЯ',
		'НОЯБРЯ',
		'ДЕКАБРЯ',
	]

	const day = String(date.getDate()).padStart(2, '0')
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')

	return `${day} ${month} ${year}, ${hours}:${minutes}`
}

const DateCounter = ({ className }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const diff = TARGET_DATE.getTime() - now.getTime()

			if (diff <= 0) {
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				})
				return
			}

			const days = Math.floor(diff / (1000 * 60 * 60 * 24))
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
			const minutes = Math.floor((diff / (1000 * 60)) % 60)
			const seconds = Math.floor((diff / 1000) % 60)

			setTimeLeft({ days, hours, minutes, seconds })
		}

		updateTime()
		const interval = setInterval(updateTime, 1000)

		return () => clearInterval(interval)
	}, [])

	const blocks = [
		{
			id: 'days',
			value: timeLeft.days,
			valueText: String(timeLeft.days).padStart(3, '0'),
			valueWidthClass: 'w-[3ch]',
			label: getDeclension(timeLeft.days, ['день', 'дня', 'дней']),
		},
		{
			id: 'hours',
			value: timeLeft.hours,
			valueText: String(timeLeft.hours).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.hours, ['час', 'часа', 'часов']),
		},
		{
			id: 'minutes',
			value: timeLeft.minutes,
			valueText: String(timeLeft.minutes).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.minutes, ['минута', 'минуты', 'минут']),
		},
		{
			id: 'seconds',
			value: timeLeft.seconds,
			valueText: String(timeLeft.seconds).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.seconds, ['секунда', 'секунды', 'секунд']),
		},
	]

	const formattedTargetDate = formatTargetDate(TARGET_DATE)

	return (
		<section
			className={cls(
				"w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 text-center",
				className
			)}
		>
			<div className="flex flex-col items-center gap-4 md:gap-6">
				<div className="flex flex-col flex-1 items-center gap-4 w-full">
					<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
						Дата и время
					</h2>
					<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
						обратный отсчёт до нашего дня
					</p>

					<div className="flex justify-center w-full">
						<div className="gap-3 md:gap-4 grid grid-cols-2 sm:grid-cols-4 w-full max-w-xl">
							{blocks.map((block) => (
								<div
									key={block.id}
									className="flex flex-col items-center justify-center border border-(--color-border)/60 bg-white/75 px-4 py-3 md:px-5 md:py-4 rounded-sm shadow-(--shadow-subtle) min-h-[86px] md:min-h-[100px] min-w-[110px] md:min-w-[132px]"
								>
									<span
										className={cls(
											'font-display tabular-nums text-2xl md:text-3xl lg:text-4xl text-(--color-ink) leading-none inline-flex justify-center text-center',
											block.valueWidthClass
										)}
									>
										{block.valueText}
									</span>
									<span className="mt-2 font-ui text-[0.6rem] md:text-[0.7rem] tracking-[0.24em] uppercase text-(--color-ink-muted) whitespace-nowrap">
										{block.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex justify-center md:justify-end md:items-center">
					<div className="flex items-center">
						<p className="font-ui text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-(--color-ink-muted) origin-center whitespace-nowrap">
							{formattedTargetDate}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DateCounter