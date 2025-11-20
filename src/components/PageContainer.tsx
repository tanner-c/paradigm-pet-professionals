export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={`
      max-w-7xl 
      mx-auto 
      px-4 
      sm:px-6 
      lg:px-8
      xl:shadow-xl
      bg-white
      mb-12
      mt-12
      pt-8
      pb-8
      xl:rounded-2xl
      bg-linear-to-br
      from-white
      to-slate-50
      shadow-md
      xl:ring-1
      ring-slate-200
    `}>
      {children}
    </div>
  );
}