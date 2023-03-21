export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="mx-auto max-w-[1170px]">{children}</div>
		</>
	);
};
