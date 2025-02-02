export default function loading() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="animate-pulse rounded-xl bg-muted/50 h-[16rem] col-span-1" />
        <div className="animate-pulse rounded-xl bg-muted/50 h-[16rem] col-span-2" />
      </div>
      <div className="animate-pulse min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
