const AttendanceField = ({ register, errors }) => {
	return (
		<div className="space-y-3 md:space-y-4 w-full">
			<p className="font-body text-sm md:text-base text-(--color-ink)">
				Вы придёте на&nbsp;праздник?
			</p>
			<div className="flex md:flex-row flex-col gap-3 md:gap-6">
				<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
					<input
						type="radio"
						value="yes"
						className="radio radio-sm"
						{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
					/>
					<span>Да, с&nbsp;радостью буду</span>
				</label>
				<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
					<input
						type="radio"
						value="no"
						className="radio radio-sm"
						{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
					/>
					<span>К&nbsp;сожалению, не&nbsp;смогу</span>
				</label>
			</div>
			{errors.attendance && (
				<p className="mt-1 text-red-500 text-xs">{errors.attendance.message}</p>
			)}
		</div>
	)
}

export default AttendanceField

