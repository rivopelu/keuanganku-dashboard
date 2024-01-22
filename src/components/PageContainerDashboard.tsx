export function PageContainerDashboard(props: IProps) {
  return (
    <div
      className={`px-16 py-20     ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}

interface IProps {
  children: any;
  className?: string;
}
