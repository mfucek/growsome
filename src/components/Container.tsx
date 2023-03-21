export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="mx-auto max-w-[1400px] mb-[120px]">{children}</div>
		</>
	);
};
