import classNames from 'classnames';

export const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<>
			<div
				className={classNames(
					'mx-auto max-w-[1400px] pt-[100px] pb-[20px]',
					className
				)}
			>
				{children}
			</div>
		</>
	);
};
