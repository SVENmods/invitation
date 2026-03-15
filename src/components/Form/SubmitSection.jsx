const SubmitSection = ({ isSubmitting, submitError }) => {
	return (
		<>
			<div className="flex justify-center pt-2">
				<button
					type="submit"
					className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3.5 rounded-sm border border-(--color-border)/70 bg-(--color-surface) text-(--color-ink) font-ui text-[0.6rem] md:text-xs tracking-[0.28em] uppercase shadow-soft hover:bg-(--color-surface)/95 hover:shadow-soft/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-border) focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] transition-all duration-300 ease-out cursor-pointer"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Отправляем...' : 'Отправить ответ'}
				</button>
			</div>

			{submitError && (
				<p className="mt-4 font-ui text-red-500 text-xs md:text-sm text-center">
					{submitError}
				</p>
			)}
		</>
	)
}

export default SubmitSection

