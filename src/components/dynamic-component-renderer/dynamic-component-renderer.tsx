interface DynamicComponentRendererProps {
  componentDataList: any[];
}

export default function DynamicComponentRenderer({
  componentDataList,
}: DynamicComponentRendererProps) {
  return (
    <>
      {componentDataList.map((componentData) => {
        switch (componentData.type) {
          case "major-features":
            return <div>TODO: Implement Feature List</div>;
          case "minor-features":
            return <div>TODO: Implement Feature List</div>;
        }
      })}
    </>
  );
}
