export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}