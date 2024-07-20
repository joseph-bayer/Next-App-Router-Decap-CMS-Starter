import LoadingSpinner from "../loading-spinner/loading-spinner";

export default function FullPageLoadingIndicator() {
  return (
    <div className="fixed inset-0 z-[100] flex h-screen w-screen flex-row items-center justify-center bg-gradient-to-b from-superSaiyan/75 to-vegeta bg-opacity-75">
      {/* TODO: somehow pass $coffee variable to fill */}
      <LoadingSpinner height={"180px"} width={"180px"} fill={"#702911"} />
    </div>
  );
}
