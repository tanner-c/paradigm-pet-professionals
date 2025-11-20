export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={`
      max-w-7xl 
      mx-auto 
      px-4 
      sm:px-6 
      lg:px-8
      xl:shadow-xl
      xl:border
      border-(--secondary-color-dim-gray)
      bg-white
      mb-12
      mt-12
      rounded-2xl
    `}>
      {children}
    </div>
  );
}