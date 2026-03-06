import DateCounter from './DateCounter';
import Location from './Location';
import Steps from './Steps';
import DressCode from './DressCode';
import Form from './Form';
import WelcomeBlock from './WelcomeBlock';
import GuestText from './GuestText';

const LetterContent = () => {
	return (
		<section className="w-full bg-(--color-surface) text-(--color-ink) border border-(--color-border) shadow-(--shadow-card) rounded-md px-6 md:px-10 lg:px-16 py-10 md:py-14 letter-modal pb-15 md:pb-10">
			<div className="flex flex-col gap-6 md:gap-8 space-y-6 md:space-y-8">

				<div className="w-full">
					<WelcomeBlock />
				</div>

				<div className="w-full">
					<GuestText />
				</div>

				<div className="w-full">
					<Location />
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

