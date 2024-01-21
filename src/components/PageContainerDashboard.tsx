export function PageContainerDashboard(props: IProps) {
  return (
    <section
      className={`mx-16  mt-8    ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
}

interface IProps {
  children: any;
  className?: string;
}
