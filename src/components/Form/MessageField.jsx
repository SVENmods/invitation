import { textPattern } from './validationPatterns'

const MessageField = ({ register, errors }) => {
	return (
		<div className="space-y-3 md:space-y-4 w-full">
			<p className="font-body text-sm md:text-base text-(--color-ink)">
				Сообщение для&nbsp;пары (по&nbsp;желанию)
			</p>
			<textarea
				rows={4}
				maxLength={1000}
				className="w-full max-h-[500px] border border-(--color-border) bg-transparent rounded-sm px-3 py-2 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
				placeholder="Введите сообщение для&nbsp;пары, если хотите что-то&nbsp;добавить"
				{...register('message', {
					maxLength: {
						value: 1000,
						message: 'Сообщение не должно превышать 1000 символов',
					},
					pattern: {
						value: textPattern,
						message:
							'Пожалуйста, не используйте специальные символы вроде < или > в сообщении',
					},
				})}
			/>
			{errors.message && (
				<p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
			)}
		</div>
	)
}

export default MessageField

